class OrganizationPolicy < ApplicationPolicy
  def create?
    true
  end

  def show?
    user && record.users.include?(user)
  end

  class Scope < Scope
    def resolve
      if user
        user.organization
      else
        Organization.where('1 = 0')
      end
    end
  end
end