import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {PaginationChangedEvent} from 'ag-grid-community';
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

  constructor(private tableDataService: TableDataService) {
  }

  ngOnInit() {
    this.rebuildTableData();

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

  onGridReady(params: {api: any; columnApi: any;}) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
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

}
