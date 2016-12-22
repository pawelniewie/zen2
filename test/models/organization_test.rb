require 'test_helper'

class OrganizationTest < ActiveSupport::TestCase
  test "should reject restricted slug name" do
    org = Organization.new(name: 'Test', slug: 'zen')
    assert_not org.valid?
    assert_equal [:slug], org.errors.keys
  end

  test "should accept slug name" do
    org = Organization.new(name: 'Test', slug: 'another')
    assert org.valid?
  end
end
