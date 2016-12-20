class CreateUserTokenService < ApplicationService

  att :email, String
  att :password, String

  def call
    result = try! do
      user = User.find_by_email(@email)

      raise 'No such user' unless user

      raise 'Wrong password' unless user.valid_password?(password)

      OpenStruct.new(user: user)
    end

    if block_given?
      yield(result)
    else
      result
    end
  end
end
