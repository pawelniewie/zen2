class TeamPolicy < ApplicationPolicy
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
        Team.all
      else
        Team.none
      end
    end
  end
end
