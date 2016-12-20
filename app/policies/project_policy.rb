class ProjectPolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.organization, :show?

    true
  end
end