import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';
import {IAfterGuiAttachedParams, ICellRendererParams} from 'ag-grid-community';
import {Color} from '../colors.enum';

@Component({
  selector: 'ag-grid-status',
  templateUrl: './ag-grid-status.component.html',
  styleUrls: ['./ag-grid-status.component.scss']
})


export class AgGridStatusComponent implements AgRendererComponent {

  public displayValue: string = '';
  public displayColor: Color | null = null;

  constructor(){
  }


  agInit(params: ICellRendererParams): void {
    this.displayValue = AgGridStatusComponent.translatProjectStatus(params.value);
    this.displayColor = AgGridStatusComponent.convertProjectStatusToColor(params.value);
  }

  afterGuiAttached(params?: IAfterGuiAttachedParams): void {
    console.log(params);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  private static convertProjectStatusToColor(projectStatus: string): Color | null {
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

  private static translatProjectStatus(projectStatus: string): string {
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

}
