var  url = 'https://contributor-accounts.shutterstock.com/login';
var  siteKey = '6LeEmAETAAAAABDr-ZqYvvf06I0EYiBW2puWN5mi';

var anticaptchaManager = require(__dirname + '/AnticaptchaManager');

anticaptchaManager.SolveTheGoogleCaptcha(url, siteKey, function (err, taskSolution) {
    if(err)
    {
        console.log(err);
        return;
    }

    console.log(taskSolution);
});