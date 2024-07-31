const express = require("express");
require("dotenv").config();

const app = express();
const githubData = {
  login: "p369m",
  id: 125090780,
  node_id: "U_kgDOB3S73A",
  avatar_url: "https://avatars.githubusercontent.com/u/125090780?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/p369m",
  html_url: "https://github.com/p369m",
  followers_url: "https://api.github.com/users/p369m/followers",
  following_url: "https://api.github.com/users/p369m/following{/other_user}",
  gists_url: "https://api.github.com/users/p369m/gists{/gist_id}",
  starred_url: "https://api.github.com/users/p369m/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/p369m/subscriptions",
  organizations_url: "https://api.github.com/users/p369m/orgs",
  repos_url: "https://api.github.com/users/p369m/repos",
  events_url: "https://api.github.com/users/p369m/events{/privacy}",
  received_events_url: "https://api.github.com/users/p369m/received_events",
  type: "User",
  site_admin: false,
  name: "PARTHA MANDAL",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 16,
  public_gists: 0,
  followers: 2,
  following: 3,
  created_at: "2023-02-10T20:44:55Z",
  updated_at: "2024-07-11T13:22:38Z",
};

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/test", (req, res) => {
  res.send("TEst Succesfull");
});
app.get("/git", (req, res) => res.json(githubData));
app.listen(process.env.PORT, () => {
  console.log("Server listening on port", process.env.PORT);
});
