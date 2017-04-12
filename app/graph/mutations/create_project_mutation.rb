CreateProjectMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateProjectMutationSuccess'

  field :project, !ProjectInterface
end

CreateProjectMutation = GraphQL::Relay::Mutation.define do
  name "CreateProject"

  input_field :project, !ProjectInput

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateProjectMutationSuccessInterface

  resolve -> (_, inputs, context) {
    project = inputs[:project].to_h

    result = CreateProjectService.(project: project, organization: context[:current_organization], context: context)
    FormatMutationResultService.(result: result)
  }
end
