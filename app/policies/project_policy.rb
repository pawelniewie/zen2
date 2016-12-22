class ProjectPolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.organization, :show?

    true
  end

  class Scope < Scope
    def resolve
      if user
        Project.where(organization_id: user.organization.id)
      else
        Project.where("1 = 0")
      end
    end
  end
end