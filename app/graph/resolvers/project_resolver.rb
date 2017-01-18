class ProjectResolver < GraphQL::Rails::Resolver
  resolve :key
  resolve :id

  def model
    Project
  end
end
