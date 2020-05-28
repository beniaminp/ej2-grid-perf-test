import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {EditSettingsModel, FilterSettingsModel, RowSelectingEventArgs} from '@syncfusion/ej2-grids';
import {GridComponent} from '@syncfusion/ej2-angular-grids';
import {data} from '../data';


@Component({
  selector: 'app-big-grid',
  templateUrl: './big-grid.component.html',
  styleUrls: ['./big-grid.component.css']
})
export class BigGridComponent implements OnInit, OnDestroy {
  public data = [...data];
  public pageSettings: any = {pageCount: 20};

  public initialSort: any = {
    columns: [{field: 'Freight', direction: 'Ascending'},
      {field: 'CustomerName', direction: 'Descending'}]
  };
  public contextMenuItems: string[] = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
    'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
    'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
    'LastPage', 'NextPage'];
  public editing: EditSettingsModel = {allowDeleting: true, allowEditing: true, allowAdding: true};
  public filterOption: FilterSettingsModel = {type: 'Excel'};
  public toolbar: string[] = ['ColumnChooser', 'Add', 'Edit', 'Delete'];
  public selectOptions: any = {persistSelection: true};
  public editSettings: any = {allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog'};

  @ViewChild('gridComponent', {static: false})
  public gridComponent: GridComponent;


  @Output()
  public gridEvent: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 12; ++i) {
      this.data.push(...data);
    }
  }

  ngOnDestroy(): void {
    if (this.gridComponent != null) {
      this.gridComponent.destroy();
      this.gridComponent = null;
    }
    this.data = null;
    this.pageSettings = null;
    this.initialSort = null;
    this.contextMenuItems = null;
    this.editing = null;
    this.filterOption = null;
    this.toolbar = null;
    this.selectOptions = null;
  }


  public callCustomAction(type: string, event: any) {
    switch (type) {
      case 'create':
        break;
      case 'rowSelected':

        break;

      case 'rowDeselected':

        break;
      case 'rowDataBound':

        break;
      case 'queryCellInfo':

        break;
    }
    this.gridEvent.emit(event);
  }

  public preventRowSelect($event: RowSelectingEventArgs) {

  }

}
