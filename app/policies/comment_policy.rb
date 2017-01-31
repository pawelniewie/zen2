class CommentPolicy < ApplicationPolicy
  def create?
    Pundit.authorize user, record.issue, :show?

    true
  end

  def update?
    record.author.id == current_user.id
  end
end
