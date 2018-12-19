import * as React from 'react';
import { inject, observer } from 'mobx-react';
import {RouteComponentProps} from 'react-router';
import {
    STORE_ROUTER,
} from 'app/constants';
import DataTable from "app/components/DataTable/DataTable";
import CustomPieChart from "app/components/CustomPieChart";
import CustomLineChart from "app/components/CustomLineChart";

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
            <div className="container">
                <div className="row">
                    <div className="col-sm-auto">
                        <CustomLineChart className="col-"/>
                        <CustomPieChart className="col-"/>
                    </div>
                    <div className="col-sm-auto">
                        <DataTable className="col-"/>
                    </div>
                </div>
            </div>
        );

    }
}
