class Users::UserSerializer < UserSerializer
	has_one :organization
end
