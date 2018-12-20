import {DASHBOARD_TABLE_DATA, DATE_FORMAT} from "app/constants/mockData";
import {action, observable} from "mobx";
let _ = require('lodash');
let moment = require('moment');

export class EntryStore {

    @observable
    filterCategory: string;

    filterCallback = (entry) => {
        return !this.filterCategory || entry.category == this.filterCategory;
    };

    @action
    setFilterCategory = (category: string) => this.filterCategory = this.filterCategory == category ? null : category;


    getEntriesFiltered = () => {
        return DASHBOARD_TABLE_DATA.filter(this.filterCallback);
    };


    getEntriesGroupedByDate = () => {
        return _.chain(this.getEntriesFiltered())
            .groupBy('date')
            .map(entry => entry.reduce((accumulator, current) => {return {date: current.date, price: current.price + accumulator.price}}, {price:0}))
            .sortBy((a => moment(a.date, DATE_FORMAT)))
            .value();
    };

    getEntriesGroupedByMonth = () => {
        return _.chain(this.getEntriesFiltered())
            .groupBy(a => moment(a.date, DATE_FORMAT).format("yyyymm"))
            .sortBy((a => moment(a.date, DATE_FORMAT)))
            .value();
    }
}

