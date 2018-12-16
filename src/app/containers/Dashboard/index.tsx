import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';
import { Button } from 'reactstrap';
import { PieChart, Pie } from 'recharts';
import {
  STORE_ROUTER,
} from 'app/constants';
import DataTable from "app/components/DataTable/DataTable";
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
        <PieChart width={730} height={250}>
            <Pie data={parsePieData(DASHBOARD_TABLE_DATA)} dataKey="price" nameKey="category" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
        </PieChart>
        <DataTable/>
        <Button onClick={() => this.props[STORE_ROUTER].logout() }>logout</Button>
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