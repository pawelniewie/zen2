class SchemaController < ActionController::Base

  # Defined in order of increasing specificity.
  rescue_from Exception, :with => :internal_error
  rescue_from GraphQL::ParseError, :with => :invalid_query
  rescue_from JSON::ParserError, :with => :invalid_variables

  # Execute a GraphQL query against the current schema.
  def execute
    query = GraphQL::Query.new(ZenSchema, params[:query], variables: to_hash(params[:variables]), context: context)

    render json: query.result
  end

  private

  def context
    @context ||= {}
  end

  def to_hash(param)
    if param.blank?
      {}
    elsif param.is_a?(String)
      JSON.parse(param)
    else
      param
    end
  end

  def render_error(status, message)
    render json: {
      :errors => [{ :message => message }],
    }, :status => status
  end

  def invalid_request(message)
    render_error 400, message
  end

  def invalid_query
    invalid_request 'Unable to parse query'
  end

  def invalid_variables
    invalid_request 'Unable to parse variables'
  end

  def internal_error(e)
    Rails.logger.error 'Unexpected exception during execution'
    Rails.logger.error "#{e.class.name} (#{e.message}):"
    Rails.logger.error "  #{e.backtrace.join("\n  ")}"
    render_error 500, 'Internal error'
  end
end
