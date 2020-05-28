import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BigGridComponent} from './big-grid/big-grid.component';
import {SmallGridComponent} from './small-grid/small-grid.component';
import {MediumGridComponent} from './medium-grid/medium-grid.component';
import {BigTreegridComponent} from './big-treegrid/big-treegrid.component';
import {SmallTreegridComponent} from './small-treegrid/small-treegrid.component';
import {MediumTreegridComponent} from './medium-treegrid/medium-treegrid.component';
import {GridAllModule} from '@syncfusion/ej2-angular-grids';
import {TreeGridAllModule} from '@syncfusion/ej2-angular-treegrid';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecondPageComponent} from './second-page/second-page.component';
import {FirstPageComponent} from './first-page/first-page.component';


@NgModule({
  declarations: [
    AppComponent,
    BigGridComponent,
    SmallGridComponent,
    MediumGridComponent,
    BigTreegridComponent,
    SmallTreegridComponent,
    MediumTreegridComponent,
    SecondPageComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    GridAllModule,
    TreeGridAllModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
