QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  connection :projects, ProjectInterface.connection_type do
    argument :organization_id, types.ID

    resolve ProjectResolver.new -> (_, _, ctx) {
      ProjectPolicy::Scope.new(ctx[:current_user], Project).resolve
    }
  end

  connection :issues, IssueInterface.connection_type do
    argument :organization_id, types.ID

    resolve IssueResolver.new -> (_, _, ctx) {
      IssuePolicy::Scope.new(ctx[:current_user], Issue).resolve
    }
  end

  field :organizations, types[OrganizationInterface] do
    resolve OrganizationResolver.new -> (_, _, ctx) {
      OrganizationPolicy::Scope.new(ctx[:current_user], Organization).resolve
    }
  end

  field :currentUser, UserInterface do
    resolve -> (obj, args, ctx) {
      ctx[:current_user]
    }
  end
end
