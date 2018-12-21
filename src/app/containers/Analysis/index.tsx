import * as React from 'react'
import DataTable from "app/components/DataTable/DataTable";
import CustomLineChart from "app/components/CustomLineChart";
import * as styles from '../Dashboard/Dashboard.css'
import InputAnalysis from "app/components/InputAnalysis";

export default class Analysis extends React.Component {
  render() {
    return (
      <div className={"container h-100"}>
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
                  <button className={styles["customButton"]}>
                      <span className={"fa fa-pie-chart " + styles["icon"]}/>
                  </button>
              </div>
          </div>
      </div>
    )
  }
}
