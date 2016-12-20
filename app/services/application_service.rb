class ApplicationService < BottledService
  att :context, Hash

  include Pundit
  include Deterministic::Prelude::Result

  protected

  def pundit_user
    context.is_a?(Hash) && context['current_user']
  end
end
