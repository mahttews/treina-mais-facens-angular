import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _firestore: AngularFirestore,
  ) { }

  setCollection(data: any, collection: any) {
    return this._firestore.collection(collection).add(data);
  }

  getColletion(collectionName: any) {
    return this._firestore.collection(collectionName).valueChanges();
  }
}
