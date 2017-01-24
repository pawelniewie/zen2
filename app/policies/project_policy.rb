class ProjectPolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.organization, :show?

    true
  end

  def edit?
    create?
  end

  class Scope < Scope
    def resolve
      if user
        Project.where(organization_id: user.organization.id)
      else
        Project.none
      end
    end
  end
end
