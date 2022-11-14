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

Artist.create(name: "Taking Back Sunday", image: "https://assets.vogue.com/photos/58918be64fe1526113022fa9/master/pass/00-taking-back-sunday.jpg")
Artist.create(name: "A Day To Remember", image: "https://static.spin.com/files/field/image/101216-a-day-to-remember.jpg")
Artist.create(name: "Brett Eldredge", image: "https://www.travelandleisure.com/thmb/MUEw15fZIt8mbbaFwHdCf-cXjSU=/1600x1200/smart/filters:no_upscale()/brett-eldredge-BEQA0820-fc85170f5ed540f0a1c53b58e303144e.jpg")
Artist.create(name: "Dominic Fike", image: "https://media.wonderlandmagazine.com/uploads/2022/02/DSC9841_v2-scaled.jpg")
Artist.create(name: "The Hold Steady", image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Holdsteady1.jpg")
Artist.create(name: "Omar Apollo", image: "https://images.sk-static.com/images/media/profile_images/artists/9242614/huge_avatar")
Artist.create(name: "LCD Soundsystem", image: "https://hollywoodlife.com/wp-content/uploads/2022/02/lcd-soundsystem-ss-ftr.jpg?w=620")

Show.create(venue: "Beacon Theater", date: "2022-12-09", artist_id: 3)
Show.create(venue: "Terminal 5", date: "2022-12-01", artist_id: 4)
Show.create(venue: "Brooklyn Bowl", date: "2022-12-03", artist_id: 5)
Show.create(venue: "Brooklyn Bowl", date: "2022-12-03", artist_id: 5)
Show.create(venue: "Terminal 5", date: "2022-12-01", artist_id: 4)
Show.create(venue: "Kings Theatre", date: "2022-11-26", artist_id: 6)
Show.create(venue: "Brooklyn Steel", date: "2022-11-27", artist_id: 7)

Showlist.create(user_id: 1, show_id: 1)
Showlist.create(user_id: 1, show_id: 2)
Showlist.create(user_id: 1, show_id: 3)
Showlist.create(user_id: 1, show_id: 4)


User.create(username: "Rafia", password_digest: "Rafia")

Contact.create(user_id: 1, bio: "hi", photo: "", email: "rafiajk@aol.com", instagram: "rafiajk", twitter: "rafiajkay")

puts "Done seeding!"