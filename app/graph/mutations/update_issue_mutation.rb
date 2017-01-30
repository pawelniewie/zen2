UpdateIssueMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'UpdateIssueMutationSuccess'

  field :issue, !IssueInterface
end

UpdateIssueFieldInput = GraphQL::InputObjectType.define do
  name 'UpdateIssueFieldInput'

  argument :field_id, !types.ID
  argument :serialized_value, types.String
end

UpdateIssueMutation = GraphQL::Relay::Mutation.define do
  name "UpdateIssue"

  input_field :issue_id, !types.ID
  input_field :fields, types[UpdateIssueFieldInput]

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, UpdateIssueMutationSuccessInterface

  resolve -> (_, inputs, context) {
    issue = context[:current_organization].issues.find_by_id(inputs[:issue_id])

    result = UpdateIssueService.(issue: issue, fields: inputs[:fields], context: context)
    FormatMutationResultService.(result: result)
  }
end
