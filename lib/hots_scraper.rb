class HotsScraper
  require 'nokogiri'
  require 'open-uri'

  def go_scraper_go hero
    puts "~~~~~~~~~~~"
    puts hero.upcase
    puts "~~~~~~~~~~~"
    my_data = {}
    matchups = {}
    hero_uri = hero.gsub(/\s+/, "%20")
    doc = Nokogiri::HTML(open("https://www.hotslogs.com/Sitewide/HeroDetails?Hero=#{hero_uri}")) do |config|
      config.noblanks
    end
    doc2 = Nokogiri::HTML(open("https://www.hotslogs.com/Default")) do |config|
      config.noblanks
    end
    hero_list = doc2.css('tbody')
    hero_list.children.each do |tr|
      if tr.css('td')[1].text == hero
        my_data[:overall_win] = tr.css('td')[4].text
        break
      end
    end

    winrates_table = doc.css('div#winRateVsOtherHeroes').css('tbody')
    winrates_table.children.each do |node|
      matchups[node.css('td')[1].css('a').text] = node.css('td')[3].text
    end
    my_data[:matchups] = matchups

    my_data
  end
end

# option 1:
# return long string to rake file
# in rake file go through string and update database
# option 2:
# move hero array into rake task and scrape 1 hero
# at a time, instantly updating model/db
