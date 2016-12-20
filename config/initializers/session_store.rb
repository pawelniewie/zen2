# Be sure to restart your server when you modify this file.

ActiveRecord::SessionStore::Session.serializer = :json

Rails.application.config.session_store :active_record_store, :key => '_zen_session'
