ENV['DATABASE_URL'] = ARGV[0]
require './config/environment.rb'
begin
  ActiveRecord::Base.establish_connection
  ActiveRecord::Base.connection
  exit 0 if ActiveRecord::Base.connected?
  exit 1 unless ActiveRecord::Base.connected?
rescue StandardError => e
  exit 1
end
