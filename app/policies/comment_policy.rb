class CommentPolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.issue, :show?

    true
  end
end
