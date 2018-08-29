import { TodoService } from './../../services/TodoService';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
} from 'ionic-angular';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
  public todo = {
    id: null,
    title: null,
    description: null,
    created_at: null,
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private todoService: TodoService,
    private loadingCtrl: LoadingController,
  ) {
    // console.log(this.navParams.todo);
    this.todo = navParams.get('todo');
    console.log('--------->a aqui', navParams.get('todo'));
  }

  delete() {
    const loader = this.loadingCtrl.create({
      content: 'Aguarde, removendo...',
    });

    loader.present();

    this.todoService
      .delete(this.todo.id)
      .finally(() => loader.dismiss())
      .subscribe(
        () => {
          this.navCtrl.pop();
        },
        error => console.log(error),
      );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }
}
