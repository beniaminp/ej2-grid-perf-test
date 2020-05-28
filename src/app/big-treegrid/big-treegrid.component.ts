import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {sampleData} from '../data_tree';
import {TreeGridComponent} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-big-treegrid',
  templateUrl: './big-treegrid.component.html',
  styleUrls: ['./big-treegrid.component.css']
})
export class BigTreegridComponent implements OnInit, OnDestroy {

  public data: any[] = [...sampleData];

  @ViewChild('treeGridComponent', {static: false})
  public treeGridComponent: TreeGridComponent;

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 300; ++i) {
      this.data.push(...sampleData);
    }
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
