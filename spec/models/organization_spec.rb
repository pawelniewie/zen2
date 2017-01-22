# == Schema Information
#
# Table name: organizations
#
#  id         :uuid             not null, primary key
#  name       :string
#  slug       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_organizations_on_slug  (slug) UNIQUE
#

RSpec.describe Organization do
  it "should reject restricted slug name" do
    org = Organization.new(name: 'Test', slug: 'zen')

    expect(org).to_not be_valid
    expect(org.errors.keys).to contain_exactly :slug
  end

  it "should accept slug name" do
    org = Organization.new(name: 'Test', slug: 'another')
    expect(org).to be_valid
  end
end
