RSpec.describe SaveIssueTypesService do
  let(:project) { projects(:test) }

  let(:user) { users(:admin) }

  let(:context) { GraphQL::Query::Context::FieldResolutionContext.new(
    context: { current_user: user }, path: nil, selection: nil, field: nil, parent_type: nil) }

  let(:issue_types) { [
    { name: 'Bug', color: 'blue' },
    { name: 'Epic', color: 'red' },
  ] }

  subject { SaveIssueTypesService.call(issue_types: issue_types, project: project, context: context) }

  it 'creates issue types' do
    expect(subject.success?).to be_truthy

    issue_types = subject.s.issue_types

    expect(issue_types).to be_a Array
    expect(issue_types.count).to eq 2
    expect(issue_types[0].id).to be_truthy
    expect(issue_types[0].name).to eq 'Bug'
    expect(issue_types[0].position).to eq 0

    expect(issue_types[1].id).to be_truthy
    expect(issue_types[1].name).to eq 'Epic'
    expect(issue_types[1].position).to eq 1
  end
end
