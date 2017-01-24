IssueInterface = GraphQL::ObjectType.define do
  name "Issue"
  description "Represents issue"

  field :id, !types.ID
  field :key, !types.String
  field :no, !types.Int
  field :summary, !types.String
  field :description, types.String
  field :assignee, UserInterface
  field :reporter, UserInterface
  field :transitions, !types[IssueTransitionInterface] do
    resolve -> (obj, args, ctx) {
      obj.project.statuses
    }
  end
  connection :comments, CommentInterface.connection_type
end
