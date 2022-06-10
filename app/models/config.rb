class Config < ApplicationRecord
    belongs_to :user
    has_many :pedals 
end
