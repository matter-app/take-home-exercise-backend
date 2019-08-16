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
    createTask(title: String!, isCompleted: Boolean): Task!
    updateTask(id: ID!, title: String!): Task!
    toggleTask(id: ID!, isCompleted: Boolean!): Task!
    removeTask(id: ID!): Boolean
    addChildren(parentId: ID!, childrenIds: [ID!]!): Task!
    setParent(parentId: ID!, childId: ID!): Task!
  }
`;

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
