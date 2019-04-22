export interface companyDetails{
    companyName:String,
    userName:String,
    email:String,
    phone:String,
    created_on:String,
    status:String
}

export interface WebCompanyQuizConductedItem {
    companyName: string;
    quizName: string;
    testDate:string;
  }

  export interface WebCompanyQuizPendingItem {
    companyName: string;
    quizName: string;
    testDate:string;
  }