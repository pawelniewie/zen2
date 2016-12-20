CreateProjectMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateProjectMutationSuccess'

  field :project, !ProjectInterface
end

CreateProjectMutation = GraphQL::Relay::Mutation.define do
  name "CreateProject"

  input_field :project, !ProjectInput
  input_field :organizationId, !types.String

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateProjectMutationSuccessInterface

  resolve -> (_, inputs, context) {
    organization = Organization.find_by_id(inputs[:organizationId]) || context[:current_organization]
    project = inputs[:project].to_h

    result = CreateProjectService.(project: project, organization: organization, context: context)
    FormatMutationResultService.(result: result)
  }
end