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
        Issue.all
      else
        Issue.joins(:project).where(projects: {visibility: :public})
      end
    end
  end
end
