import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {EditSettingsModel, FilterSettingsModel} from '@syncfusion/ej2-grids';
import {data} from '../data';
import {GridComponent} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-medium-grid',
  templateUrl: './medium-grid.component.html',
  styleUrls: ['./medium-grid.component.css']
})
export class MediumGridComponent implements OnInit, OnDestroy {
  public data: any[] = [data];
  public pageSettings: any = {pageCount: 20};
  public editing: EditSettingsModel = {allowDeleting: true, allowEditing: true, allowAdding: true};

  public filterOption: FilterSettingsModel = {type: 'Excel'};
  public toolbar: string[] = ['ColumnChooser', 'Add', 'Edit', 'Delete'];
  public selectOptions: any = {persistSelection: true};
  public editSettings: any = {allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog'};

  @ViewChild('gridComponent', {static: false})
  public gridComponent: GridComponent;

  constructor() {
  }

  ngOnInit() {
    this.data = [...data].splice(0, 200);
  }

  ngOnDestroy(): void {
    if (this.gridComponent != null) {
      this.gridComponent.destroy();
      this.gridComponent = null;
    }
    this.data = null;
    this.pageSettings = null;
    this.editing = null;
    this.filterOption = null;
    this.toolbar = null;
    this.selectOptions = null;
  }

  callCustomAction(rowSelected: string, event: any) {

  }

  preventRowSelect(event: any) {

  }
}
