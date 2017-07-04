var request = require('request');

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

// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });

getRepoContributors("jquery", "jquery", findAvatar);

function findAvatar(someJSONthing) {
  someJSONthing.forEach(function(contributor) {
    console.log(contributor["avatar_url"]);
  });
};

// function getOptions(path) {
//   return options = {
//     url: 'https://api.github.com' + path,
//     headers: {
//       'User-Agent': 'kittenfingers'
//     },
//     qs: {
//       access_token: process.env.GITHUB_ACCESS_TOKEN
//     }
//   };
// }


// request.get('https://sytantris.github.io/http-examples/future.jpg')
//        .on('error', function (err) {
//          throw err;
//        })
//        .on('response', function (response) {
//           console.log('Response Status Code: ', response.statusCode, ' Response Status Message: ', response.statusMessage, ' Content type: ', response.headers['content-type']);
//           console.log('Downloading image...');
//        })
//        .pipe(fs.createWriteStream('./future.jpg'))
//        .on('finish', function () {
//           console.log('Download complete.');
//        });
