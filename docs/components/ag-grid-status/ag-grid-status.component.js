var AgGridStatusComponent_1;
import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Color } from '../colors.enum';
let AgGridStatusComponent = AgGridStatusComponent_1 = class AgGridStatusComponent {
    constructor() {
        this.displayValue = '';
        this.displayColor = null;
    }
    agInit(params) {
        this.displayValue = AgGridStatusComponent_1.translatProjectStatus(params.value);
        this.displayColor = AgGridStatusComponent_1.convertProjectStatusToColor(params.value);
    }
    afterGuiAttached(params) {
        console.log(params);
    }
    refresh(params) {
        return false;
    }
    static convertProjectStatusToColor(projectStatus) {
        switch (projectStatus) {
            case 'IN_REVIEW':
                return Color.mainPurple;
            case 'SUBMITTED':
                return Color.pagerOrange;
            case 'IN_PROGRESS':
                return Color.mainYellow;
            case 'APPROVED':
                return Color.mainGreen;
            case 'REJECTED':
                return Color.mainRed;
            case 'NEW':
                return Color.mainNew;
            case 'DRAFT':
                return Color.brand;
            default:
                return null;
        }
    }
    static translatProjectStatus(projectStatus) {
        switch (projectStatus) {
            case 'IN_REVIEW':
                return 'In review';
            case 'SUBMITTED':
                return 'Submitted';
            case 'IN_PROGRESS':
                return 'In Progress';
            case 'APPROVED':
                return 'Approved';
            case 'REJECTED':
                return 'Rejected';
            case 'NEW':
                return 'New';
            case 'DRAFT':
                return 'Draft';
            default:
                return '';
        }
    }
};
AgGridStatusComponent = AgGridStatusComponent_1 = __decorate([
    Component({
        selector: 'ag-grid-status',
        templateUrl: './ag-grid-status.component.html',
        styleUrls: ['./ag-grid-status.component.scss']
    })
], AgGridStatusComponent);
export { AgGridStatusComponent };
//# sourceMappingURL=ag-grid-status.component.js.map