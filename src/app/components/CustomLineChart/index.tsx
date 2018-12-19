import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
    STORE_ENTRIES,
    STORE_ROUTER,
} from 'app/constants';
import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";

const lineData = parsePieData(DASHBOARD_TABLE_DATA);

@inject(STORE_ROUTER, STORE_ENTRIES)
@observer
export default class CustomPieChart extends React.Component<any> {

    render() {
        return (
            <LineChart width={600} height={300} data={lineData}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="date"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
                {/*<Line type="monotone" dataKey="uv" stroke="#82ca9d" />*/}
            </LineChart>
        );
    }
}

function parsePieData(data) {
    // var lineData = [];
    // var dates = [];
    // var index;
    //
    // data.forEach(entry => {
    //     index = dates.findIndex(date => date == entry.date);
    //     if (index == -1){
    //         index = dates.push(entry.category) - 1;
    //         lineData.push({category:entry.category, price:entry.price})
    //     } else {
    //         lineData[index] = {category:lineData[index].category, price:lineData[index].price + entry.price}
    //     }
    // });

    return data;
}