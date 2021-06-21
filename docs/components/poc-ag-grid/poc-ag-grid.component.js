import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ActionItemEnum } from '../prime-ng/poc-prime-ng.component';
let PocAgGridComponent = class PocAgGridComponent {
    constructor(tableDataService) {
        this.tableDataService = tableDataService;
        this.tableData = [];
        this.columnDefs = [];
        this.gridOptions = {};
    }
    ngOnInit() {
        this.rebuildTableData();
        // see: https://www.ag-grid.com/javascript-grid/grid-properties/
        this.gridOptions = {
            defaultColDef: {
                editable: (event) => {
                    return true;
                },
                filter: true
            },
            singleClickEdit: true,
            stopEditingWhenGridLosesFocus: true,
            paginationPageSize: 50,
            editType: 'fullRow',
            onCellValueChanged: (event) => {
                console.log(event);
            },
            onRowValueChanged: (event) => {
                console.log(event);
            },
            onRowEditingStopped: (event) => {
                console.log(event);
            }
        };
    }
    rebuildTableData() {
        this.tableDataService.getCustomersLarge().then(data => {
            this.tableData = data.map((item) => {
                item.actions = [{
                        title: ActionItemEnum.EDIT,
                        disabled: false,
                        tooltip: '34656',
                        iconCallback: (item) => {
                            this.editTableRow(item);
                        }
                    },
                    {
                        title: ActionItemEnum.DELETE,
                        disabled: false,
                        tooltip: '34656',
                        iconCallback: (item) => {
                            this.deleteTableRow(item);
                        }
                    }];
                return item;
            });
        });
    }
    ngOnChanges(changes) {
        var _a, _b;
        if (changes.columnDefs) {
            /**
             * In ag-grid the columns in gridOptions are used once at grid initialisation.
             * If you change the columns after initialisation,
             * you must tell the grid.
             * This is done by calling gridOptions.api.setColumnDefs()
             *
             * Details of this api method are provided in the ag-grid documentation here.
             * */
            (_b = (_a = this.agGrid) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.setColumnDefs(this.columnDefs, 'gridOptionsChanged');
        }
    }
    editTableRow(item) {
        alert('edit selected row');
    }
    deleteTableRow(item) {
        alert('delete selected row');
    }
    getSelectedRows() {
        var _a;
        const selectedNodes = (_a = this.agGrid) === null || _a === void 0 ? void 0 : _a.api.getSelectedNodes();
        const selectedData = selectedNodes === null || selectedNodes === void 0 ? void 0 : selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData === null || selectedData === void 0 ? void 0 : selectedData.map(node => `${node.make} ${node.model}`).join(', ');
        console.log(`Selected rows: ${selectedDataStringPresentation}`);
    }
    onPaginationChanged($event) {
        // console.log($event);
    }
    onCellClicked($event) {
        console.log('open editor');
    }
    getRowData() {
        var _a;
        let rowData = [];
        (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.forEachNode(function (node) {
            rowData.push(node.data);
        });
        console.log('Row Data:');
        console.log(rowData);
    }
    clearData() {
        var _a;
        (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.setRowData([]);
    }
    restoreData() {
        var _a;
        (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.setRowData(this.tableData);
    }
    onAddRow() {
        var _a;
        const newItem = createNewRowData();
        const res = (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.updateRowData({ add: [newItem] });
        printResult(res);
    }
    addItems() {
        var _a;
        const newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
        const res = (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.updateRowData({ add: newItems });
        printResult(res);
    }
    addItemsAtIndex() {
        var _a;
        const newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
        const res = (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.updateRowData({
            add: newItems,
            addIndex: 2
        });
        printResult(res);
    }
    updateItems() {
        var _a, _b;
        const itemsToUpdate = [];
        (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.forEachNodeAfterFilterAndSort(function (rowNode, index) {
            if (index >= 5) {
                return;
            }
            const data = rowNode.data;
            data.typeId = Math.floor(Math.random() * 10 + 10);
            itemsToUpdate.push(data);
        });
        const res = (_b = this.gridApi) === null || _b === void 0 ? void 0 : _b.updateRowData({ update: itemsToUpdate });
        printResult(res);
    }
    onInsertRowAt2() {
        var _a;
        const newItem = createNewRowData();
        const res = (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.updateRowData({
            add: [newItem],
            addIndex: 2
        });
        printResult(res);
    }
    onRemoveSelected() {
        var _a, _b;
        const selectedData = (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.getSelectedRows();
        const res = (_b = this.gridApi) === null || _b === void 0 ? void 0 : _b.updateRowData({ remove: selectedData });
        printResult(res);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    }
    onBtStopEditing() {
        this.gridApi.stopEditing(true);
    }
    onBtNextCell() {
        var _a;
        (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.tabToNextCell();
    }
    onBtPreviousCell() {
        var _a;
        (_a = this.gridApi) === null || _a === void 0 ? void 0 : _a.tabToPreviousCell();
    }
};
__decorate([
    ViewChild('agGrid')
], PocAgGridComponent.prototype, "agGrid", void 0);
__decorate([
    Input()
], PocAgGridComponent.prototype, "tableData", void 0);
__decorate([
    Input()
], PocAgGridComponent.prototype, "columnDefs", void 0);
PocAgGridComponent = __decorate([
    Component({
        selector: 'poc-ag-grid',
        templateUrl: './poc-ag-grid.component.html',
        styleUrls: ['./poc-ag-grid.component.scss']
    })
], PocAgGridComponent);
export { PocAgGridComponent };
let newCount = 1;
function createNewRowData() {
    const newData = {
        id: 560,
        name: "Proj 2",
        typeId: 3,
        status: "DRAFT",
        customFields: {},
        createDate: "2019-09-15T08:35:53Z",
        lastUpdated: "2019-12-04T14:34:56Z",
        systemType: null,
        geometry: {
            id: 23,
            latitude: 32.2021617444,
            longitude: 34.8844242096,
            latitude84: 32.2021617444,
            longitude84: 34.8844242096,
            projectId: 2
        },
        activeForMe: true,
        deleted: false,
        uuid: null,
        actions: [{
                title: ActionItemEnum.EDIT,
                disabled: false,
                tooltip: '34656',
                iconCallback: () => { }
            },
            {
                title: ActionItemEnum.DELETE,
                disabled: false,
                tooltip: '34656',
                iconCallback: () => { }
            }]
    };
    newCount++;
    return newData;
}
function printResult(res) {
    console.log('---------------------------------------');
    if (res.add) {
        res.add.forEach(function (rowNode) {
            console.log('Added Row Node', rowNode);
        });
    }
    if (res.remove) {
        res.remove.forEach(function (rowNode) {
            console.log('Removed Row Node', rowNode);
        });
    }
    if (res.update) {
        res.update.forEach(function (rowNode) {
            console.log('Updated Row Node', rowNode);
        });
    }
}
//# sourceMappingURL=poc-ag-grid.component.js.map