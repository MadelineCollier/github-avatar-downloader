var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

const user = process.env.GITHUB_USER;
const token = process.env.GITHUB_ACCESS_TOKEN;

function getRepoContributors(repoOwner, repoName, callback) {
  var requestURL = 'https://' + user + ':' + token + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
