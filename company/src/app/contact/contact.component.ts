import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../shared/services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  feedback: any;

  feedbackForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    message: new FormControl('',[Validators.required]) 
  });

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.display();
  }

  display() {
    this.feedback = this.feedbackService.getFromStorage();
  }

  delete() {
    this.feedbackService.deleteFromStorage();
  }

  submit() {
    this.feedbackService.form = this.feedbackForm;
    this.feedbackService.saveToStorage();
    console.log(this.feedbackService.form);
  }

}
