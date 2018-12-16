import * as React from 'react';
import TableEntry from "app/components/DataTable/TableEntry";
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class DataTable extends React.Component<any> {
  render() {
    return <div>
      <TableEntry icon="home" repeat={false} date={"12.01.2018"} title={"Miete"} discription={"Miete dieses Monat"} price={"1234"}/>
    </div>
  }
}
