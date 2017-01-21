SaveIssueTypesMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'SaveIssueTypesMutationSuccess'

  field :issue_type, !IssueTypeInterface
end

SaveIssueTypesMutation = GraphQL::Relay::Mutation.define do
  name "SaveIssueTypes"

  input_field :issue_type, !IssueTypeInput
  input_field :project_id, types.ID

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, SaveIssueTypesMutationSuccessInterface

  resolve -> (_, inputs, context) {
    project = Project.find_by_id(inputs[:projectId])
    issue_type = inputs[:issue_type].to_h

    result = CreateIssueService.(issue: issue_type, project: project, context: context)
    FormatMutationResultService.(result: result)
  }
end
