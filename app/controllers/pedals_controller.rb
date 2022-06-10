class PedalsController < ApplicationController
    def index
        render json: Pedal.all, status:200
    end
end
