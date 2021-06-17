import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';
import {IActionItem, IEntityDataWithActions} from '../prime-ng/poc-prime-ng.component';


@Component({
  selector: 'ag-grid-actions',
  templateUrl: './ag-grid-actions.component.html',
  styleUrls: ['./ag-grid-actions.component.scss']
})


export class AgGridActionsComponent implements AgRendererComponent {

  selectedRow: IEntityDataWithActions|undefined;


  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
  }

  agInit(params: ICellRendererParams): void {
    this.selectedRow = params?.data;
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  public onActionClicked($event: any, action: IActionItem) {
    if (action.disabled) {
      return;
    }
    action.iconCallback(this.selectedRow);
  }
}
