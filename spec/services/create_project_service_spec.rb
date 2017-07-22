require 'rails_helper'

RSpec.describe CreateProjectService do
	let(:user) { users(:joe) }
	let(:context) { GraphQL::Query::Context::FieldResolutionContext.new(context: {current_user: user}, path: '/', selection: nil, field: nil, parent_type: nil) }
	let(:organization) { organizations(:atlas) }
	let(:project) do
		{
			'name' => 'Another',
			'key' => 'ANO'
		}
	end
	
	it 'creates default statuses and issue types' do
		result = described_class.(project: project, organization: organization, context: context)
		expect(result).to be_success
		result.match do
			Success() do |success|
				expect(success.project.statuses.size).to eq(3)
				expect(success.project.issue_types.size).to eq(3)
			end
			Failure() {}
		end
	end
end
