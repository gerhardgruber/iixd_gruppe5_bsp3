import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";
import {action, observable} from "mobx";
let _ = require('lodash');
//let dateformat = require('dateformat');

export class EntryStore {

    @observable
    filterCategory: string;

    filterCallback = (entry) => {
        return !this.filterCategory || entry.category == this.filterCategory;
    };

    @action
    setFilterCategory = (category: string) => this.filterCategory = this.filterCategory == category ? null : category;


    getEntries = () => {
        return DASHBOARD_TABLE_DATA.filter(this.filterCallback);
    };

    getEntriesGroupedByDate = () => {
        return _.chain(this.getEntries())
            .groupBy('date')
            .map(entry => entry.reduce((accumulator, current) => {return {date: current.date, price: current.price + accumulator.price}}, {price:0}))
            //.sort((a, b) => dateformat(a.date, DATE_FORMAT) < dateformat(b.date, DATE_FORMAT))
            .value();
    };
}

