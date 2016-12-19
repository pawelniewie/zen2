UserInput = GraphQL::InputObjectType.define do
  name "UserInput"
  description "Represents user input"

  argument :email, !types.String
  argument :password, !types.String
end