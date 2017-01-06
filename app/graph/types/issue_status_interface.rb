IssueStatusCategoryEnum = GraphQL::EnumType.define do
  name "IssueStatusCategory"

  StatusCategory.all.each do |category|
    send(:value, category)
  end
end

IssueStatusInterface = GraphQL::ObjectType.define do
  name "IssueStatus"
  description "Represents issue status"

  field :id, !types.ID
  field :name, !types.String
  field :position, !types.Int
  field :category, !IssueStatusCategoryEnum
  field :created_at, types.String
  field :updated_at, types.String
end