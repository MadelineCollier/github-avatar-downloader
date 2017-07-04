var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');


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

function findAvatar(someJSONthing) {
  someJSONthing.forEach(function(contributor) {
    console.log(contributor["avatar_url"]);
  });
};

getRepoContributors("jquery", "jquery", findAvatar);

function downloadImageByURL(url, filePath) {
  request.get(url)
         .pipe(fs.createWriteStream(filePath));
}
downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")

