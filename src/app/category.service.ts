import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories;
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    this.categories = this.db.list('/categories', (reg) =>
      reg.orderByChild('name')
    );
    return this.categories
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }
}
