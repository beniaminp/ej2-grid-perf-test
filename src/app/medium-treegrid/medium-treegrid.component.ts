import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {sampleData} from '../data_tree';
import {TreeGridComponent} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-medium-treegrid',
  templateUrl: './medium-treegrid.component.html',
  styleUrls: ['./medium-treegrid.component.css']
})
export class MediumTreegridComponent implements OnInit, OnDestroy {

  public data: any[] = [];
  @ViewChild('treeGridComponent', {static: false})
  public treeGridComponent: TreeGridComponent;

  constructor() {
  }

  ngOnInit() {
    this.data = sampleData;
  }

  public preventRowSelectOnCtxTrigger(event: any) {

  }

  public treeGridOuter(event: any, rowSelected: string) {

  }

  ngOnDestroy(): void {
    this.treeGridComponent.destroy();
    this.data = null;
  }
}
