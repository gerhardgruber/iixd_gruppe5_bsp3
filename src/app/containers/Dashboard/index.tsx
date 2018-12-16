import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Button } from 'reactstrap';
import {inject, observer} from 'mobx-react';
import {RouteComponentProps} from 'react-router';
import {Button} from 'reactstrap';
import {PieChart, Pie} from 'recharts';
import {
    STORE_ROUTER,
} from 'app/constants';
import DataTable from "app/components/DataTable/DataTable";
import CustomPieChart from "app/components/CustomPieChart";
import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";

export interface DashboardProps extends RouteComponentProps<any> {
    /** MobX Stores will be injected via @inject() **/
    // [STORE_ROUTER]: RouterStore;
    // [STOURE_TODO]: TodoStore;
}

export interface DashboardState {
}

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
                    <CustomPieChart className="col-sm-6"/>
                    <DataTable className="col-sm-6"/>
                </div>
                <Button onClick={() => this.props[STORE_ROUTER].logout()}>logout</Button>
            </div>
        );
    }
}
