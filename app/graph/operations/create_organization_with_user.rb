class CreateOrganizationWithUser < GraphQL::Rails::Operations

  mutation create_organization_with_user: {token: String, user: GraphQL::Rails::Types.resolve(UserInterface)} do
    description 'Creates organization with first user'

    argument :organization, OrganizationInput, :required
    argument :user, UserInput, :required

    resolve do
      {
        user: User.first,
        token: "token"
      }
    end
  end

end