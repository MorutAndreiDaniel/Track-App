const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../DEMO_DATA.json");

const UserType = require("./TypeDefs/ProjectType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllProjects: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return projectData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLString },
        desc: { type: GraphQLString },
        amount: { type: GraphQLString },
      },
      resolve(parent, args) {
        projectData.push({
          id: projectData.length + 1,
          name: args.name,
          desc: args.desc,
          amount: args.amount,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
