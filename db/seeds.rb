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

Artist.create(name: "Dominic Fike", image: "https://media.wonderlandmagazine.com/uploads/2022/02/DSC9841_v2-scaled.jpg")
Artist.create(name: "The Hold Steady", image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Holdsteady1.jpg")
Artist.create(name: "Omar Apollo", image: "https://images.sk-static.com/images/media/profile_images/artists/9242614/huge_avatar")
Artist.create(name: "LCD Soundsystem", image: "https://hollywoodlife.com/wp-content/uploads/2022/02/lcd-soundsystem-ss-ftr.jpg?w=620")
Artist.create(name: "Rina Sawayama", image: "https://cdn.theatlantic.com/thumbor/Lwk7yJBAPVTC7oakEPQxggGRqrE=/0x0:4800x2700/960x540/media/img/mt/2022/09/Rina_Sawayama_Hold_The_Girl_Album_2/original.jpg")
Artist.create(name:"The Pretty Reckless", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/The_the_pretty_reckless_band.jpg")
Artist.create(name:"Blu DeTiger", image: "https://yt3.ggpht.com/p7a3oWG78PHYbTmoqK51LGsHvV-tEAH8ldSjZQObWlAw1J2baeEOqcwG_pmdHtKwE6_bFKdicbM=s900-c-k-c0x00ffffff-no-rj")
Artist.create(name:"SZA", image: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-11/221116-sza-jm-1604-50bd54.jpg")
Artist.create(name:"Taylor Swift", image: "https://images.hellomagazine.com/imagenes/hfm/20221114156971/taylor-swift-mtv-emas-crystal-dress-stormzy/0-762-895/taylorswift1-t.jpg?tx=w_500")
Artist.create(name:"Duckwrth", image: "https://i1.sndcdn.com/avatars-RB7hc097y3xppzLR-Gkdzng-t500x500.jpg")
Artist.create(name: "Taking Back Sunday", image: "https://assets.vogue.com/photos/58918be64fe1526113022fa9/master/pass/00-taking-back-sunday.jpg")
Artist.create(name: "A Day To Remember", image: "https://static.spin.com/files/field/image/101216-a-day-to-remember.jpg")
Artist.create(name: "Yung Gravy", image: "https://images.squarespace-cdn.com/content/v1/5bbbf769fd679359977477ee/1602875307664-CCD45CVL5Q0FRWE90I9D/yg1.jpg")
Artist.create(name: "Brett Eldredge", image: "https://www.travelandleisure.com/thmb/MUEw15fZIt8mbbaFwHdCf-cXjSU=/1600x1200/smart/filters:no_upscale()/brett-eldredge-BEQA0820-fc85170f5ed540f0a1c53b58e303144e.jpg")
Artist.create(name:"The Maine", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Themaineinthedesert2020.jpg")
Artist.create(name:"Diplo", image: "https://media.gq.com/photos/5e176887bc5c190008525101/master/pass/diplo-gq-february-2020-02.jpg")
Artist.create(name: "Daddy Yankee", image: "https://www.rollingstone.com/wp-content/uploads/2022/03/Daddy-Yankee-credit-Issac-Reyes.jpg?w=1581&h=1054&crop=1")

Show.create(venue: "Terminal 5", date: "2022-12-01", artist_id: 1)
Show.create(venue:"Terminal 5", date: "2022-11-18", artist_id: 13)
Show.create(venue: "Beacon Theater", date: "2022-12-05", artist_id: 12)
Show.create(venue: "Brooklyn Bowl", date: "2022-12-03", artist_id: 2)
Show.create(venue: "Kings Theatre", date: "2022-11-26", artist_id: 3)
Show.create(venue: "Brooklyn Steel", date: "2022-11-27", artist_id: 4)
Show.create(venue: "Avant Gardner", date: "2022-11-28", artist_id: 5)
Show.create(venue: "Webster Hall", date: "2022-12-03", artist_id: 7)
Show.create(venue:"Bowery Ballroom", date:"2022-12-13", artist_id: 6)
Show.create(venue:"Beacon Theater", date:"2022-12-10", artist_id: 14)
Show.create(venue:"Mulcahy's Pub and Concert Hall", date: "2022-12-07", artist_id: 11)
Show.create(venue: "Nebula", date: "2022-12-08", artist_id: 16)
Show.create(venue: "UBS Arena", date: "2022-12-09", artist_id: 17)

Showlist.create(user_id: 1, show_id: 1)
Showlist.create(user_id: 1, show_id: 2)
Showlist.create(user_id: 1, show_id: 3)
Showlist.create(user_id: 1, show_id: 4)
Showlist.create(user_id: 6, show_id: 4)

User.create(username: "test", password_digest: "t")

Contact.create(user_id: 1, bio: "hi", photo: "", email: "rafiajk@aol.com", instagram: "rafiajk", twitter: "rafiajkay")

puts "Done seeding!"