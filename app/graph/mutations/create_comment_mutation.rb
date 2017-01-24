CreateCommentMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateCommentMutationSuccess'

  field :issue, !IssueInterface
end

CreateCommentMutation = GraphQL::Relay::Mutation.define do
  name "CreateComment"

  input_field :comment, !CommentInput

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateCommentMutationSuccessInterface

  resolve -> (_, inputs, context) {
    issue = context[:current_organization].issues.find_by_id(inputs[:comment][:issue_id])
    comment = inputs[:comment].to_h

    result = CreateCommentService.(issue: issue, comment: comment, context: context)
    FormatMutationResultService.(result: result)
  }
end
