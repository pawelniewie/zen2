CreateIssueMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateIssueMutationSuccess'

  field :issue, !IssueInterface
end

CreateIssueMutation = GraphQL::Relay::Mutation.define do
  name "CreateIssue"

  input_field :issue, !IssueInput
  input_field :projectId, types.ID

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateIssueMutationSuccessInterface

  resolve -> (_, inputs, context) {
    project = Project.find_by_id(inputs[:projectId])
    issue = inputs[:issue].to_h

    result = CreateIssueService.(issue: issue, project: project, context: context)
    FormatMutationResultService.(result: result)
  }
end