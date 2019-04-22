export interface UserCurrentQuizItem {
    quizName: string;
    timeDuration:string;
    _id:string
}

export interface UserUpcomingQuizItem {
    quizName: string;
    testDate:string;
}

export interface UserHistoryItem {
  
    quizName: string;
    quizDate: string;
    totalMarks: number;
    results: number;
}