CreateUserTokenSuccessInterface = GraphQL::ObjectType.define do
  name 'CreateUserTokenSuccess'

  field :user, !UserInterface
end

CreateUserTokenMutation = GraphQL::Relay::Mutation.define do
  name "CreateUserToken"

  input_field :email, !types.String
  input_field :password, !types.String

  return_field :errors, !types[FieldErrorInterface]
  return_field :success, CreateUserTokenSuccessInterface

  resolve -> (_, inputs, context) {
    email = inputs[:email]
    password = inputs[:password]

    result = CreateUserTokenService.(email: email, password: password, context: context)
    FormatMutationResultService.(result: result)
  }
end