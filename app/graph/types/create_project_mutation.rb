CreateProjectMutationSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateProjectMutationSuccess'

  field :project, !ProjectInterface
end

CreateProjectMutation = GraphQL::Relay::Mutation.define do
  name "CreateProject"

  input_field :project, ProjectInput

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateProjectMutationSuccessInterface

  resolve -> (_, inputs, _) {
    CreateProjectService.(project: inputs[:project].to_h, user: inputs[:user].to_h).match do
      Success() { |s| { success: s, errors: [] } }
      Failure() { |exception|
        model_name = exception.record.class.name.downcase

        errors = exception.record.errors.to_h.each_pair.map { |k, v|
          OpenStruct.new(field: "#{model_name}.#{k}", message: v)
        }

        { errors: errors }
      }
    end
  }
end