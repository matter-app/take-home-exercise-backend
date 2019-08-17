# Matter Backend Engineer Take-Home Exercise

🎉 Welcome to the Matter take-home coding exercise! 🎉

This backend exercise is designed to take about 3 hours for someone familiar with `Node.js` and `Express`. Additionally, `GraphQL` will be a major part of this exercise. We do not expect you to know anything about `GraphQL` prior to taking this challenge. However, we do care about your drive to learn new things and improve your skills.

There are many different ways to complete this exercise. We wanted to keep it open ended and give you some creative freedom. As such, even though you don't need to, you may install and use any extra npm package.

## Getting Set Up

- The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.
- In the repo root directory, run `npm install` to gather all dependencies.
- Next, run `npm run migrate`. This will create a local SQLite database. This database will live in a local file named `database.sqlite3`.
- Then run `npm run watch`. This should start the server in development mode.

## Before Starting

- ❗️ **Make sure you commit all changes to the master branch!**
- Do not worry about performance.
- If you've never heard of `GraphQL`, don't worry! Since you've passed our phone screening, we fully believe that you'll be able to learn it in no time! You don't need to go deep and learn everything about `GraphQL`. Do this [tutorial](https://www.freecodecamp.org/news/learn-to-build-a-graphql-server-with-minimal-effort-fc7fcabe8ebd/) and you'll have learned all the basic skills necessary to complete this exercise.

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/), which will automatically restart for you when you modify and save a file.
- The database provider is [SQLite](https://www.sqlite.org/), which will store data in a local file called `database.sqlite3`.
- The database client is [Sequelize](https://sequelize.org/). For any database operation, you should only have to interact with `Sequelize`.
- You will be implementing a [GraphQL](https://graphql.org/) server. We have set up [Apollo Express Server](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express) for you.
- Once you start your

## Exercise

- You will be building a simple support ticket tracker. In this exercise, a `ticket` is defined as a task that has a `title`. The ticket is either `completed` or `incomplete` at any given time. It has a recursive structure, meaning that it may have `children` tickets. Those children tickets may further have children tickets of their own, and so on. For example:

```json
{
  "title": "first ticket",
  "isCompleted": false,
  "children": [
    {
      "title": "second ticket",
      "isCompleted": true,
      "children": []
    },
    {
      "title": "third ticket",
      "isCompleted": false,
      "children": [
        {
          "title": "fourth ticket",
          "isCompleted": true,
          "children": [///...]
        }
      ]
    }
  ]
}
```

- Your task is building the backend `GraphQL` api to maintain this system. You will be coding the `graphql` resolvers that successfully conform to the `typedefs` we have provided.
- We also created the `Ticket` database model you'll need to use. Even though it is not necessary, you may modify this model as you wish. In `server.js`, you'll see one example usage of said model.

## Submitting the Assignment

When you have finished the assignment, run the following command:

```sh
git bundle create take-home-exercise.bundle HEAD master
```

This generates a bundle file called `take-home-exercise` based on your local master branch. Upload that file using the link provided in the e-mail you received, and we'll review your code within 1-2 days.

Thank you and good luck! 🙏
