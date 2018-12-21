import * as React from 'react';

export default class LoggedOutHeader extends React.Component {
  render() {
    return <div className="row" style={{height: "40px", position: 'relative'}}>
      <div className="col-6" style={{top: '50%', position: 'absolute', transform: 'translate(0%, -50%)'}}>
        <span className="fa fa-user" style={{paddingRight: '6px'}} />
        Nicht eingeloggt
      </div>
      <div className="col-6" style={{textAlign: 'right', right: '0px', top: '50%', position: 'absolute', transform: 'translate(0%, -50%)'}}>
        Sie haben noch keinen Benutzer?
        <button type="button" className="btn btn-primary" style={{marginLeft: '6px'}}>Registrieren</button>
      </div>
    </div>
  }
}