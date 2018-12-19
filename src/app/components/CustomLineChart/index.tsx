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
            <LineChart width={600} height={300} data={this.props[STORE_ENTRIES].getEntriesGroupedByDate()}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
        );
    }
}