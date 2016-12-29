class UserPolicy < ApplicationPolicy
  def index?
    user.present?
  end

  class Scope < Scope
    def resolve
      if user
        User.where(organization_id: user.organization.id)
      else
        User.where("1 = 0")
      end
    end
  end
end