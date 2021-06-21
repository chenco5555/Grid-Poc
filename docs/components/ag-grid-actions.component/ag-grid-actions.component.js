import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AgGridActionsComponent = class AgGridActionsComponent {
    afterGuiAttached(params) {
    }
    agInit(params) {
        this.selectedRow = params === null || params === void 0 ? void 0 : params.data;
    }
    refresh(params) {
        return false;
    }
    onActionClicked($event, action) {
        if (action.disabled) {
            return;
        }
        action.iconCallback(this.selectedRow);
    }
};
AgGridActionsComponent = __decorate([
    Component({
        selector: 'ag-grid-actions',
        templateUrl: './ag-grid-actions.component.html',
        styleUrls: ['./ag-grid-actions.component.scss']
    })
], AgGridActionsComponent);
export { AgGridActionsComponent };
//# sourceMappingURL=ag-grid-actions.component.js.map