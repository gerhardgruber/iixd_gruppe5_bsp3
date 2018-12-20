import * as React from 'react';
import {STORE_ENTRIES} from "app/constants";
import {inject, observer} from "mobx-react";
import TableEntry from "app/components/DataTable/TableEntry";
import * as styles from './DataTable.css'
import TableEntryGroup from "app/components/DataTable/TableEntryGroup";

@inject(STORE_ENTRIES)
@observer
export default class DataTable extends React.Component<any> {

  renderEntries;

  constructor(props:any) {
    super(props);
    this.renderEntries = Array.apply(null, Array(2))
        .map(() => true);
  }

  render() {

    let i = 0;

    let groupCount = 0;

    return <div className={styles["dataTable"] + " " + styles["scrollbar"]} {...this.props}>
      {this.props[STORE_ENTRIES].getEntriesGroupedByMonth().map(group =>
                <React.Fragment key={groupCount++}>
                  <TableEntryGroup data={group} onClick={this.renderEntries[groupCount] = !this.renderEntries[groupCount]}/>
                  {
                    group.map(entry =>
                        this.renderEntries[groupCount] ?
                          <TableEntry {...entry} key={i++}/> :
                          null)
                  }
                  </React.Fragment>)
      }
    </div>
  }

}
