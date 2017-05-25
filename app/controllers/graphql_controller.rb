class GraphqlController < PunditController

  # Defined in order of increasing specificity.
  rescue_from Exception, :with => :internal_error
  rescue_from GraphQL::ParseError, :with => :invalid_query
  rescue_from JSON::ParserError, :with => :invalid_variables
  rescue_from Pundit::AuthorizationNotPerformedError, :with => :authorization_missing
  rescue_from Pundit::NotAuthorizedError, :with => :permission_denied

  # Execute a GraphQL query against the current schema.
  def execute
    authorize :graphql, :execute?

    # Check if basic auth headers were sent, if they were try to authenticate
    authenticate_with_http_basic do |username, password|
      resource = User.find_by_email(username)
      if resource.valid_password?(password)
        sign_in :user, resource, store: false
      else
        request_http_basic_authentication(Devise.http_authentication_realm)
        return
      end
    end
    
    query = GraphQL::Query.new(ZenSchema, params[:query],
        variables: to_hash(params[:variables]),
        context: context)
    
    render json: query.result
  end

  private

  def context
    @context ||= {
      request: request,
      current_user: current_user,
      current_organization: current_tenant,
    }
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

  def permission_denied
    render_error 403, "Permission denied"
  end

  def invalid_query
    invalid_request 'Unable to parse query'
  end

  def authorization_missing
    invalid_request 'Pundit authorization was not called'
  end

  def invalid_variables
    invalid_request 'Unable to parse variables'
  end

  def internal_error(e)
    Rails.logger.error 'Unexpected exception during execution'
    Rails.logger.error "#{e.class.name} (#{e.message}):"
    Rails.logger.error "  #{e.backtrace.join("\n  ")}"
    render_error 500, "Internal error: #{e.message}"
  end
end
