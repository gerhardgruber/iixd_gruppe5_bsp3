import * as React from 'react';
import {STORE_ENTRIES} from "app/constants";
import {inject, observer} from "mobx-react";
import * as styles from './InputAnalysis.css'

@inject(STORE_ENTRIES)
@observer
export default class InputAnalysis extends React.Component<any> {

    render() {
        return (
            <div className={"col-sm-12 " + styles["topContainer"]}>
                <div className={"col-sm-12"}>
                    <i className={"col-sm-1 glyphicon glyphicon-search " + styles["icon"]} />
                    <input id={"textFilter"} className={"col-sm-10 " + styles["fieldBase"]} type={"text"} value={"Titel oder Beschreibung.. "} />
                </div>
                <div className={"col-sm-6"}>
                    <i className={"col-sm-1 fa fa-dollar " + styles["icon"]} />
                    <input className={"col-sm-9 " + styles["fieldBase"]} type={"text"} value={"Max Betrag"} />
                    <i className={"col-sm-1 fa fa-dollar " + styles["icon"]} />
                    <input className={"col-sm-9 " + styles["fieldBase"]} type={"text"} value={"Min Betrag"} />
                    <i className={"col-sm-1 glyphicon glyphicon-sort " + styles["icon"]} />
                    <select className={"col-sm-9 " + styles["fieldBase"]} >
                        <option value={"Datum absteigend"}>Datum absteigend</option>
                        <option value={"Datum aufsteigend"}>Datum aufsteigend</option>
                    </select>
                </div >
                <div className="col-sm-6">
                    <i className={"col-sm-1 glyphicon glyphicon-user " + styles["icon"]} />
                    <select className={"col-sm-9 " + styles["fieldBase"]} onChange={ (selection => {
                        if (selection.target.value == "Alle Benutzer") {
                            this.props[STORE_ENTRIES].setFilterUser(null)
                        } else {
                            this.props[STORE_ENTRIES].setFilterUser(selection.target.value)
                        }
                    })}>
                        <option value={"Alle Benutzer"}>Alle Benutzer</option>
                        <option value={"Matthias"}>Matthias</option>
                        <option value={"Markus"}>Markus</option>
                        <option value={"Gerhard"}>Gerhard</option>
                        <option value={"Michael"}>Michael</option>
                    </select>
                    <i className={"col-sm-1 glyphicon glyphicon-asterisk " + styles["icon"]} />
                    <select className={"col-sm-9 " + styles["fieldBase"]} onChange={ (selection => {
                        if (selection.target.value == "Alle Kategorien") {
                            this.props[STORE_ENTRIES].setFilterCategory(null)
                        } else {
                            this.props[STORE_ENTRIES].setFilterCategory(selection.target.value)
                        }
                    })}>
                        <option value={"Alle Kategorien"}>AlleKategorien</option>
                        <option value={"transport"}>Transport</option>
                        <option value={"freizeit"}>Freizeit</option>
                        <option value={"haushalt"}>Haushalt</option>
                        <option value={"essen"}>Essen</option>
                    </select>
                    <i className={"col-sm-1 far fa-clock " + styles["icon"]} />
                    <select className={"col-sm-9 " + styles["fieldBase"]} >
                        <option value={"Gesamter Zeitraum"}>Gesamter Zeitraum</option>
                        <option value={"Aktueller Monat"}>Aktueller Monat</option>
                        <option value={"Zeitraum"}>Zeitraum</option>
                    </select>
                </div>
            </div>
        )
    }


}
