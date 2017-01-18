OrderSelector = GraphQL::InputObjectType.define do
  name "OrderSelector"

  argument :asc, types[types.String]
  argument :desc, types[types.String]
end
