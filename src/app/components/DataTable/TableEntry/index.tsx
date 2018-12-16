import * as React from 'react';
import * as styles from './tableEntry.css'
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

// @inject(STORE_ROUTER)

export default class TableEntry extends React.Component<any> {
    render() {
        return <div className={styles["table-entry"] + " row"}>
            <span className={this.props.icon + " col-sm-2"}/>
            <div className="col-sm-1">
                {this.props.repeat ? <span className="glyphicon glyphicon-repeat"/> : null}
            </div>
            <div className="col-sm-6">
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
            <div className="col-sm-3">
                <div>{this.props.date}</div>
                <div>{this.props.price}</div>
            </div>
        </div>
    }
}
