class ConfigsController < ApplicationController

    def index
        render json: Config.all, status: 200
    end

    # not creating a new record in postgres, just adding to first record
    def create 
        config = Config.create!(chain: params[:chain])    
        config.chain['links'] << params[:brand, :model, :effect]
        render json: config, status: 201
    end

    private

    def config_params
        params.permit(:chain)
    end
end
