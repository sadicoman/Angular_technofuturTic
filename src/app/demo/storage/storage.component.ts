import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent {

  loginForm!: FormGroup;

  constructor(private _nomFormBuilder : FormBuilder){

    ngOnInit(){
      this._nomFormBuilder.group({
        email : ['', Validators.required],
        mdp : ['', Validators.required],
      })
    }

    onSubmit() : void{
      const form = this.loginForm.value
      if (form['email']) {
        
      }
    }

  }

}
