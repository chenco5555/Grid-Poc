import {Component, OnInit} from '@angular/core';
import {IEntityData, IEntityDataWithActions, ITableStructure} from '../components/prime-ng/poc-prime-ng.component';
import {AgGridStatusComponent} from '../components/ag-grid-status/ag-grid-status.component';
import {AgGridActionsComponent} from '../components/ag-grid-actions.component/ag-grid-actions.component';
import {AgGridDateFormatComponent} from '../components/ag-grid-date-format/ag-grid-date-format.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public tableStructure: ITableStructure[] = [];
  public tableStructureForView: ITableStructure[] = [];

  selectedColumnPriem: string[] = ['status', 'name', 'typeId', 'createDate', 'lastUpdated'];
  selectedColumn: string[] = ['status', 'name', 'typeId', 'createDate', 'lastUpdated'];
  columnOptions: any[] = [];
  columnDefsForView: any[] = [];
  hasTableCheckbox = true;
  public tableData: any;
  public projectData: IEntityDataWithActions[] = [];
  public showTable = false;
  public selectedRow: any;


  public ngOnInit() {


    this.tableStructure = [
      {
        tableColumnKey: {columnKey: 'status', hasStatusColor: true},
        tableHeader: {
          title: 'Status', action: [], columnWidth: 10, hasSort: true, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'name'},
        tableHeader: {
          title: 'name', action: [], hasSort: true, columnWidth: 30, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'typeId'},
        tableHeader: {
          title: 'typeId', action: [], hasSort: true, columnWidth: 10, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'createDate'},
        tableHeader: {
          title: 'createDate', action: [], columnWidth: 10, hasSort: true, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'lastUpdated'},
        tableHeader: {
          title: 'lastUpdated', action: [], columnWidth: 10, hasSort: true, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
    ];

    this.tableStructureForView = [
      {
        tableColumnKey: {columnKey: 'status', hasStatusColor: true},
        tableHeader: {
          title: 'Status', action: [], columnWidth: 10, hasSort: true, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'name'},
        tableHeader: {
          title: 'name', action: [], hasSort: true, columnWidth: 30, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'typeId'},
        tableHeader: {
          title: 'typeId', action: [], hasSort: true, columnWidth: 10, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'createDate'},
        tableHeader: {
          title: 'createDate', action: [], columnWidth: 10, hasSort: true, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
      {
        tableColumnKey: {columnKey: 'lastUpdated'},
        tableHeader: {
          title: 'lastUpdated', action: [], columnWidth: 10, hasSort: true, sortCallback: (item, isAscending) => {
            this.onSortData(item, isAscending);
          }
        }
      },
    ];


    this.columnOptions = [
      {
        field: 'status',
        headerName: 'Status',
        sortable: true,
        filter: true,
        checkboxSelection: true,
        cellRendererFramework: AgGridStatusComponent,
        resizable: true,
        editable: false,
        pinned: 'left',
        headerCheckboxSelection: true,
      },
      {field: 'name', headerName: 'Name', sortable: true, filter: true, resizable: true, width: 400, editable: false},
      {field: 'typeId', headerName: 'Type', sortable: true, filter: true, resizable: true, editable: false},
      {
        field: 'createDate',
        headerName: 'Create Date',
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
        cellRendererFramework: AgGridDateFormatComponent
      },
      {
        field: 'lastUpdated',
        headerName: 'Last Updated',
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
        cellRendererFramework: AgGridDateFormatComponent
      },
      {
        field: 'actions',
        headerName: 'actions',
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
        cellRendererFramework: AgGridActionsComponent,
        pinned: 'right'
      }
    ];

    this.columnDefsForView = [
      {
        field: 'status',
        headerName: 'Status',
        sortable: true,
        filter: true,
        checkboxSelection: true,
        cellRendererFramework: AgGridStatusComponent,
        resizable: true,
        editable: false,
        pinned: 'left',
        headerCheckboxSelection: true,
      },
      {field: 'name', headerName: 'Name', sortable: true, filter: true, resizable: true, width: 400, editable: false},
      {field: 'typeId', headerName: 'Type', sortable: true, filter: true, resizable: true, editable: false},
      {
        field: 'createDate',
        headerName: 'Create Date',
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
        cellRendererFramework: AgGridDateFormatComponent
      },
      {
        field: 'lastUpdated',
        headerName: 'Last Updated',
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
        cellRendererFramework: AgGridDateFormatComponent
      },
      {
        field: 'actions',
        headerName: 'actions',
        sortable: true,
        filter: true,
        resizable: true,
        editable: false,
        cellRendererFramework: AgGridActionsComponent,
        pinned: 'right'
      }
    ];
  }

  public onSelectedColumnChangePrimeNg($event: any) {
    this.tableStructureForView = [...$event.value];
  }

  public onSelectedColumnChange($event: any) {
    this.columnDefsForView = [...$event.value];
  }


  public onSortData(sortKey: string|undefined, isAscending: boolean) {

  }

  public onSelectedRowChane($event: any) {

  }

}



