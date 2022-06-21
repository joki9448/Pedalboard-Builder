class ConfigsController < ApplicationController

    def index
        render json: Config.all, status: 200
    end

    def create 
        config = Config.create(config_params)
        render json: config, status: 201
    end

    private

    def config_params
        params.permit(:brand, :model, :effect, :user_id)
    end
end
