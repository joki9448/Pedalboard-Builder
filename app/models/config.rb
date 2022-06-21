class Config < ApplicationRecord
    belongs_to :user
    has_many :pedals 
    # serialize :signal_chain, Array

    # store :signal_chain, accessors: [:brand, :model, :effect], coder: JSON

end
