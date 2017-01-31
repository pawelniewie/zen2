MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  description "The mutation root for this schema"

  field :createProject, field: CreateProjectMutation.field
  field :saveIssueTypes, field: SaveIssueTypesMutation.field
  field :saveStatuses, field: SaveStatusesMutation.field

  field :createIssue, field: CreateIssueMutation.field
  field :updateIssue, field: UpdateIssueMutation.field

  field :createComment, field: CreateCommentMutation.field
  field :updateComment, field: UpdateCommentMutation.field

end
