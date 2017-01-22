OrderDirectionSelector = GraphQL::EnumType.define do
  name 'OrderDirection'

  value "asc"
  value "desc"
end

OrderSelector = GraphQL::InputObjectType.define do
  name "OrderSelector"

  argument :key, !types.String
  argument :direction, OrderDirectionSelector
end
