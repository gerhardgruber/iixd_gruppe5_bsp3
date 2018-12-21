import * as React from 'react';
import {STORE_ENTRIES} from "app/constants";
import {inject, observer} from "mobx-react";
import TableEntry from "app/components/DataTable/TableEntry";
import * as styles from './DataTable.css'
import TableEntryGroup from "app/components/DataTable/TableEntryGroup";

export interface DataTableState {
    renderEntryGroups;
}

@inject(STORE_ENTRIES)
@observer
export default class DataTable extends React.Component<any, DataTableState> {

    constructor(props: any) {
        super(props);
        this.state = {
            renderEntryGroups: Array.apply(null, Array(this.props[STORE_ENTRIES].getEntriesGroupedByMonth().length))
                .map(() => true)
        } as DataTableState;
    }

    render() {
        let groupCount = 0;

        return <div className={styles["dataTable"] + " " + styles["scrollbar"]} {...this.props}>
            {this.props[STORE_ENTRIES].getEntriesGroupedByMonth().map(group =>
                <React.Fragment key={groupCount}>
                    {
                        this.renderEntryGroup(group, groupCount++)
                    }
                </React.Fragment>)
            }
        </div>
    }

    renderEntryGroup = (group, groupIndex) => {

        if (!this.state.renderEntryGroups[groupIndex])
            return (this.renderGroupHeader(group, groupIndex));

        let i = 0;
        return <React.Fragment>
            {
                this.renderGroupHeader(group, groupIndex)
            }
            {
                group.map(entry =>
                <TableEntry {...entry} key={i++}/>)
            }</React.Fragment>;
    };

    renderGroupHeader = (group, groupIndex) => {
        return (<TableEntryGroup data={group}
                                 onClick={(() => {
                                     let state = this.state;
                                     state.renderEntryGroups[groupIndex] = !state.renderEntryGroups[groupIndex];
                                     this.setState(state);
                                 }).bind(this)}/>);
    }
}
