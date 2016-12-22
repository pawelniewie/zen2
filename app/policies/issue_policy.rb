class IssuePolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.project, :show?

    true
  end

  class Scope < Scope
    def resolve
      if user
        Issue.where(organization_id: user.organization.id)
      else
        Issue.where("1 = 0")
      end
    end
  end
end