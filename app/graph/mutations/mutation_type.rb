MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  description "The mutation root for this schema"

  field :createProject, field: CreateProjectMutation.field
  field :createIssue, field: CreateIssueMutation.field
end
