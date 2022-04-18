import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  form : FormGroup = new FormGroup(
    {
      name: new FormControl(),
      message: new FormControl()
    }
  );

  constructor() { }

  saveToStorage() {
    localStorage.setItem('formData', JSON.stringify(this.form.value))
  }

  deleteFromStorage() {
    localStorage.removeItem('formData');
  }

  getFromStorage(): any {
    return localStorage.getItem('formData');
  }

}
