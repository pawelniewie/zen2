class VirtusService

  include Virtus.model

  include Pundit
  include Deterministic::Prelude::Result
  include Wisper::Publisher

  attribute :context, GraphQL::Query::Context::FieldResolutionContext

  def self.call(**args)
    result = new(args).call

    if block_given?
      yield(result)
    else
      result
    end
  end

  protected

  def pundit_user
    context[:current_user]
  end
  alias :current_user :pundit_user
end
