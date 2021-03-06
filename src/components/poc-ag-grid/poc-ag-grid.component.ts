import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {GridOptions, PaginationChangedEvent} from 'ag-grid-community';
import {TableDataService} from '../../services/table-data-service';
import {ActionItemEnum} from '../prime-ng/poc-prime-ng.component';

@Component({
  selector: 'poc-ag-grid',
  templateUrl: './poc-ag-grid.component.html',
  styleUrls: ['./poc-ag-grid.component.scss']
})


export class PocAgGridComponent implements OnInit, OnChanges {
  private gridApi: any;
  private gridColumnApi: any;
  public rowSelection: any;

  @ViewChild('agGrid') public agGrid: AgGridAngular|undefined;
  @Input() public tableData: any[] = [];
  @Input() public columnDefs: any[] = [];
  public gridOptions: GridOptions = {};



  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit() {
    this.rebuildTableData();

    // see: https://www.ag-grid.com/javascript-grid/grid-properties/

    this.gridOptions = {
      defaultColDef: {
        editable: (event: any) => {
          return true
        },
        filter: true
      },
      singleClickEdit: true,
      stopEditingWhenGridLosesFocus: true,
      paginationPageSize: 50,
      editType: 'fullRow', // fullRow
      onCellValueChanged: (event: any) => {
        console.log(event);
      },
      onRowValueChanged: (event: any) => {
        console.log(event);
      },
      onRowEditingStopped: (event: any) => {
        console.log(event);
      }
    };

  }



  private rebuildTableData(){
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

  ngOnChanges(changes: SimpleChanges): void {


    if (changes.columnDefs) {
      /**
       * In ag-grid the columns in gridOptions are used once at grid initialisation.
       * If you change the columns after initialisation,
       * you must tell the grid.
       * This is done by calling gridOptions.api.setColumnDefs()
       *
       * Details of this api method are provided in the ag-grid documentation here.
       * */
      this.agGrid?.api?.setColumnDefs(this.columnDefs, 'gridOptionsChanged');
    }
  }

  private editTableRow(item: any) {
    alert('edit selected row');
  }

  private deleteTableRow(item: any) {
    alert('delete selected row');
  }

  public getSelectedRows(): void {
    const selectedNodes = this.agGrid?.api.getSelectedNodes();
    const selectedData = selectedNodes?.map(node => node.data);
    const selectedDataStringPresentation = selectedData?.map(node => `${node.make} ${node.model}`).join(', ');
    console.log(`Selected rows: ${selectedDataStringPresentation}`);
  }

  public onPaginationChanged($event: PaginationChangedEvent) {
    // console.log($event);
  }

  public onCellClicked($event: any) {
    console.log('open editor');
  }

  public getRowData() {
    let rowData: any[] = [];
    this.gridApi?.forEachNode(function (node: {data: any;}) {
      rowData.push(node.data);
    });
    console.log('Row Data:');
    console.log(rowData);
  }

  public clearData() {
    this.gridApi?.setRowData([]);
  }

  public restoreData(){
    this.gridApi?.setRowData(this.tableData);
  }

  public onAddRow() {
    const newItem = createNewRowData();
    const res = this.gridApi?.updateRowData({add: [newItem]});
    printResult(res);
  }

  public addItems() {
    const newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
    const res = this.gridApi?.updateRowData({add: newItems});
    printResult(res);
  }

  public addItemsAtIndex() {
    const newItems = [createNewRowData(), createNewRowData(), createNewRowData()];
    const res = this.gridApi?.updateRowData({
      add: newItems,
      addIndex: 2
    });
    printResult(res);
  }

  public updateItems() {
    const itemsToUpdate: any[] = [];
    this.gridApi?.forEachNodeAfterFilterAndSort(function (rowNode: {data: any;}, index: number) {
      if (index >= 5) {
        return;
      }
      const data = rowNode.data;
      data.typeId = Math.floor(Math.random() * 10 + 10);
      itemsToUpdate.push(data);
    });
    const res = this.gridApi?.updateRowData({update: itemsToUpdate});
    printResult(res);
  }

  public onInsertRowAt2() {
    const newItem = createNewRowData();
    const res = this.gridApi?.updateRowData({
      add: [newItem],
      addIndex: 2
    });
    printResult(res);
  }

  public onRemoveSelected() {
    const selectedData = this.gridApi?.getSelectedRows();
    const res = this.gridApi?.updateRowData({remove: selectedData});
    printResult(res);
  }

  public onGridReady(params: {api: any; columnApi: any;}) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  public onBtStopEditing() {
    this.gridApi.stopEditing(true);
  }

  public onBtNextCell() {
   this.gridApi?.tabToNextCell();
  }

  public onBtPreviousCell() {
    this.gridApi?.tabToPreviousCell();
  }

  // public onBtStartEditing(key: any, char: any, pinned: any) {
  //   this.gridOptions.api.setFocusedCell(0, 'lastName', pinned);
  //   this.gridOptions.api.startEditingCell({
  //     rowIndex: 0,
  //     colKey: 'lastName',
  //     // set to 'top', 'bottom' or undefined
  //     rowPinned: pinned,
  //     keyPress: key,
  //     charPress: char,
  //   });
  // }
}

let newCount = 1;

function createNewRowData() {
  const newData =  {
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
      iconCallback: () => {}
    },
      {
        title: ActionItemEnum.DELETE,
        disabled: false,
        tooltip: '34656',
        iconCallback: () => {}
      }]
  };
  newCount++;
  return newData;
}

function printResult(res: {add: any[]; remove: any[]; update: any[];}) {
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
