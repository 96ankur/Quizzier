import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StartQuizService {

  public arrayForIncorrect=[]
  public arrayForQuestion=[]
  public rand_num

  constructor(private _http:HttpClient) { }

  randomForIncorrect(){
    while(this.arrayForIncorrect.length!=4){
      this.rand_num=Math.floor(Math.random()*10)
          if(this.rand_num<4){
              if(!this.arrayForIncorrect.includes(this.rand_num)){
                  this.arrayForIncorrect.push(this.rand_num)
              }  
          }
      }
      return this.arrayForIncorrect
  }

  randomForQuestion(noOfQuestion){
    while(this.arrayForQuestion.length!=noOfQuestion){
      this.rand_num=Math.floor(Math.random()*10)
          if(this.rand_num<noOfQuestion){
              if(!this.arrayForQuestion.includes(this.rand_num)){
                  this.arrayForQuestion.push(this.rand_num)
              }  
          }
      }
      console.log(this.arrayForQuestion)
      return this.arrayForQuestion
  }

  header=new HttpHeaders({
    'Content-Type':'application/json',
    'client-token':sessionStorage.getItem('tkn')
  })

  startQuiz(_id){
    return this._http.post('http://localhost:5000/user/showTest',{testId:_id},{headers:this.header})
  }
}