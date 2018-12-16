import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { PieChart, Pie } from 'recharts';
import {
    STORE_ROUTER,
} from 'app/constants';
import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";

@inject(STORE_ROUTER)
@observer
export default class CustomPieChart extends React.Component<any> {
    render() {
        return (
            <div {...this.props}>
                <PieChart width={730} height={250} onClick={index => {this.setState({
                    activeIndex:index
                })}}>
                    <Pie data={parsePieData(DASHBOARD_TABLE_DATA)} dataKey="price" nameKey="category" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label/>
                </PieChart>
            </div>
        );
    }
}

function parsePieData(data) {
    var pieData = [];
    var categories = [];
    var index;

    data.forEach(entry => {
        index = categories.findIndex(category => category == entry.category);
        if (index == -1){
            index = categories.push(entry.category) - 1;
            pieData.push({category:entry.category, price:entry.price})
        } else {
            pieData[index] = {category:pieData[index].category, price:pieData[index].price + entry.price}
        }
    });

    return pieData;
}