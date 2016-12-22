QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  connection :projects, ProjectInterface.connection_type do
    argument :organization_id, types.ID

    resolve ProjectResolver.new -> (obj, args, ctx) {
      ProjectPolicy::Scope.new(ctx[:current_user], Project).resolve
    }
  end

  field :organizations, types[OrganizationInterface] do
    resolve OrganizationResolver.new -> (obj, args, ctx) {
      OrganizationPolicy::Scope.new(ctx[:current_user], Organization).resolve
    }
  end
end
