class ProjectOperation < GraphQL::Rails::Operations
  query all_projects: [::ProjectInterface] do
    description 'This query returns all projects'
    resolve do
      Project.all
    end
  end
end