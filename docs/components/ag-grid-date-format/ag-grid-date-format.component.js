import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AgGridDateFormatComponent = class AgGridDateFormatComponent {
    afterGuiAttached(params) {
    }
    agInit(params) {
        this.displayValue = params.value;
    }
    refresh(params) {
        return false;
    }
};
AgGridDateFormatComponent = __decorate([
    Component({
        selector: 'ag-grid-date-format',
        templateUrl: './ag-grid-date-format.component.html',
        styleUrls: ['./ag-grid-date-format.component.scss']
    })
], AgGridDateFormatComponent);
export { AgGridDateFormatComponent };
//# sourceMappingURL=ag-grid-date-format.component.js.map