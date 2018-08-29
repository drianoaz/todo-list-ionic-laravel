import { TodoService } from './../../services/TodoService';
import { ViewPage } from './../view/view';
import { CreatePage } from './../create/create';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public todoList = [];

  constructor(
    private navCtrl: NavController,
    private todoService: TodoService,
    private loadingCtrl: LoadingController,
  ) {}

  ionViewWillEnter() {
    const loader = this.loadingCtrl.create({
      content: 'Aguarde, carregando...',
    });

    loader.present();

    this.todoService
      .getAll()
      .finally(() => loader.dismiss())
      .subscribe(data => (this.todoList = data), error => console.log(error));
  }

  add() {
    this.navCtrl.push(CreatePage);
  }

  view(todo) {
    this.navCtrl.push(ViewPage, { todo: todo });
  }
}
