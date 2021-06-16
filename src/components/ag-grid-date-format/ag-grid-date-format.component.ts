import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'ag-grid-date-format',
  templateUrl: './ag-grid-date-format.component.html',
  styleUrls: ['./ag-grid-date-format.component.scss']
})


export class AgGridDateFormatComponent implements AgRendererComponent {
  public displayValue: any;

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  agInit(params: ICellRendererParams): void {
    this.displayValue = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
}
