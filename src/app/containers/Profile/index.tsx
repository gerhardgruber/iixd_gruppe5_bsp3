import * as React from 'react'
import LoggedInHeader from 'app/components/LoggedInHeader';
import { Link } from 'react-router-dom'

export default class Profile extends React.Component {
  render() {
    return <div style={{heigth: '100vh', fontSize: '16px'}}>
      <LoggedInHeader />
      <div className={"container 100"} style={{paddingTop: '16px', height: 'calc(100vh - 40px)'}}>
        <table style={{width: '100%'}}>
          <tr>
            <td style={{width: '60%', paddingRight: '30px', paddingLeft: '30px', borderRight: '1px solid black', verticalAlign: 'top'}}>
              <div className={"row"}>
                <div className={"col-md-8 col-sm-12"}>
                  <h1>Profil</h1>
                  <br />
                  <br />
                  <div style={{position: 'relative'}}>
                    <span className="fa fa-user" style={{padding: '10px', fontSize: '24px', borderRadius: '50%', border: '1px solid black'}} />
                    <div style={{position: "absolute", top: '0%', left: "32px"}}>
                      <span className="fa fa-pencil-alt" style={{fontSize: '15px'}} />
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label">
                    Benutzername:
                  </label>
                  <div className="col-sm-6">
                    <input type="text" disabled className="form-control form-control-sm" id="user-name" placeholder="Vorname" value={"richie_rich"} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label">
                    E-Mail:
                  </label>
                  <div className="col-sm-6">
                    <input type="email" disabled className="form-control form-control-sm" id="email" placeholder="" value={"richie@rich.com"} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label">
                    Vorname:
                  </label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-sm" id="first-name" placeholder="Vorname" value={"Richie"} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label">
                    Nachname:
                  </label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-sm" id="last-name" placeholder="Nachname" value={"Rich"} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label">
                    Abrechnungslimit:
                  </label>
                  <div className="col-sm-6">
                    <input type="number" className="form-control form-control-sm" id="last-name" placeholder="Abrechnungslimit" value={5000} />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-6 col-form-label">
                    Abrechnungszeitraum:
                  </label>
                  <div className="col-sm-4">
                    <select>
                      <option>Wöchentlich</option>
                      <option selected>Monatlich</option>
                      <option>Quartalsweise</option>
                      <option>Jährlich</option>
                    </select>
                  </div>
                </div>
              </div>
            </td>
            <td style={{width: '40%', verticalAlign: 'top', paddingRight: '30px', paddingLeft: '30px'}}>
              <div className="row">
                <div className="col-sm-12">
                  <h1>Freunde</h1>
                  <br />
                  <br />

                  <ul className="list-group">
                    <li className="list-group-item" style={{position: 'relative'}}>
                      Maria Rich
                      <span className="fa fa-trash" style={{position: 'absolute', right: '14px', top: '50%', transform: 'translate(0%,-50%)'}} />
                    </li>
                    <li className="list-group-item" style={{position: 'relative'}}>
                      Sepp Rich
                      <span className="fa fa-trash" style={{position: 'absolute', right: '14px', top: '50%', transform: 'translate(0%,-50%)'}} />
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td style={{width: '60%', paddingRight: '30px', paddingLeft: '30px', borderRight: '1px solid black', verticalAlign: 'top'}}>
              <div>
                <div className="row">
                  <div className="col-sm-6">
                  <button type="button" className="btn btn-primary">Passwort ändern</button>
                  </div>
                  <div className="col-sm-3">
                    <Link to="/">
                      <button type="button" className="btn btn-primary" style={{width: '100%'}}>Abbrechen</button>
                    </Link>
                  </div>
                  <div className="col-sm-3">
                    <Link to="/">
                      <button type="button" className="btn btn-primary" style={{width: '100%'}}>Speichern</button>
                    </Link>
                  </div>
                </div>
              </div>
            </td>
            <td style={{width: '40%', verticalAlign: 'top', paddingRight: '30px', paddingLeft: '30px'}}>
              <div className="row">
                <div className="col-sm-7 col-sm-offset-5">
                  <button type="button" className="btn btn-primary" style={{width: '100%'}}>Freund einladen</button>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  }
}