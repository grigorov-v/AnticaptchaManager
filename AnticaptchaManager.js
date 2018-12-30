module.exports.SolveTheGoogleCaptcha = function(websiteURL, websiteKey, callback){
    SolveTheGoogleCaptcha(websiteURL, websiteKey, callback);
};

//Решить капчу
function SolveTheGoogleCaptcha(websiteURL, websiteKey, callback) {
   //callback(error, taskSolution)

    var anticaptcha = require(__dirname + '/anticaptcha')('91f334088916c86726b41e0ef766713a');

//recaptcha key from target website
    anticaptcha.setWebsiteURL(websiteURL);
    anticaptcha.setWebsiteKey(websiteKey);

//browser header parameters
    anticaptcha.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116");
    anticaptcha.setCookies("anticaptcha=cool; cookies=set");

//proxy access parameters
    anticaptcha.setProxyType("HTTP");
    anticaptcha.setProxyAddress("46.167.243.241");
    anticaptcha.setProxyPort(40846);
// anticaptcha.setProxyLogin("pp-gildyeri");
// anticaptcha.setProxyPassword("goadlemi");

// check balance first
    anticaptcha.getBalance(function (err, balance) {
        if (err) {
            callback(err, '');
            return;
        }

        if (balance > 0)
        {
            anticaptcha.createTask(function (err, taskId) {
                if (err) {
                    callback(err, '');
                    return;
                }

                console.log("taskId ==" + taskId);

                anticaptcha.getTaskSolution(taskId, function (err, taskSolution) {
                    if (err) {
                        callback(err, '');
                        return;
                    }

                    callback(err, taskSolution);
                });
            });
        }
        else {
            callback(err, 'Баланс == 0');
        }
    });
}