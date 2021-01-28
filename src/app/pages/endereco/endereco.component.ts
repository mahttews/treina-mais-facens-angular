import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscaCepService } from 'src/app/services/busca-cep.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecoGroup: FormGroup;
  enderecosList: any[] = [];
  dataCep: any = {
    rua: '',
    cidade: ''
  };

  enderecoEntrega: string = '';

  constructor(
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

  onSalvar() {
    const formData = this.enderecoGroup.value;
    if (this.dataCep.rua != '') {
      formData.rua = this.dataCep.rua;
      formData.cidade = this.dataCep.cidade;
    }
    this._firestoreService.setCollection(formData, 'enderecos').then(response => {
      alert('Dados salvos com sucesso');
      this.getEnderecos();
    });
  }

  getEnderecos() {
    this._firestoreService.getColletion('enderecos').subscribe((response: any[]) => {
      this.enderecosList = response;
    });
  }

  async searchCep() {
    const cep = this.enderecoGroup.value.CEP;

    if (cep.length < 8) return;

    await this.buscarCep.buscarCEP(cep).subscribe((res: any) => {
      debugger
      this.dataCep = {
        cidade: res.city,
        rua: `${res.street}/${res.state}`
      }

    })
  }

  // getEnderecoEntrega() {
  //   this._firestoreService.getColletion('enderecoEntrega').subscribe((response: any) => {
  //     this.enderecoEntrega = response[3].enderecoEntrega;
  //     console.log('enderecoEntrega:', this.enderecoEntrega);
  //   });
  // }

  // onChangeEnderecoEntrega(e: any) {
  //   debugger
  //   console.log(e)
  //   this.enderecoEntrega = e.value;
  //   const endereco = {enderecoEntrega: this.enderecoEntrega};
  //   this._firestoreService.setCollection(endereco,'enderecoEntrega').then(response => {
  //   });
  // }

}
