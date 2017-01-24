class CreateCommentService < VirtusService

  attribute :comment, Hash
  attribute :issue, Issue

  def call
    try! do
      comment = Comment.new(@comment.slice('body').merge(issue_id: @issue.id, author_id: current_user.id))

      authorize comment, :create?

      comment.save!

      broadcast(:comment_created, comment)

      OpenStruct.new(issue: comment.issue)
    end
  end
end
