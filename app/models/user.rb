class User < ApplicationRecord
    has_secure_password

    has_one :contact
    has_many :shows
end
