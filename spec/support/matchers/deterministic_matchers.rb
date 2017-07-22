RSpec::Matchers.define :be_success do |expected|
	if expected.nil?
		match { |actual| actual.success? }
		failure_message { |actual| "Actual `#{actual}` isn't a success." }
		failure_message_when_negated { |actual| "Actual `#{actual}` is a success." }
	elsif expected.is_a?(Class)
		match do |actual|
			if actual.value.is_a?(Class)
				actual.success? && actual.value == expected
			else
				actual.success? && actual.value.is_a?(expected)
			end
		end
		failure_message do |actual|
			if actual.value.is_a?(Class)
				"The success value `#{actual.value}` isn't same class of `#{expected}`."
			else
				"The success value `#{actual.value}` isn't instance of `#{expected}`."
			end
		end
		failure_message_when_negated do |actual|
			if actual.value.is_a?(Class)
				"The success value `#{actual.value}` is same class of `#{expected}`."
			else
				"The success value `#{actual.value}` is instance of `#{expected}`."
			end
		end
	elsif expected.is_a?(Regexp)
		match { |actual| actual.success? && actual.value =~ expected }
		failure_message do |actual|
			"The success value `#{actual.value}` doesn't match regex `#{expected}`."
		end
		failure_message_when_negated do |actual|
			"The success value `#{actual.value}` matches regex `#{expected}`."
		end
	elsif expected.respond_to?(:==)
		match { |actual| actual.success? && actual.value == expected }
		failure_message do |actual|
			"The success value `#{actual.value}` isn't equal to `#{expected}`."
		end
		failure_message_when_negated do |actual|
			"The success value `#{actual.value}` is equal to `#{expected}`."
		end
	else
		fail "Cannot handle expected: `#{expected}`."
	end
end

RSpec::Matchers.define :be_failure do |expected|
	if expected.nil?
		match { |actual| actual.failure? }
		failure_message { |actual| "Actual `#{actual}` isn't a failure." }
		failure_message_when_negated { |actual| "Actual `#{actual}` is a failure." }
	elsif expected.is_a?(Class)
		match do |actual|
			if actual.value.is_a?(Class)
				actual.success? && actual.value == expected
			else
				actual.failure? && actual.value.is_a?(expected)
			end
		end
		failure_message do |actual|
			if actual.value.is_a?(Class)
				"The failure value `#{actual.value}` isn't same class of `#{expected}`."
			else
				"The failure value `#{actual.value}` isn't instance of `#{expected}`."
			end
		end
		failure_message_when_negated do |actual|
			if actual.value.is_a?(Class)
				"The failure value `#{actual.value}` is same class of `#{expected}`."
			else
				"The failure value `#{actual.value}` is instance of `#{expected}`."
			end
		end
	elsif expected.is_a?(Regexp)
		match { |actual| actual.failure? && actual.value =~ expected }
		failure_message do |actual|
			"The failure value `#{actual.value}` doesn't match regex `#{expected}`."
		end
		failure_message_when_negated do |actual|
			"The failure value `#{actual.value}` matches regex `#{expected}`."
		end
	elsif expected.respond_to?(:==)
		match { |actual| actual.failure? && actual.value == expected }
		failure_message do |actual|
			"The failure value `#{actual.value}` isn't equal to `#{expected}`."
		end
		failure_message_when_negated do |actual|
			"The failure value `#{actual.value}` is equal to `#{expected}`."
		end
	else
		fail "Cannot handle expected: `#{expected}`."
	end
end
