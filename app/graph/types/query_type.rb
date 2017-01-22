QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"


  field :project, ProjectInterface do
    argument :key, types.String
    argument :id, types.ID

    resolve ProjectResolver.new -> (_, _, ctx) {
      ProjectPolicy::Scope.new(ctx[:current_user], Project).resolve
    }
  end

  connection :projects, ProjectInterface.connection_type do
    resolve ProjectResolver.new -> (_, _, ctx) {
      ProjectPolicy::Scope.new(ctx[:current_user], Project).resolve
    }
  end

  connection :issues, IssueInterface.connection_type do
    argument :project, ProjectSelector
    argument :order_by, types[OrderSelector]

    resolve IssueResolver.new -> (_, _, ctx) {
      IssuePolicy::Scope.new(ctx[:current_user], Issue).resolve
    }
  end

  connection :users, UserInterface.connection_type do
    argument :username, UsernameSelector

    resolve UserResolver.new -> (_, _, ctx) {
      UserPolicy::Scope.new(ctx[:current_user], User).resolve
    }
  end

  field :currentUser, UserInterface do
    resolve -> (obj, args, ctx) {
      ctx[:current_user]
    }
  end
end
