
//requiring modules:
var request = require('request');
var fs = require('fs');

//welcome message:
console.log('Welcome to the GitHub Avatar Downloader!');


//OG function:
function getRepoContributors(repoOwner, repoName, callback) {
  var requestURL = 'https://' + process.env.GITHUB_USER + ':' + process.env.GITHUB_ACCESS_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  var requestOption = {
    headers: {
      'User-Agent': "GitHub Avatar Downloader - Student Project"
    }
  }
  request.get(requestURL, requestOption, function(error, response, body) {
        var data = JSON.parse(body);
        callback(data);
  });

}

//defining the function which is passed into findAvatar:
function downloadImageByURL(url, filePath) {
  request.get(url)
         .pipe(fs.createWriteStream(filePath));
}

//defining the callback function that is passed to getRepoContributors:
function findAvatar(someJSONthing) {
  someJSONthing.forEach(function(contributor) {
    downloadImageByURL(contributor["avatar_url"], ('avatars/' + contributor["login"] + '.jpg'));
  });
};


//calling the function on the "jquery" repo:
getRepoContributors("jquery", "jquery", findAvatar);
