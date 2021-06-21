import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TableDataService = class TableDataService {
    constructor(http) {
        this.http = http;
    }
    getCustomersLarge() {
        return this.http.get('assets/project-data-large.json')
            .toPromise()
            .then(res => res.data)
            .then(data => { return data; });
    }
};
TableDataService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], TableDataService);
export { TableDataService };
//# sourceMappingURL=table-data-service.js.map