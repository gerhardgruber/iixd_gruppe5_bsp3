import * as React from 'react';
import TableEntry from "app/components/DataTable/TableEntry";
import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class DataTable extends React.Component<any> {
  render() {
    return <React.Fragment>
      {DASHBOARD_TABLE_DATA.map(entry => <TableEntry {...entry}/>)}
    </React.Fragment>
  }
}
