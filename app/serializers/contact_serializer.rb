class ContactSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :photo, :bio, :email, :instagram, :twitter
  belongs_to :user
end
