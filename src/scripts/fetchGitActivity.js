var axios = require('axios')
var fs = require('fs')

console.log(process.env.GRAPHQL_TOKEN)
const githubUrl = 'https://api.github.com/graphql';

const token = process.env.GRAPHQL_TOKEN;

const oauth = {Authorization: 'bearer ' + token}

const query = `{
    user(login: "acolytec3") {
      bio
      avatarUrl
      repositoriesContributedTo(first: 2, orderBy: {field: UPDATED_AT, direction: DESC}) {
        nodes {
          name
          description
          url
        }
      }
      contributionsCollection {
        pullRequestContributionsByRepository {
          contributions(first: 100) {
            nodes {
              pullRequest {
                title
                body
              }
            }
          }
          repository {
            name
            url
            description
          }
        }
      }
      repositories(first: 100, privacy: PUBLIC) {
        nodes {
          name
          url
          isFork
          stargazers {
            totalCount
          }
          owner {
            login
          }
          forks {
            totalCount
          }
          homepageUrl
          description
          repositoryTopics(first: 100) {
            nodes {
              topic {
                name
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }`;

  axios.post(githubUrl, {query: query}, {headers: oauth})
  .then(function (response) {
    fs.writeFileSync('./src/pages/gitActivity.json',JSON.stringify(response.data, null, 4))
  })
  .catch(function (error) {
    // On error, print the error
    console.log(error);
  });