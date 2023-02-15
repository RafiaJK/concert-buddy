class ShowsController < ApplicationController

    skip_before_action :authorize, only: [:index]

        #GET
        def index
            shows = Show.all
            render json: shows, status: :ok
        end

        #GET 
        def show
            show = Show.find_by(id: params[:id])
            render json: show, status: :ok
        end

        
end
