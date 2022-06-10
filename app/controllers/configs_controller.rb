class ConfigsController < ApplicationController

    def index
        render json: Config.all, status: 200
    end
end
