import * as React from 'react';
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class TableEntry extends React.Component<any> {

  constructor(props:any) {
    super(props);
  }

  render() {
    return <div>
      <span className={"glyphicon glyphicon-" + this.props.icon}/>
    </div>
  }

}