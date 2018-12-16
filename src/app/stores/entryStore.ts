import {DASHBOARD_TABLE_DATA} from "app/constants/mockData";
import {action, observable} from "mobx";


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
    }

}
