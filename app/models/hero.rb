class Hero < ActiveRecord::Base
  validates_presence_of :name, :matchups, :role_id, :overall_win
  validates :name, uniqueness: true
  serialize :matchups, Hash

  belongs_to :role
end
