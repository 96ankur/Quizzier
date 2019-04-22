import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-submit-quiz-details',
  templateUrl: './submit-quiz-details.component.html',
  styleUrls: ['./submit-quiz-details.component.scss']
})
export class SubmitQuizDetailsComponent implements OnInit {
  constructor(private _fb: FormBuilder,public dialogRef: MatDialogRef<SubmitQuizDetailsComponent> ) { }
  AddQuestionForm: FormGroup;
  ngOnInit() {
    this.AddQuestionForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]) // here
    });
  }
  initItemRows() {
    return this._fb.group({
        // list all your form controls here, which belongs to your form array
        question:['', Validators.required] ,
        correctAnswer:['', Validators.required] ,
        incorrectAnswer1: ['', Validators.required] ,
        incorrectAnswer2: ['', Validators.required] ,
        incorrectAnswer3: ['', Validators.required]
    });
}
close() {
  let data = [];
  this.AddQuestionForm.value.itemRows.forEach((i) => {
    data.push({
      question: i.question,
      correctAnswer: i.correctAnswer,
      incorrectAnswers: [
        i.incorrectAnswer1,
        i.incorrectAnswer2,
        i.incorrectAnswer3
      ]
    });
  });
  this.dialogRef.close( data);
}

addNewRow() {
  // control refers to your formarray
  const control = <FormArray>this.AddQuestionForm.controls['itemRows'];
  // add new formgroup
  control.push(this.initItemRows());
}

deleteRow(index: number) {
  // control refers to your formarray
  const control = <FormArray>this.AddQuestionForm.controls['itemRows'];
  // remove the chosen row
  control.removeAt(index);
}
}


