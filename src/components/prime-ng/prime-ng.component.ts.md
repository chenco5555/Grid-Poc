### sort

see: https://stackoverflow.com/questions/51772701/primeng-sortable-table-specify-sorted-column/52292026
see: https://www.primefaces.org/primeng/showcase/#/table/sort

A column can be made sortable by adding the pSortableColumn directive whose value is the field to sort against and a sort indicator via p-sortIcon component. 
For dynamic columns, setting pSortableColumnDisabled property as true disables sorting for that particular column.

        [customSort]="true"
        (sortFunction)="customSort($event)"
      
      
      <th *ngFor="let col of tableStructure"
          [pSortableColumnDisabled]="!col.tableHeader.hasSort"
          [pSortableColumn]="col.tableHeader.title">
          {{col.tableHeader.title}}
          <p-sortIcon
            *ngIf="col.tableHeader.hasSort"
            [field]="col.tableHeader.title"
            ariaLabel="Activate to sort"
            ariaLabelDesc="Activate to sort in descending order"
            ariaLabelAsc="Activate to sort in ascending order">
          </p-sortIcon>
        </th>
        


# selection
        selectionMode="single"
        (click)="onRowSelect(tableRow)"


see: https://www.primefaces.org/primeng/showcase/#/table/selection


# page 
Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page. F
or server side pagination, see the lazy loading example.

see: https://www.primefaces.org/primeng/showcase/#/table/page

     [showCurrentPageReport]="false"
     [paginator]="true"



#scroll
see: https://www.primefaces.org/primeng/showcase/#/table/scroll


      [virtualScroll]="true"
      [virtualRowHeight]="34"
      scrollHeight="400px"


#colresize
see: https://www.primefaces.org/primeng/showcase/#/table/colresize
    on project management we set different column width for project name and action items 
    
        <ng-template pTemplate="colgroup">
          <colgroup>
            <col *ngIf="hasTableCheckbox" style="width:2%">
            <col style="width:10%">
            <col style="width:30%">
            <col style="width:10%">
            <col style="width:10%">
            <col style="width:10%">
            <col style="width:10%">
          </colgroup>
        </ng-template>
