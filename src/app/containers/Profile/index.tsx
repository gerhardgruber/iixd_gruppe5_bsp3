import * as React from 'react'
import LoggedInHeader from 'app/components/LoggedInHeader';

export default class Profile extends React.Component {
  render() {
    return <div style={{heigth: '100vh'}}>
      <LoggedInHeader />
      <div className={"container 100"} style={{paddingTop: '16px', height: 'calc(100vh - 40px)'}}>
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
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  Benutzername
                </div>
                <div className="col-md-4">
                  richie_rich
                </div>
              </div>
            </div>
          </div>
          <div className={"col-md-4 col-sm-12"} style={{borderLeft: '1px solid black', height: '100%'}}>
            <h1>Freunde</h1>
          </div>
        </div>
      </div>
    </div>
  }
}