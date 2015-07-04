class Role < ActiveRecord::Base
  validates :role, presence: true

  has_many :heros
end
