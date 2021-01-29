import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { FreteCadastroComponent } from '../frete-cadastro/frete-cadastro.component';

@Component({
  selector: 'app-frete-listagem',
  templateUrl: './frete-listagem.component.html',
  styleUrls: ['./frete-listagem.component.scss']
})
export class FreteListagemComponent implements OnInit {

  freteList = [];
  showSpinner = false;

  constructor(
    private _dialog: MatDialog,
    private _fireStoreService: FirestoreService,
    private _snack: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getFrete();
  }

  getFrete() {
    this.showSpinner = true;
    this._fireStoreService.getCollection('frete').subscribe((result: any) => {
      console.log('fretelist:',result)
      this.freteList = result;
      this.showSpinner = false;
    });
  }

  mostrarCadastroFrete() {
    this._dialog.open(FreteCadastroComponent);
  }


  onEdit(frete: any) {
    this._dialog.open(FreteCadastroComponent, {
      data: frete
    });
  }

  onDelete(frete: any) {

    let dialogRef = this._dialog.open(ConfirmDeleteComponent, {
      data: { message: 'Deseja deletar este frete?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.confirm) {
        this._fireStoreService.deleteDocument(frete.id, 'frete').then((result: any) => {
          this._snack.open('Frete deletado com sucesso!');
        });
      }
    });
  }
}
