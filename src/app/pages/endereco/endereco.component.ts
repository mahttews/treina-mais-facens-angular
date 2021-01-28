import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecoGroup: FormGroup;
  enderecosList: any[] = [];

  constructor(
    private _fb: FormBuilder,
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
  }

  onSalvar() {
    const formData = this.enderecoGroup.value;
    this._firestoreService.setCollection(formData).then(response => {
      alert('Dados salvos com sucesso');
      this.getEnderecos();
    })
  }

  getEnderecos() {
    this._firestoreService.getColletion('enderecos').subscribe((response: any[]) => {
      this.enderecosList = response;
    });
  }

}
