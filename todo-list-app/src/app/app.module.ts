import { TodoService } from './../services/TodoService';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ViewPage } from './../pages/view/view';
import { CreatePage } from './../pages/create/create';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [MyApp, HomePage, CreatePage, ViewPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, CreatePage, ViewPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TodoService,
  ],
})
export class AppModule {}
