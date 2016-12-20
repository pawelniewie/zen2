class ProjectPolicy < ApplicationPolicy
  def create?
    false
  end
end