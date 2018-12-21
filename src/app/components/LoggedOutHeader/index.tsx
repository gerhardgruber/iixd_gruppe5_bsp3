import * as React from 'react';

export default class LoggedOutHeader extends React.Component {
  render() {
    return <div className="row" style={{height: "40px"}}>
      <div className="col-6" style={{transform: 'translate(0%, 50%)'}}>
        <span className="fa fa-user" style={{paddingRight: '6px'}} />
        Nicht eingeloggt
      </div>
      <div className="col-6" style={{textAlign: 'right'}}>
        Sie haben noch keinen Benutzer?
        <button type="button" className="btn btn-secondary">Registrieren</button>
      </div>
    </div>
  }
}