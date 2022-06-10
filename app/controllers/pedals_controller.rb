class PedalsController < ApplicationController
    def index
        render json: Pedal.all, status: 200
    end

    def show
        pedal = Pedal.find_by(id: params[:id])
        render json: pedal, status: 200
    end
end
