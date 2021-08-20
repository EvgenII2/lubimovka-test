import data from '../data/data.json';

class Search {
    constructor(data) {
        this.data = data;
    }

    getSearchResult(searchFunction) {
        const arr = Array.from(this.data.result);
        // console.log(arr);
        return searchFunction(arr);
    }
}

const search = new Search(data);

export default search;