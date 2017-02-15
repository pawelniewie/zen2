RSpec.describe ParseKey do
  it 'parses keys correctly' do
    expect(ParseKey.(nil)).to be_nil
    expect(ParseKey.("-1123")).to be_nil
    expect(ParseKey.("1123-")).to be_nil
    expect(ParseKey.("ABC-123")).to contain_exactly "ABC", 123
  end
end
