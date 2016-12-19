MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  description "The mutation root for this schema"

  field :createOrganizationWithUser, field: CreateOrganizationWithUserMutation.field
end
