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
        Project.all
      else
        Project.public_visibility
      end
    end
  end
end
