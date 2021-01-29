import { EnderecoComponent } from './../endereco/endereco.component';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  produto$: any
  cepEntrega: string = ''

  constructor(
    private dialog: MatDialog,
    private firestore: FirestoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      if ( ! paramMap.has('product') ) {
        this.router.navigateByUrl('/produtos')
      }

      let id = paramMap.get('product') || 0
      this.produto$ = this.firestore.getProduct(+id)
    })
  }

  mostrarCadastroEndereco() {
    let dialogRef = this.dialog.open(EnderecoComponent)
    
    dialogRef.afterClosed().subscribe( result => {
      if ( result && result.endereco ) {
        this.cepEntrega = result.endereco.CEP
      } else {
        this.cepEntrega = ''
      }
    })
  }

}
