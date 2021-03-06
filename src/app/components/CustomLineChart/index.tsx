import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
    STORE_ENTRIES,
    STORE_ROUTER,
} from 'app/constants';

@inject(STORE_ROUTER, STORE_ENTRIES)
@observer
export default class CustomPieChart extends React.Component<any> {

    render() {
        return (
            <LineChart width={540} height={300} data={this.props[STORE_ENTRIES].getEntriesGroupedByDate()}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" strokeWidth={4} dataKey="price" stroke="#6495ED" activeDot={{r: 8}}/>
            </LineChart>
        );
    }
}