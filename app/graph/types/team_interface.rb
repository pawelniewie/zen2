TeamInterface = GraphQL::ObjectType.define do
  name "Team"
  description "Represents a team"

  field :id, !types.ID
  field :name, !types.String
  
  connection :members, UserInterface.connection_type
end
