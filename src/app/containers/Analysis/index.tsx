import * as React from 'react'
import DataTable from "app/components/DataTable/DataTable";
import CustomLineChart from "app/components/CustomLineChart";
import * as styles from '../Dashboard/Dashboard.css'
import InputAnalysis from "app/components/InputAnalysis";
import { Link } from 'react-router-dom';
import LoggedInHeader from 'app/components/LoggedInHeader';

export default class Analysis extends React.Component {
  render() {
    return (
      <div className={"container h-100"}>
        <LoggedInHeader />
          <div className="row">
              <div className="col-sm-6">
                  <InputAnalysis/>
                  <div className="col-sm-12">
                    <CustomLineChart/>
                  </div>
              </div>
              <div className="col-sm-6">
                  <DataTable/>
              </div>
          </div>
          <div className="row">
              <div className={"col-sm-12"}>
                  <button className={styles["customButton"]}>
                      <span className={"fa fa-file-excel-o " + styles["icon"]}/>
                  </button>
                  <Link to="/">
                    <button className={styles["customButton"]}>
                        <span className={"fa fa-pie-chart " + styles["icon"]}/>
                    </button>
                  </Link>
              </div>
          </div>
      </div>
    )
  }
}
