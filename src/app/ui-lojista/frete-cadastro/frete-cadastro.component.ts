import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-frete-cadastro',
  templateUrl: './frete-cadastro.component.html',
  styleUrls: ['./frete-cadastro.component.scss']
})
export class FreteCadastroComponent implements OnInit {
  freteGroup: FormGroup | any;

  constructor(
    private _fb: FormBuilder,
    private _snack: MatSnackBar,
    private _dialogRef: MatDialogRef<FreteCadastroComponent>,
    private _firestoreService: FirestoreService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
  ) {
    this.createForm()
  }

  ngOnInit(): void {
    if(this.dialogData && this.dialogData.id) {
      this.freteGroup.patchValue(this.dialogData);
    }
  }

  createForm() {
    this.freteGroup = this._fb.group({
      de: [],
      ate: [],
      valor: [],
      valorGratis: [],
      id: []
    });
  }

  onSalvar() {
    let message = 'Frete cadastrado com sucesso!'
    const formData = this.freteGroup.value;
    
    formData.valor = parseFloat(formData.valor).toFixed(2);
    formData.valorGratis = parseFloat(formData.valorGratis).toFixed(2);

    if (formData.id) {
      message = 'Frete atualizado com sucesso';
    }

    this._firestoreService.setCollection(formData, 'frete').then((data: any) => {
      this._snack.open(message);
      this._dialogRef.close({ frete: formData });
    });
  }

}
