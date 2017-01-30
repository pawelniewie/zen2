module Audited
  module Adapters
    module ActiveRecord
      class AuditedJsonSerializer
        def self.load(value)
          value.as_json
        end

        def self.dump(value)
          JSON.dump(value)
        end
      end

      Audit.class_eval do
        serialize :audited_changes, AuditedJsonSerializer
      end
    end
  end
end
