import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService, Product } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products$: any

  constructor(
    private _firestoreService: FirestoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.products$ = this._firestoreService.getProducts()
  }

  findProducts(){
    
  }

  mostrarDetalhes(produto: Product) {
    this.router.navigate(['produtos','item-details', produto.id])
  }

}
