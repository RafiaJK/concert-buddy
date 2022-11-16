class User < ApplicationRecord
    has_secure_password

    has_one :contact, dependent: :destroy
    has_many :showlists, dependent: :destroy
    
    has_many :shows, through: :showlists

    validates :username, uniqueness: { case_sensitive: false }
    validates :username, uniqueness: true
end
