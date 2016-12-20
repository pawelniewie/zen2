module Devise
  module Strategies
    class JsonWebToken < Base
      def valid?
        request.headers['Authorization'].present?
      end

      def authenticate!
        received_claims = claims

        return fail! unless received_claims
        return fail! unless received_claims.has_key?('user_id')

        success! User.find_by_id received_claims['user_id']
      end

      protected ######################## PROTECTED #############################

      def claims
        strategy, token = request.headers['Authorization'].split(' ')

        return nil if (strategy || '').downcase != 'bearer'

        JWTWrapper.decode(token) rescue nil
      end
    end
  end
end