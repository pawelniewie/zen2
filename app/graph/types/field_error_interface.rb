FieldErrorInterface = GraphQL::ObjectType.define do
  name "Errors"
  description "Represents errors"

  field :field, types.String
  field :message, !types.String
end