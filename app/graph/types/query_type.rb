QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :allProjects, types[ProjectInterface] do
    resolve -> (_, args, _) {
      Project.all
    }
  end
end
