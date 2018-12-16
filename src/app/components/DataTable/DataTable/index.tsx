import * as React from 'react';
import {STORE_ENTRIES} from "app/constants";
import {inject, observer} from "mobx-react";
import TableEntry from "app/components/DataTable/TableEntry";

@inject(STORE_ENTRIES)
@observer
export default class DataTable extends React.Component<any> {
  render() {
    let i = 0;
    return <div {...this.props}>
      {this.props[STORE_ENTRIES].getEntries().map(entry => <TableEntry {...entry} key={i++}/>)}
    </div>
  }
}
