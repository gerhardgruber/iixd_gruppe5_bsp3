import * as React from 'react';
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class TableEntry extends React.Component<any> {
  render() {
    return <div>
      <span className={this.props.icon}/>
      {this.props.repeat ? <span className="glyphicon glyphicon-repeat"/> : null}
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.discription}</div>
      </div>
      <div>
        <div>{this.props.date}</div>
        <div>{this.props.price}</div>
      </div>
    </div>
  }
}
