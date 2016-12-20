class OrganizationPolicy < ApplicationPolicy
  def create?
    true
  end

  def show?
    user && record.users.include?(user)
  end
end