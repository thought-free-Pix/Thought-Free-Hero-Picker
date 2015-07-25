# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Role.create!(role: "dps")
Role.create!(role: "tank")
Role.create!(role: "support")
Role.create!(role: "none")

roles_hash = {
  "Abathur" => 3,
}

roles_hash.each do |hero_name, role|
  Hero.find_by_name(hero_name).update_attribute(:role_id, role)
end
