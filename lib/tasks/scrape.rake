require "./lib/hots_scraper.rb"
namespace :scrape do
  desc "Run scraper"
  task :scrape => :environment do
    heroes_array = ["Abathur", "Anub\'arak", "Arthas", "Azmodan", "Brightwing", "Chen", "Diablo", "E.T.C.", "Falstad", "Gazlowe", "Illidan", "Jaina", "Johanna", "Kael\'thas", "Kerrigan", "Kharazim", "Leoric", "Li Li", "Malfurion", "Muradin", "Murky", "Nazeebo", "Nova", "Raynor", "Rehgar", "Rexxar", "Sgt. Hammer", "Sonya", "Stitches", "Sylvanas", "Tassadar", "The Butcher", "The Lost Vikings", "Thrall", "Tychus", "Tyrande", "Tyrael", "Uther", "Valla", "Zagara", "Zeratul" ]
    scraper = HotsScraper.new

    heroes_array.each do |hero|
      hero_data = scraper.go_scraper_go(hero)
      if Hero.find_by_name(hero)
        new_hero = Hero.find_by_name(hero)
        options = {:role_id => new_hero.role_id, :overall_win => hero_data[:overall_win],
                      :matchups => hero_data[:matchups], :pick_count => hero_data[:pick_count]}
        new_hero.update_attributes(options)
      else
        new_hero = Hero.new(name: hero, role_id: 4)
        new_hero.overall_win = hero_data[:overall_win] if hero_data[:overall_win]
        new_hero.matchups = hero_data[:matchups] if hero_data[:matchups]
        new_hero.pick_count = hero_data[:pick_count] if hero_data[:pick_count]
        new_hero.save
      end
    end
  end
end
