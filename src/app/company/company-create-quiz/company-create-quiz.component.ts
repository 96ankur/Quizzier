import { Component, OnInit } from '@angular/core';
import { SubmitQuizDetailsComponent } from './submit-quiz-details/submit-quiz-details.component';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS} from './date.adapter';
import { CreateTestService } from '../companyServices/create-test.service';


@Component({
  selector: 'app-company-create-quiz',
  templateUrl: './company-create-quiz.component.html',
  styleUrls: ['./company-create-quiz.component.scss'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]})
export class CompanyCreateQuizComponent implements OnInit {

  CreateQuizForm : FormGroup;
  token
  public QuestionData

  public date;
  public now: Date = new Date();
  minDate = this.now;
  maxDate = new Date(2020, 0, 1);

  constructor(public dialog: MatDialog, private fb: FormBuilder,private router:Router,private createTestService:CreateTestService)
  {
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      // window.alert('YOU HAVE LOGGED OUT!! PLEASE LOGIN AGAIN');
      (this.router.navigate(['home']))
      }

    setInterval(() => {
    this.date = new Date();
  }, 1);
}
  ngOnInit(): void {
    this.CreateQuizForm = this.fb.group({
      QuizName: ['', [Validators.required, Validators.minLength(2)]],
      noQuestion:['',[Validators.required, Validators.min(5), Validators.max(180), Validators.pattern('[0-9]+[0-9]')]],
      duration:['',[Validators.required, Validators.min(5), Validators.max(180), Validators.pattern('[0-9]+[0-9]')]] ,
      createdBy:['',Validators.required] ,
      date:['', Validators.required]
    })
}
openEmojiDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  const dialogRef = this.dialog.open(SubmitQuizDetailsComponent,{
     width: '600px',
     height: '500px',
     autoFocus: true
   });
   dialogRef.afterClosed().subscribe(
    data => this.QuestionData=data
 );
 }

 // onSubmit() {
  //   console.warn(this.profileForm.value);
  quizdetails(value){
    let date=value.date
    let testDate=date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()
    value.date=testDate
    
    for(let ques in this.QuestionData)
      this.QuestionData[ques].incorrectAnswers.push(this.QuestionData[ques].correctAnswer)

    this.createTestService.createTest(this.QuestionData,value).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg)
        this.router.navigate(['company/dashboard'])
      }else{
        window.alert(res.msg)
      }
    })
    }
  }


