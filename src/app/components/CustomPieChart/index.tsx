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
}


@inject(STORE_ROUTER, STORE_ENTRIES)
@observer
export default class CustomPieChart extends React.Component<any, pieState> {

    constructor(props){
        super(props);
        this.state = {clickedSegment: -1};
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
                <PieChart width={730} height={250}>
                    <Pie data={pieData} dataKey="price" nameKey="category" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label>
                        {pieData.map((entry, index) => (
                            <Cell key = {index} fill={index === this.state.clickedSegment ? "#F0FFFF" : "#e6ffff"}
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
            pieData.push({category:entry.category, price:entry.price})
        } else {
            pieData[index] = {category:pieData[index].category, price:pieData[index].price + entry.price}
        }
    });

    return pieData;
}