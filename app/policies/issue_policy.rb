class IssuePolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.project, :show?

    true
  end

  def show?
    create?
  end

  def update?
    create?
  end

  class Scope < Scope
    def resolve
      if user
        Issue.where(organization_id: user.organization.id)
      else
        Issue.none
      end
    end
  end
end
