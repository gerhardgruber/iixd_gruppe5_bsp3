import * as React from 'react';
import {inject, observer} from 'mobx-react';
import {RouteComponentProps} from 'react-router';
import {Button} from 'reactstrap';
import {PieChart, Pie} from 'recharts';
import {
    STORE_ROUTER,
} from 'app/constants';
import DataTable from "app/components/DataTable/DataTable";

export interface DashboardProps extends RouteComponentProps<any> {
    /** MobX Stores will be injected via @inject() **/
    // [STORE_ROUTER]: RouterStore;
    // [STOURE_TODO]: TodoStore;
}

export interface DashboardState {
}

const data = [{name: 'A1', value: 100},
    {name: 'A2', value: 300},
    {name: 'B1', value: 100},
    {name: 'B2', value: 80},
    {name: 'B3', value: 40},
    {name: 'B4', value: 30},
    {name: 'B5', value: 50},
    {name: 'C1', value: 100},
    {name: 'C2', value: 200},
    {name: 'D1', value: 150},
    {name: 'D2', value: 50}];

@inject(STORE_ROUTER)
@observer
export class Dashboard extends React.Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps, context: any) {
        super(props, context);
    }


    render() {
        return (
            <div>
                <div className="row">
                    <PieChart width={730} height={250} className="col-sm-6">
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}
                             fill="#8884d8"/>
                        {/*<Pie data={2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />*/}
                    </PieChart>
                    <DataTable className="col-sm-6"/>
                </div>
                <Button onClick={() => this.props[STORE_ROUTER].logout()}>logout</Button>
            </div>
        );
    }
}
