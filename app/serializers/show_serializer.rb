class ShowSerializer < ActiveModel::Serializer
  attributes :id,:artist_id, :venue, :date
  belongs_to :artist
  has_one :showlists
end
