import * as React from 'react';
import { inject, observer } from 'mobx-react';


import {
  STORE_ROUTER,
} from 'app/constants';
import LoggedOutHeader from 'app/components/LoggedOutHeader';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css'

@inject(STORE_ROUTER)
@observer
export class Root extends React.Component<any, any> {
  renderDevTool() {
    return null;
    /*if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }*/
  }

  render() {
    if ( this.props[STORE_ROUTER].loggedIn) {
      return (
        <div className="container">
          {this.props.children}
          {this.renderDevTool()}
        </div>
      );
    } else {
      return <div className="container">
        <LoggedOutHeader />
          <div style={{position: 'relative', height: 'calc(100vh - 40px)'}}>
            <div style={{position: 'absolute', top: '25%', width: '100%', textAlign: 'center'}}>
              <h1>Anmelden</h1>
            </div>

            <div style={{width: '40%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', padding: '10px', paddingTop: '20px', border: '1px solid black'}}>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Benutzer:
                </label>
                <div className="col-sm-8">
                  <input type="text" className="form-control form-control-sm" id="userName" placeholder="Benutzername" />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-4 col-form-label">
                  Passwort:
                </label>
                <div className="col-sm-8">
                  <input type="password" className="form-control form-control-sm" id="password" placeholder="Passwort" />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 col-sm-offset-4">
                  <button type="button" className="btn btn-primary" onClick={() => this.props[STORE_ROUTER].login()}>
                    Anmelden
                  </button>
                </div>
              </div>
              <div className="row" style={{paddingTop: '16px'}}>
                <div className="col-sm-8 col-sm-offset-4">
                  <a href="#">Passwort vergessen?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    }

  }
}
