require 'rails_helper'

RSpec.describe Users::RegistrationsController do
	before { @request.env["devise.mapping"] = Devise.mappings[:user] }
	
	context 'successful registration' do
		let(:valid_params) do
			{
				user: {
					email: 'test@test.pl',
					first_name: 'Pawel',
					last_name: 'Smith',
					password: 'secret',
					organization_attributes: {
						slug: 'acme',
						name: 'Acme'
					}
				}
			}
		end
		
		before do
			post :create, params: valid_params, xhr: true, as: :json
		end
		
		it 'returns organization details' do
			expect(response).to have_http_status(:created)
			expect(json).to include(
				"first_name" => "Pawel",
				"last_name" => "Smith",
				"organization" => include(
					"slug" => "acme",
					"name" => "Acme",
					"url" => "http://acme.test.host"
				)
			)
			expect(json).to_not include("email")
		end
	end
end
