import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BuscaCepService } from 'src/app/services/busca-cep.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {
  enderecoGroup: FormGroup | any;
  enderecosList: any[] = [];
  dataCep: any = {
    rua: '',
    cidade: ''
  };

  enderecoEntrega: string = '';
  enderecoSelecionado: string = '';

  constructor(
    private dialogRef: MatDialogRef<EnderecoComponent>,
    private snack: MatSnackBar,
    private _fb: FormBuilder,
    public buscarCep: BuscaCepService,
    private _firestoreService: FirestoreService,
  ) {
    this.createForm();
  }

  createForm() {
    this.enderecoGroup = this._fb.group({
      CEP: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getEnderecos();
    // this.getEnderecoEntrega();
  }

  onSelecionarEndereco() {
    this.dialogRef.close({ endereco: this.enderecoSelecionado})
  }

  onSalvar() {
    const formData = this.enderecoGroup.value;
    if (this.dataCep.rua != '') {
      formData.rua = this.dataCep.rua;
      formData.cidade = this.dataCep.cidade;
    }
    
    let enderecos = []

    if ( localStorage.getItem('enderecos') ) {
      enderecos.push(JSON.parse(localStorage.getItem('enderecos') || ''));
    }
    enderecos.push(JSON.stringify({...formData}))
    localStorage.setItem('enderecos', JSON.stringify(enderecos))

    this.snack.open('Endereço salvo com sucesso!')
  }

  getEnderecos() {
    this._firestoreService.getCollection('enderecos').subscribe((response: any[]) => {
      this.enderecosList = response;
    });
  }

  async searchCep() {
    const cep = this.enderecoGroup.value.CEP;

    if (cep.length < 8) return;

    await this.buscarCep.buscarCEP(cep).subscribe((res: any) => {
      this.dataCep = {
        cidade: res.city,
        rua: `${res.street}/${res.state}`
      }
    })
  }
}
