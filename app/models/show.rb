class Show < ApplicationRecord
    belongs_to :artist
    has_many :showlist

end
