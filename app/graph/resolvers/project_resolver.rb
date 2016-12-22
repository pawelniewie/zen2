class ProjectResolver < GraphQL::Rails::Resolver
  resolve :organization_id

  def model
    Project
  end
end