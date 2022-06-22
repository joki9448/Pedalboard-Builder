class ConfigsController < ApplicationController

    def index
        render json: Config.all, status: 200
    end

    def create 
        config = Config.create!()    
        config.chain['links'] << params[:brand, :model, :effect]
        render json: config, status: 201
    end

    private

    def config_params
        params.permit(:chain)
    end
end
