import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import {
  STORE_ROUTER,
} from 'app/constants';
import { Link } from 'react-router-dom'
import * as styles from './NewEntry.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoggedInHeader from 'app/components/LoggedInHeader';

export interface NewEntryProps extends RouteComponentProps<any> {
  /** MobX Stores will be injected via @inject() **/
  // [STORE_ROUTER]: RouterStore;
  // [STOURE_TODO]: TodoStore;
}

export interface NewEntryState {
  categoryOpen:  boolean,
  repeatOpen:    boolean,
  titelInvalid:  boolean,
  titel:         string,
  amountInvalid: boolean,
  amount:        string,
  goback:        boolean,
  modal:         boolean
}

@inject(STORE_ROUTER)
@observer
export default class NewEntry extends React.Component<NewEntryProps, NewEntryState> {
  state = {
    categoryOpen:  false,
    repeatOpen:    false,
    titelInvalid:  false,
    titel:         "",
    amountInvalid: false,
    amount:        "",
    goback:        false,
    modal:         false
  };

  constructor(props: NewEntryProps, context: any) {
    super(props, context);
  }

  toggle=()=> {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let save = null
    let back = null

    if ( this.state.amount.length == 0 && this.state.titel.length == 0 )
    {
      back =
        <Link to="/">
          <button className={styles["customButton"]}>
            <span className={"glyphicon glyphicon-chevron-left " + styles["icon"]}/>
          </button>
        </Link>
    }
    else
    {
      console.log(this.state)
      back =
        <div>
          <button className={styles["customButton"]} onClick={ this.toggle } >
            <span className={"glyphicon glyphicon-chevron-left " + styles["icon"]}/>
          </button>
          <Modal fade={false} backdrop={false} isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader >Sicher verlassen?</ModalHeader>
            <ModalBody>
              Wollen Sie die getätigten Eingaben tatsächlich verwerfen und zum Dashboard zurückkehren?
            </ModalBody>
            <ModalFooter>
              <Link to="/">
                <Button color="primary" onClick={ this.toggle }>Ja</Button>{' '}
              </Link>
              <Button color="secondary" onClick={ this.toggle }>Nein</Button>
            </ModalFooter>
          </Modal>
        </div>
    }

    if ( this.state.amountInvalid || this.state.amount.length == 0 || this.state.titel.length == 0)
    {
      save =
        <button disabled className={styles["customButton"]}>
          <span className={"glyphicon glyphicon-plus " + styles["icon"]}/>
        </button>

    }
    else
    {
      save =
        <Link to="/">
          <button className={styles["customButton"]}>
            <span className={"glyphicon glyphicon-plus " + styles["icon"]}/>
          </button>
        </Link>
    }
    return (
      <div style={{fontSize: '16px', height: '100vh'}}>
        <LoggedInHeader />
        <div className="row">
          <div className={"col-sm-12"}>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Titel:
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control form-control-sm" id="title" placeholder="Titel" onChange={(event) => {
                  let showerror = false
                  let titel = event.target.value;

                  if ( titel.length == 0 )
                  {
                      showerror = true;
                  }

                  this.setState({
                    titelInvalid: showerror,
                    titel: titel
                  });
                }} />
                <div className="alert alert-danger" role="alert" style={{display: this.state.titelInvalid ? "block" : "none"}}>
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Error:</span>
                  Bitte Titel eingeben!
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Datum:
              </label>
              <div className="col-sm-8">
                <input type="date" className="form-control form-control-sm" id="date" placeholder="Datum" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Beschreibung:
              </label>
              <div className="col-sm-8">
                <input type="text" className="form-control form-control-sm" id="description" placeholder="Beschreibung" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Betrag:
              </label>
              <div className="col-sm-8">

                <input type="text" className="form-control form-control-sm" id="amount" placeholder="Betrag" onChange={(event) => {

                  let amount = event.target.value;
                  let showerror = false;
                  let amountAsFloat = parseFloat( amount );
                  let regexp = new RegExp('^[,.0-9]+$');
                  let test = regexp.test(amount);

                  amount = amount.replace(".", "");
                  amount = amount.replace(",", ".");
                  if ( !test )
                  {
                    showerror = true;
                  }
                  if ( isNaN( amountAsFloat ) )
                  {
                    showerror = true;
                  }
                  if ( amount.length == 0 )
                  {
                      showerror = false;
                  }

                  this.setState({
                    amountInvalid: showerror,
                    amount: amount
                  });
                }} />

                <div className="alert alert-danger" role="alert" style={{display: this.state.amountInvalid ? "block" : "none"}}>
                  <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                  <span className="sr-only">Error:</span>
                  Bitte nur Zahlen eingeben!
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Kategorie:
              </label>
              <div className="col-sm-8">
                <select style={{width: '100%'}}>
                  <option>Wohnen</option>
                  <option>Essen &amp; Trinken</option>
                  <option>Mobilität</option>
                  <option>Sport</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-form-label">
                Wiederholung:
              </label>
              <div className="col-sm-8">
                <select style={{width: '100%'}}>
                  <option>Nicht wiederholen</option>
                  <option>Wöchentlich</option>
                  <option>Monatlich</option>
                  <option>Benutzerdefiniert</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={"col-sm-12"}>
              {
                save
              }
              {
                back
              }
          </div>
        </div>
      </div>
    );
  }
}
