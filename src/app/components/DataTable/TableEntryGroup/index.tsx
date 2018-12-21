import * as React from 'react';
import * as styles from './tableEntryGroup.css';
import {DATE_FORMAT} from "app/constants/mockData";
let moment = require('moment');
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class TableEntryGroup extends React.Component<any> {
    render() {
        return <div className={styles["table-entry-group"] + " row"} onClick={this.props.onClick}>
            <div className="col-sm-2">
                <span className={this.props.expanded? "glyphicon glyphicon-chevron-down" : "glyphicon glyphicon-chevron-right"}/>
            </div>
            <div className="col-sm-6">
                <div>{moment(this.props.data[0].date, DATE_FORMAT).format("MMMM YYYY")}</div>
                <div>{this.props.description}</div>
            </div>
            <div className="col-sm-3">
                <div>{this.props.date}</div>
                <div>{this.props.data.reduce((a, b) => a + b.price, 0) + " EUR"}</div>
            </div>
        </div>
    }
}
