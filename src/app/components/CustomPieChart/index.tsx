import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { PieChart, Pie, Cell } from 'recharts';
import {
    STORE_ENTRIES,
    STORE_ROUTER,
} from 'app/constants';
import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";

const pieData = parsePieData(DASHBOARD_TABLE_DATA);

export interface pieState {
    clickedSegment: -1
    pieIcon: '';
}

@inject(STORE_ROUTER, STORE_ENTRIES)
@observer
export default class CustomPieChart extends React.Component<any, pieState> {

    constructor(props){
        super(props);
        this.state = {clickedSegment: -1, pieIcon: ''};
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(index){
        if (this.state.clickedSegment === index) {
            this.setState({clickedSegment: -1})
        } else {
            this.setState({clickedSegment: index})
        }
    }

    render() {
        return (
            <div {...this.props}>
                <span className={''}></span>
                <PieChart width={540} height={400}>
                    <Pie data={pieData} dataKey="price" nameKey="category" cx="57%" cy="50%" innerRadius={100} outerRadius={150} fill="#8884d8" label>
                        {pieData.map((entry, index) => (
                            <Cell key = {index} fill={index === this.state.clickedSegment ? "#4881ea" : "#6495ED"}
                                onClick={() => {
                                    this.props[STORE_ENTRIES].setFilterCategory(entry.category);
                                    this.changeColor(index);
                                }}/>
                        ))}
                    </Pie>
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
            pieData.push({category:entry.category, icon:entry.icon, price:entry.price})
        } else {
            pieData[index] = {category:pieData[index].category, icon:entry.icon, price:pieData[index].price + entry.price}
        }
    });

    return pieData;
}