class ApplicationService < BottledService
  att :context, GraphQL::Query::Context::FieldResolutionContext

  include Pundit
  include Deterministic::Prelude::Result
  include Wisper::Publisher

  protected

  def pundit_user
    context[:current_user]
  end
end
