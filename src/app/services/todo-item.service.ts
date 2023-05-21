import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
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

  getTodoList(): Observable<any[]> {
    return this.db
      .list('/todoItems')
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => ({
            id: c.payload.key,
            payload: c.payload.val(),
          }));
        })
      );
  }

  deleteSingleItem(itemID: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.db
        .object(`/todoItems/${itemID}`)
        .remove()
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }

  changeDone(itemID: string, value: boolean): Observable<void> {
    return new Observable<void>((observer) => {
      this.db
        .object(`/todoItems/${itemID}/done`)
        .set(value)
        .then(() => {
          observer.next();
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
}
