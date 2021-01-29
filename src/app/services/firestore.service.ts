import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Product {
  id: string,
  name: string,
  price: string
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private _fireStore: AngularFirestore
  ) { }

  getProducts() {
    return this._fireStore.collection<Product>('produtos').valueChanges()
  }

  getProduct(id: number) {
    return this._fireStore.collection<Product>('produtos', ref => ref.where('id', '==', id)).valueChanges().pipe(
      map( (produtos: any) => {
        return produtos[0] || undefined;
      })
    )
  }

  setCollection(data: any, collectionName: any): any {
    if ( data.id ) {
      return this._fireStore.doc(`${collectionName}/${data.id}`).update({...data})
    } else {
      let id = this._fireStore.createId()    
      return this._fireStore.doc(`${collectionName}/${id}`).set({...data, id})
    }
  }

  getCollection(collectionName: any) {
    return this._fireStore.collection(collectionName).valueChanges();
  }

  deleteDocument(id: any, collectionName: any): any {
    return this._fireStore.doc(`${collectionName}/${id}`).delete();
  }
}
