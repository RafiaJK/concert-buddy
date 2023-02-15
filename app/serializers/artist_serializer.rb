class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_many :shows
end
