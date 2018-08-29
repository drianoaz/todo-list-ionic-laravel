import { TodoService } from './../../services/TodoService';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
} from 'ionic-angular';

/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  public todo = {
    title: null,
    description: null,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private todoService: TodoService,
    private loadingCtrl: LoadingController,
  ) {}

  add() {
    const loader = this.loadingCtrl.create({
      content: 'Aguarde, enviando...',
    });

    loader.present();

    this.todoService.create(this.todo).subscribe(() => {
      this.navCtrl.pop();
      loader.dismiss();
    });
  }
}
