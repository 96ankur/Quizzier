import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { ResultDisplayService } from '../userServices/result-display.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss']
})
export class UserResultComponent implements OnInit {
  public token
  public _id
  public result

  constructor(private router:Router,private route: ActivatedRoute,private resultDisplay:ResultDisplayService) {
    this.token=sessionStorage.getItem('tkn')
    if(this.token==""||!this.token||this.token==undefined||this.token==null){
      (this.router.navigate(['home']))
      }
   }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get('_id')
    })

    this.resultDisplay.resultDisplay(this._id).subscribe((res:any)=>{
      if(res.success){
        this.result=res.result
      }else{
        window.alert(res.msg)
      }
    })
  }

}
