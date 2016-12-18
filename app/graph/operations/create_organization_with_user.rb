class CreateOrganizationWithUser < GraphQL::Rails::Operations

  mutation create_organization_with_user: {user: UserInterface, token: String} do
    description 'Creates organization with first user'

    argument :organization, OrganizationInterface
    argument :user, UserInterface

    resolve do
      {
        user: User.first,
        token: "token"
      }
    end
  end

end