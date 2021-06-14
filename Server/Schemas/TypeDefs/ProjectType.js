const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    desc: { type: GraphQLString },
    amount: { type: GraphQLString },
  }),
});

module.exports = ProjectType;
