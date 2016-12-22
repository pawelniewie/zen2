class IssueResolver < GraphQL::Rails::Resolver
  resolve :organization_id

  def model
    Issue
  end
end