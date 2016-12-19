class CreateProjectService < BottledService

  att :project, Hash
  att :user, Hash

  include Deterministic::Prelude::Result

  def call
    result = try! do
      Organization.transaction do
        org = Organization.create!(@organization.slice('name', 'slug'))
        user = org.users.create!(@user.slice('email', 'password'))

        OpenStruct.new(
          user: user,
          organization: org,
          token: 'test')
      end
    end

    result = result.map_err { |exception| Failure(exception) }

    if block_given?
      yield(result)
    else
      result
    end
  end
end
