# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# require 'rest-client'
# puts "Getting artists ..."
#     def api_key 
#         ENV["REACT_APP_API_KEY"]
#     end

#     def artists_dataset
#         api_data = {key: api_key}
#         artists = RestClient.get("https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=#{api_data[:key]}")
#         artists_array = JSON.parse(artists)["attractions"]
#         artists_array.each do |a|
#             Artist.create(
#                 name: a["name"],
#                 image: a["images"]
#                 )
#     end
# end
# artists_dataset()
# puts "Done seeding artists!"

Artist.create(name: "Taking Back Sunday", image: "")
Artist.create(name: "A Day To Remember", image: "")
Artist.create(name: "Brett Eldredge", image: "")
Artist.create(name: "Dominic Fike", image: "")
Artist.create(name: "The Hold Steady", image: "")
Artist.create(name: "Taking", image: "")
Artist.create(name: "Taking", image: "")
Artist.create(name: "Taking", image: "")
Artist.create(name: "Taking", image: "")
Artist.create(name: "Taking", image: "")

Show.create(venue: "Beacon Theater" , date: "2022-12-09", fan_id: 2, artist_id: 3)
Show.create(venue: "Terminal 5" , date: "2022-12-01", fan_id: 1, artist_id: 4)
Show.create(venue: "Brooklyn Bowl" , date: "2022-12-03", fan_id: 3, artist_id: 5)
