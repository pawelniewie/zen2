class ApplicationSerializer < ActiveModel::Serializer
	include ActiveModelSerializers::SerializationContext::UrlHelpers
end
