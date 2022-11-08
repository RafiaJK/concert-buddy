class ShowsController < ApplicationController

    skip_before_action :authorize, only: [:index]

        #GET
        def index
            shows = Show.all
            render json: shows, status: :ok
        end

        
end
