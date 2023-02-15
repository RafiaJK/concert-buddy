class ShowSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :venue, :date, :artist
  belongs_to :artist, serializer: ArtistSerializer
  has_one :showlists
end
