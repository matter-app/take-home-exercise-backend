import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import { models } from "./db";

const PORT = 4001;

const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    isCompleted: Boolean!
    children: [Task]!
  }

  type Query {
    tasks: [Task]!
    task(id: ID!): Task!
  }

  type Mutation {
    # create a task with the given params
    createTask(title: String!, isCompleted: Boolean): Task!

    # update the title of the task with the given id
    updateTask(id: ID!, title: String!): Task!

    # update task.isCompleted as given
    toggleTask(id: ID!, isCompleted: Boolean!): Task!

    # delete this task
    removeTask(id: ID!): Boolean

    # every children in childrenIds gets their parent set as parentId
    addChildrenToTask(parentId: ID!, childrenIds: [ID!]!): Task!

    # the task with id: childId gets the task with id: parentId as its new parent
    setParentOfTask(parentId: ID!, childId: ID!): Task!

    # the task with the given id becomes a root level task
    removeParentFromTask(id: ID!): Task!
  }
`;

/**
 * TODO: Your task is implementing the resolvers. Go through the readme first.
 * TODO: Your resolvers will need to implement the typedefs given above.
 */

const resolvers = {
  Query: {},
  Task: {},
  Mutation: {}
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server ready at: http://localhost:${PORT}${server.graphqlPath}`);
});
