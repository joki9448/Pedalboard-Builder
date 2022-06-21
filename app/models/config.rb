class Config < ApplicationRecord
    belongs_to :user
    has_many :pedals 

    serialize :signal_chain, Array
end
