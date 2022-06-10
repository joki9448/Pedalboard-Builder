class User < ApplicationRecord
    has_many :pedals 
    has_many :configs
end
