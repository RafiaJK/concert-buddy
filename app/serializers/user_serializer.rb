class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_one :contact
  has_many :showlists
end
