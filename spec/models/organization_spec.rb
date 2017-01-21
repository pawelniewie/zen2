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
