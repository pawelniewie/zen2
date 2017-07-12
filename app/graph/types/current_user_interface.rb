CurrentUserInterface = GraphQL::ObjectType.define do
  name "CurrentUser"
  description "Represents logged in user or anonymous"

  field :user, UserInterface, hash_key: :user
  
  field :anonymous, !types.Boolean, hash_key: :anonymous
end
