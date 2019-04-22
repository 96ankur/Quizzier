var express = require('express')
var router = express.Router()
var signupUser = require('./signup_user')
var signupCompany = require('./signup_company')
var loginAdmin=require('./loginAdmin')
var loginUser = require('./loginUser')
var loginCompany = require('./loginCompany')
var tokenVerify=require('./tokenVerify')
var otpVerifyUser=require('./user/otpVerify')
var otpVerifyCompany=require('./company/otpVerifyCompany')
var displayName=require('./displayName')
var createTest = require('./company/create_test')
var createdQuiz=require('./company/createdQuiz')
var deleteQuiz=require('./company/deleteQuiz')
var quizConducted=require('./webAdmin/quizConducted')
var quizPending=require('./webAdmin/quizPending')
var companyDetails=require('./webAdmin/companyDetails')
var sortedCompanyDetails=require('./webAdmin/sortedCompanyDetails')
var resendOtp=require('./resendOtp')
var userDetails=require('./company/userDetails')
var sortedUserDetails=require('./company/sortedUserDetails')
var webAdminApproval=require('./webAdmin/approvalByWebAdmin')
var webAdminDisapproval=require('./webAdmin/disapprovalByWebAdmin')
var companyApproval=require('./company/approvalByCompany')
var companyDisapproval=require('./company/disapprovalByCompany')
var quizConductedCompany=require('./company/quizConductedForCompany')
var resultForCompany=require('./company/conductedQuizDetailsCompany')
var currentQuiz=require('./user/currentQuiz')
var upcomingQuiz=require('./user/upcomingQuiz')
var userHistory=require('./user/userHistory')
var forgetPasswordMail=require('./forgetPasswordMail')
var forgetPasswordUrl=require('./forgetPasswordUrl')
var showTest=require('./user/showtest')
var resultCalcuation=require('./user/resultCalcuation')
var changePassword=require('./changePassword')
var quizAlreadyAttemp=require('./user/quizAlreadyAttemp')
var userCompanyCount=require('./webAdmin/userCompanyCount')
var userCount=require('./company/userCount')
var userCompanyQuizCount=require('./userComapnyQuizCount')
var resultDisplay=require('./user/resultDisplay')





router.post('/signup_user', signupUser.signup_user) //by clicking a signup modal will open and then by clicking user url->  user/signup_user
router.post('/signup_company', signupCompany.signup_company) //by clicking a signup modal will open and then by clicking company url->  user/signup_company
router.post('/loginUser', loginUser.loginUser) //login for user
router.post('/loginCompany', loginCompany.loginCompany) //login for company
router.post('/otpVerifyUser',tokenVerify.tokenVerify,otpVerifyUser.otpVerify) //it will verify otp when user enters otp and click on verify otp button
router.post('/otpVerifyCompany',tokenVerify.tokenVerify,otpVerifyCompany.otpVerify) //it will verify otp when user enters otp and click on verify otp button
router.get('/resendOtp',tokenVerify.tokenVerify,resendOtp.resendOtp)// it will run when user click on resend OTP as well as after login(only when OTP verification in not done)
router.post('/changePassword',tokenVerify.tokenVerify,changePassword.changePassword)
router.post('/forgetPasswordMail',forgetPasswordMail.forgetPasswordMail)  // it will send an URL to entered email for changing password
router.post('/forgetPasswordURL',forgetPasswordUrl.forgetPasswordUrl)  // it will lead to user to another component for changing password
router.post('/displayName',tokenVerify.tokenVerify,displayName.displayName)
router.get('/userCompanyQuizCount',userCompanyQuizCount.userCompanyQuizCount)


//--------------------for webAdmin---------------------------------------------

router.post('/loginAdmin',loginAdmin.loginAdmin) //login for admin
router.get('/quizConducted',tokenVerify.tokenVerify,quizConducted.quizConducted)// it will display all the conducted quizzes to web admin
router.get('/quizPending',tokenVerify.tokenVerify,quizPending.quizPending)// it will display all the conducted quizzes to web admin
router.get('/companyDetails',tokenVerify.tokenVerify,companyDetails.companyDetails)// it will display display company name and status (for approval and disapproval)
router.post('/sortedCompanyDetails',tokenVerify.tokenVerify,sortedCompanyDetails.sortedCompanyDetails)// it will display display company name and status (for approval and disapproval) according to status
router.post('/webAdminApproval',tokenVerify.tokenVerify,webAdminApproval.webAdminApproval)//it will run when web Admin click approve for a particular company
router.post('/webAdminDisapproval',tokenVerify.tokenVerify,webAdminDisapproval.webAdminDisapproval)//it will run when web Admin click approve for a particular company and send an email to company
router.get('/userCompanyCount',tokenVerify.tokenVerify,userCompanyCount.userCompanyCount)


//--------------------for company---------------------------------------------


router.post('/create_test', tokenVerify.tokenVerify,createTest.createTest) // it will take basic details required to take a test and then will move to add question.
router.get('/createdQuiz',tokenVerify.tokenVerify,createdQuiz.createdQuiz)// it will display created quiz to company
router.post('/deleteQuiz',tokenVerify.tokenVerify,deleteQuiz.deleteQuiz)// it will display created quiz to company
router.get('/userDetails',tokenVerify.tokenVerify,userDetails.userDetails)// it will display display company name and status (for approval and disapproval)
router.post('/sortedUserDetails',tokenVerify.tokenVerify,sortedUserDetails.sortedUserDetails)// it will display display company name and status (for approval and disapproval) according to status
router.post('/companyApproval',tokenVerify.tokenVerify,companyApproval.companyApproval)//it will run when web Admin click approve for a particular company
router.post('/companyDisapproval',tokenVerify.tokenVerify,companyDisapproval.companyDisapproval)//it will run when web Admin click approve for a particular company and send an email to company
router.get('/quizConductedCompany',tokenVerify.tokenVerify,quizConductedCompany.quizConductedCompany)// it will display all the conducted quizzes to web admin
router.post('/resultForCompany',tokenVerify.tokenVerify,resultForCompany.resultForCompany)// it will display student's name,id and marks to company


//----------------------------for User---------------------------------------------

router.get('/currentQuiz',tokenVerify.tokenVerify,currentQuiz.currentQuiz)// it will display all the ongoing quizzes and to be held to user 
router.get('/upcomingQuiz',tokenVerify.tokenVerify,upcomingQuiz.upcomingQuiz)// it will display all the ongoing quizzes and to be held to user 
router.get('/userHistory',tokenVerify.tokenVerify,userHistory.userHistory)// it will display all the attempted quizzes to user
router.post('/showTest',tokenVerify.tokenVerify,showTest.showTest)
router.post('/resultCalcuation',tokenVerify.tokenVerify,resultCalcuation.resultCalcuation)
router.post('/quizAlreadyAttemp',tokenVerify.tokenVerify,quizAlreadyAttemp.quizAlreadyAttemp)
router.post('/resultDisplay',tokenVerify.tokenVerify,resultDisplay.resultDisplay)
router.get('/userCount',tokenVerify.tokenVerify,userCount.userCount)


module.exports = router