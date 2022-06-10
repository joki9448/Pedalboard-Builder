class Config < ApplicationRecord
    has_many :pedals 
    belongs_to :user
end
