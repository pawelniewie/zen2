class CreateCommentService < VirtusService

  attribute :comment, Hash
  attribute :updated_comment, Hash

  def call
    try! do
      authorize comment, :update?

      comment.update!(@updated_comment.slice('body'))
      comment = comment.reload

      broadcast(:comment_updated, comment)

      OpenStruct.new(issue: comment.issue)
    end
  end
end
