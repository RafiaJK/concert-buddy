class ContactSerializer < ActiveModel::Serializer
  attributes :id, :photo, :bio, :email, :instagram, :twitter
end
