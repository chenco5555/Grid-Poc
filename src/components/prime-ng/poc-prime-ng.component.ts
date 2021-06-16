import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { SortMeta} from 'primeng/api';
import {Color} from '../colors.enum';
import {TableDataService} from '../../services/table-data-service';

export interface ICustomFields {
  [key: string]: any;
}

export enum ProjectStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS' as any,
  SUBMITTED = 'SUBMITTED' as any,
  IN_REVIEW = 'IN_REVIEW' as any,
  APPROVED = 'APPROVED' as any,
  REJECTED = 'REJECTED' as any,
  NEW = 'NEW' as any,
  DRAFT = 'DRAFT' as any,

}

export interface IEntityData {
  id: number;
  typeId: number;
  name?: string;
  order?: number;
  customFields: ICustomFields;
  createDate?: Date;
  lastUpdated?: Date;
  status: ProjectStatusEnum;
  violations?: any;
  warnings?: any;
  parentId?: number;
  createUser?: {id: number, username: string, guid?: string};
  updateUser?: {id: number, username: string, guid?: string};
  parentProjectId?: number;
  projectId?: number;
  excluded?: boolean;
  active?: boolean;
  lengthInFeet?: number;
}

export interface IEntityDataWithActions extends IEntityData{
  actions: IActionItem[];
}

export interface IActionItem {
  title: ActionItemEnum;
  disabled: boolean;
  tooltip: string;
  iconCallback: (item: any) => void;
}

export enum ActionItemEnum {
  DELETE = 'Delete',
  EDIT = 'Edit'
}

export interface ITableAction {
  icon: string;
  iconCallback: (icon: string) => void;
}

export interface ITableHeader {
  title: string;
  hasSort: boolean;
  sortCallback: (tableHeader: string | undefined, isAscending: boolean) => void;
  action?: ITableAction[];
  columnWidth?: number;
}

export interface ITableColumn {
  columnKey: string;
  hasStatusColor?: boolean;
}

export interface ITableStructure {
  tableHeader: ITableHeader;
  tableColumnKey: ITableColumn;
  label?: string;
  value?: string
}

export interface ISortEvent {
  data: any[];
  mode: string;
  field: string;
  order: number;
  multiSortMeta: SortMeta[];
}


@Component({
  selector: 'app-prime-ng',
  templateUrl: './poc-prime-ng.component.html',
  styleUrls: ['./poc-prime-ng.component.scss']
})


export class PocPrimeNgComponent implements OnInit {

  @Input() public hasTableCheckbox = false;
  @Input() public hasActionItems = false;
  @Input() public tableStructure: ITableStructure[] = [];
  @Input() public tableData: any[] = [];

  @Output() public selectedRow: EventEmitter<any> = new EventEmitter();
  @Output() public onDeleteRow: EventEmitter<any> = new EventEmitter();

  public first = 0;
  public rows = 10;

  constructor(private tableDataService: TableDataService) {}

  ngOnInit() {
    this.tableDataService.getCustomersLarge().then(res => {
      this.tableData = res;
    });
  }

  customSort(event: ISortEvent) {
    this.tableData?.sort((data1, data2) => {
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

  public deleteRow(tableRow: any) {
    alert('Delete project');
    this.onDeleteRow.emit(tableRow);
  }

  public  convertProjectStatusToColor(projectStatus: ProjectStatusEnum): Color | null {
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

  public onRowSelect(event: any) {
    alert('open project editor');
    this.selectedRow.emit(event);
  }

}
