import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPage } from './view';

@NgModule({
  declarations: [
    ViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPage),
  ],
})
export class ViewPageModule {}
