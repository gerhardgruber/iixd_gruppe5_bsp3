import * as React from 'react';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import {
  STORE_ROUTER,
} from 'app/constants';

import { Pie, PieChart, Cell } from 'recharts';

@inject(STORE_ROUTER)
export default class LoggedInHeader extends React.Component {
  render() {
    const monthNames = [
      "Jänner",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember"
    ];

    const data = [ {
      name: '',
      value: 1087.00
    }, {
      name: '',
      value: 3890.19
    } ]

    return <div className="row" style={{height: "40px", fontSize: '16px'}}>
      <div className="col-sm-3" style={{position: 'relative', top: '50%', transform: 'translate(0%, -50%)'}}>
        <Link to="/profile">
          <span className="fa fa-user" style={{paddingRight: '6px'}} />
          Richie Rich
        </Link>
      </div>
      <div className="col-sm-6" style={{fontSize: '10px', height: '100%'}}>
        <table style={{position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}>
          <tbody>
            <tr style={{height: '50%'}}>
              <td rowSpan={2}>
                <PieChart width={30} height={30}>
                  <Pie dataKey="value" data={data} isAnimationActive={false} cx={10} cy={10} outerRadius={10} fill="#8884d8">
                    <Cell fill={"red"} />
                    <Cell fill={"green"} />
                  </Pie>
                </PieChart>
              </td>
              <td>Aktueller Abrechnungszeitraum: {monthNames[new Date().getMonth()]}</td>
            </tr>
            <tr style={{height: '50%'}}>
              <td><b>Ausgegeben: 1.087,00 €&nbsp;&nbsp;&nbsp;Übrig: 3.890,19 €</b></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-3" style={{textAlign: 'right', position: 'relative', top: '50%', transform: 'translate(0%, -50%)'}}>
        <a onClick={() => this.props[STORE_ROUTER].logout()}>
          Abmelden
          <span className="fa fa-power-off" style={{paddingLeft: '6px'}} />
        </a>
      </div>
    </div>
  }
}
