QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :allProjects, types[ProjectInterface] do
    resolve -> (_, args, _) {
      Project.all
    }
  end

  field :organizations, types[OrganizationInterface] do
    resolve OrganizationResolver.new -> (obj, args, ctx) {
      OrganizationPolicy::Scope.new(ctx[:current_user], Organization).resolve
    }
  end
end
