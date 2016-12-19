class CreateOrganizationWithUserService < BottledService

  att :organization, Hash
  att :user, Hash

  include Deterministic::Prelude::Result

  def call
    Organization.transaction do
      result = try! do
        org = Organization.create!(@organization.slice('name', 'slug'))
        user = org.users.create!(@user.slice('email', 'password'))

        {
          user: user,
          organization: org,
          token: 'test'
        }
      end

      result = result.map_err { |exception| Failure(exception.record.errors.to_h) }

      if block_given?
        yield(result)
      else
        result
      end
    end
  end
end
