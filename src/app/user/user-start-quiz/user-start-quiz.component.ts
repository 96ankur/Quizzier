import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, FormArray } from '../../../../node_modules/@angular/forms';
import { StartQuizService } from '../userServices/start-quiz.service';
import { MatRadioModule } from '@angular/material/radio';
import { ResultCalculationService } from '../userServices/result-calculation.service';

@Component({
  selector: 'app-user-start-quiz',
  templateUrl: './user-start-quiz.component.html',
  styleUrls: ['./user-start-quiz.component.scss']
})
export class UserStartQuizComponent implements OnInit {
  val = "akash";
  hideElement =false;
  token
  userAnswer: FormGroup
  public quizDetails
  public _id
  public attempt = []
  public arrayForIncorrect = []
  public arrayForQuestion = []
  public noOfQuestion

  public setted = [];
  public submitted = [];
  
  constructor(
    private _fb: FormBuilder, 
    private router: Router, 
    private startQuizService: StartQuizService,
    private route: ActivatedRoute,
    private resultCalculation:ResultCalculationService
  ) {

    this.token = sessionStorage.getItem('tkn')
    if (this.token == "" || !this.token || this.token == undefined || this.token == null) {
      (this.router.navigate(['home']))
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/user/dashboard/currentQuizzes/startQuiz') {
          this.hideElement = false;
        } else {
          this.hideElement = true;
        }
      }
    });
  }

  ngOnInit() {

    this.userAnswer = this._fb.group({
      submitAnswer: this._fb.array([this.initsubmitAnswer()]) // here
    })

    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('_id')
    })

    this.startQuizService.startQuiz(this._id).subscribe((res: any) => {
      if (res.success) {
        this.quizDetails = res.data
        this.noOfQuestion = this.quizDetails.noOfQues
      } else {
        window.alert(res.msg)
      }
    })
    this.arrayForIncorrect = this.startQuizService.randomForIncorrect()
    // this.arrayForQuestion=this.startQuizService.randomForQuestion(this.noOfQuestion)
    // console.log(this.arrayForQuestion)
  }

  initsubmitAnswer() {
    return this._fb.group({
      // l  question:['', Validators.required] ,
      quesName: '',
      answer: '',

    })
  };

  close() {
    let data = [];
    // const control = <FormArray>this.userAnswer.controls['submitAnswer'];    
    this.userAnswer.value.submitAnswer.forEach((i) => {
      data.push({
        quesName: i.quesName,
        answer: i.answer
      });
    });
  }

  onSubmituserAnswer() {
    let submitter = new Array(this.setted.length);
    for(let i = 0; i < this.setted.length; i++) {
      let obj = {
        quesName: this.setted[i].question,
        answer: this.submitted[i] ? this.submitted[i].answer : undefined
      }
      submitter[i] = obj;
    }
    
    this.resultCalculation.result(submitter,this.quizDetails.quizName).subscribe((res:any)=>{
      if(res.success){
        console.log(res.id)
        window.alert(res.msg)
        this.router.navigate(['../../result',res.id],{relativeTo: this.route})
      }else{
        window.alert(res.msg)
      }
    })
  }

  add(index, question, answer) {
    let obj = {
      question,
      answer
    }
    this.submitted[index] = obj;
  }

  set(index, question) {
    let obj = {
      question,
      answer: undefined
    }
    this.setted[index] = obj;
  }
}


