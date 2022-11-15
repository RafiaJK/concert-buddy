class Show < ApplicationRecord
    belongs_to :artist
    has_many :showlists
    has_many :users, through: :showlists

end
