class SesssionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: 201
        else
            render json: { error: "Invalid username or password" }, status: 201
        end
    end

    def destroy
        session.delete :user_id 
        head :no_content
    end
end
