class Hero < ActiveRecord::Base
  serialize :matchups, Hash

  belongs_to :role
end
