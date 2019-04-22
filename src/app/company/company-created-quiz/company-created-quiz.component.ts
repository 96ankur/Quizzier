import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { CreatedQuizService } from '../companyServices/created-quiz.service';

@Component({
  selector: 'app-company-created-quiz',
  templateUrl: './company-created-quiz.component.html',
  styleUrls: ['./company-created-quiz.component.scss']
})
export class CompanyCreatedQuizComponent implements OnInit {

  token
  public QuizDetails

  constructor(private router:Router,private createdQuizService:CreatedQuizService) {
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
   }

  ngOnInit() {
    this.createdQuizService.createdQuiz().subscribe((res:any)=>{
      if(res.success){
        if(res.data==undefined){
          window.alert(res.msg)
        }
        this.QuizDetails=res.data
      }else{
        window.alert(res.msg)
      }
    })
  }

  deleteQuiz(_id){
    this.createdQuizService.deleteQuiz(_id).subscribe((res:any)=>{
      if(res.success){
        window.alert(res.msg)
        this.router.navigate(['company/dashboard/createdQuiz'])
      }else{
        window.alert(res.msg)
      }
    })

  }
}
