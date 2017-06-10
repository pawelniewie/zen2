class FormatMutationResultService < BottledService
  include Deterministic

  att :result, Result

  def call
    @result.match do
      Success() { |s| { success: s, errors: [] } }
      Failure() { |exception|
        case exception
          when Pundit::NotAuthorizedError
            authorization_error(exception)
          when ActiveRecord::RecordInvalid
            validation_error(exception)
          else
            unknown_error(exception)
        end
      }
    end.tap do |result|
      Rails.logger.debug(result)
    end
  end

  protected

  def new_struct(**args)
    OpenStruct.new(**args)
  end

  def unknown_error(e)
    { errors: [new_struct(message: e.to_s)] }
  end

  def authorization_error(e)
    model_name = e.record.class.name.downcase

    {
      errors: [
        new_struct(field: model_name,
          message: "You don't have permission to #{e.query} on #{model_name.capitalize}")
      ]
    }
  end

  def validation_error(e)
    model_name = e.record.class.name.downcase

    errors = e.record.errors.to_h.each_pair.map { |k, v|
      new_struct(field: "#{model_name}.#{k}", message: v)
    }

    { errors: errors }
  end
end
