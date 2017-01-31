UpdateCommentMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'UpdateCommentMutationSuccess'

  field :issue, !IssueInterface
end

UpdateCommentMutation = GraphQL::Relay::Mutation.define do
  name "UpdateComment"

  input_field :comment, !CommentInput

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, UpdateCommentMutationSuccessInterface

  resolve -> (_, inputs, context) {
    comment = context[:current_organization].comments.find_by_id(inputs[:comment][:id])
    updated_comment = inputs[:comment].to_h

    result = UpdateCommentService.(comment: comment, updated_comment: updated_comment, context: context)
    FormatMutationResultService.(result: result)
  }
end
