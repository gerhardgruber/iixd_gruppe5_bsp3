import * as React from 'react';
import TableEntry from "app/components/DataTable/TableEntry";
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class DataTable extends React.Component {
  render() {
    return <div>TableEntries here
      <TableEntry icon="home"/>
    </div>
  }
}
