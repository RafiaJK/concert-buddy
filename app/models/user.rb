class User < ApplicationRecord
    has_secure_password

    has_one :contact
    has_many :showlists
    has_many :shows, through: :showlists

    validates :username, uniqueness: { case_sensitive: false }
    validates :username, uniqueness: true
end
