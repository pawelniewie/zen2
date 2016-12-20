class IssuePolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.project, :show?

    true
  end
end