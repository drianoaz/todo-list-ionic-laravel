import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class TodoService {
  private baseURL = 'http://localhost:8000/api/todo/';

  constructor(private http: Http) {}

  getAll(): Observable<any> {
    return this.http
      .get(this.baseURL)
      .map((response: Response) => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  create(data: any): Observable<any> {
    return this.http
      .post(this.baseURL, data)
      .map((response: Response) => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  delete(id): Observable<any> {
    return this.http
      .delete(this.baseURL + id)
      .map((response: Response) => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

// export const getAll = Http.
