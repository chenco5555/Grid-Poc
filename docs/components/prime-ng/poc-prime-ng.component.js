import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '../colors.enum';
export var ProjectStatusEnum;
(function (ProjectStatusEnum) {
    ProjectStatusEnum[ProjectStatusEnum["IN_PROGRESS"] = 'IN_PROGRESS'] = "IN_PROGRESS";
    ProjectStatusEnum[ProjectStatusEnum["SUBMITTED"] = 'SUBMITTED'] = "SUBMITTED";
    ProjectStatusEnum[ProjectStatusEnum["IN_REVIEW"] = 'IN_REVIEW'] = "IN_REVIEW";
    ProjectStatusEnum[ProjectStatusEnum["APPROVED"] = 'APPROVED'] = "APPROVED";
    ProjectStatusEnum[ProjectStatusEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
    ProjectStatusEnum[ProjectStatusEnum["NEW"] = 'NEW'] = "NEW";
    ProjectStatusEnum[ProjectStatusEnum["DRAFT"] = 'DRAFT'] = "DRAFT";
})(ProjectStatusEnum || (ProjectStatusEnum = {}));
export var ActionItemEnum;
(function (ActionItemEnum) {
    ActionItemEnum["DELETE"] = "Delete";
    ActionItemEnum["EDIT"] = "Edit";
})(ActionItemEnum || (ActionItemEnum = {}));
let PocPrimeNgComponent = class PocPrimeNgComponent {
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.hasTableCheckbox = false;
        this.hasActionItems = false;
        this.tableStructure = [];
        this.tableData = [];
        this.selectedRow = new EventEmitter();
        this.onDeleteRow = new EventEmitter();
        this.first = 0;
        this.rows = 10;
    }
    ngOnInit() {
        this.tableDataService.getCustomersLarge().then(res => {
            this.tableData = res;
        });
    }
    customSort(event) {
        var _a;
        (_a = this.tableData) === null || _a === void 0 ? void 0 : _a.sort((data1, data2) => {
            let value1 = data1[event.field];
            let value2 = data2[event.field];
            let result = null;
            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            this.tableData = [...this.tableData];
            return (event.order * result);
        });
    }
    deleteRow(tableRow) {
        alert('Delete project');
        this.onDeleteRow.emit(tableRow);
    }
    convertProjectStatusToColor(projectStatus) {
        switch (projectStatus) {
            case ProjectStatusEnum.IN_REVIEW:
                return Color.mainPurple;
            case ProjectStatusEnum.SUBMITTED:
                return Color.pagerOrange;
            case ProjectStatusEnum.IN_PROGRESS:
                return Color.mainYellow;
            case ProjectStatusEnum.APPROVED:
                return Color.mainGreen;
            case ProjectStatusEnum.REJECTED:
                return Color.mainRed;
            case ProjectStatusEnum.NEW:
                return Color.mainNew;
            case ProjectStatusEnum.DRAFT:
                return Color.brand;
            default:
                return null;
        }
    }
    onRowSelect(event) {
        alert('open project editor');
        this.selectedRow.emit(event);
    }
};
__decorate([
    Input()
], PocPrimeNgComponent.prototype, "hasTableCheckbox", void 0);
__decorate([
    Input()
], PocPrimeNgComponent.prototype, "hasActionItems", void 0);
__decorate([
    Input()
], PocPrimeNgComponent.prototype, "tableStructure", void 0);
__decorate([
    Input()
], PocPrimeNgComponent.prototype, "tableData", void 0);
__decorate([
    Output()
], PocPrimeNgComponent.prototype, "selectedRow", void 0);
__decorate([
    Output()
], PocPrimeNgComponent.prototype, "onDeleteRow", void 0);
PocPrimeNgComponent = __decorate([
    Component({
        selector: 'app-prime-ng',
        templateUrl: './poc-prime-ng.component.html',
        styleUrls: ['./poc-prime-ng.component.scss']
    })
], PocPrimeNgComponent);
export { PocPrimeNgComponent };
//# sourceMappingURL=poc-prime-ng.component.js.map