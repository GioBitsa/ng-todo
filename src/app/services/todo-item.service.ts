import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodoItemModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TodoItemService {
  constructor(private db: AngularFireDatabase) {
    console.log(db);
  }

  createNewTodo(data: TodoItemModel): Observable<void> {
    return new Observable((observer) => {
      this.db
        .list('/todoItems')
        .push(data)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  getTodoList(): Observable<any> {
    return this.db.object('/todoItems').valueChanges();
  }
}
