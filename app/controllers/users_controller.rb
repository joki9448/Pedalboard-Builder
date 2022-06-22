class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    def index
        render json: User.all, status: 200
    end

    # def create
    #     user = User.create!(user_params)
    #     if user.valid?
    #         session[:user_id] = user.id 
    #         render json: user, status: :201
    #     else
    #         render json: { error: user.errors.full_messsages }, status: 422
    #     end
    # end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
