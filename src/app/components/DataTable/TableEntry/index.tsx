import * as React from 'react';
import * as styles from './tableEntry.css'
import { STORE_ENTRIES } from 'app/constants';
import { inject } from 'mobx-react';
// import { inject } from 'mbox-react'
// import { STORE_ROUTER } from 'app/constants'

@inject(STORE_ENTRIES)
export default class TableEntry extends React.Component<any> {
    render() {
        return <div className={styles["table-entry"] + " row"}>
            <div className="col-sm-2">
                <div>
                    <span className={styles["icon"] + " " + this.props.icon}  style={{color: this.props.entries.colors[this.props.category][0]}} />
                </div>
                <div>
                    {this.props.repeat ? <span className={styles["icon"] + " glyphicon glyphicon-repeat"}/> : null}
                </div>
                {/*<div className="col-sm-1">*/}
            {/*</div>*/}
            </div>
            <div className="col-sm-6">
                <div>{this.props.title}</div>
                <div>{this.props.description}</div>
            </div>
            <div className="col-sm-3">
                <div>{this.props.date}</div>
                <div>{this.props.price + " €"}</div>
            </div>
        </div>
    }
}
