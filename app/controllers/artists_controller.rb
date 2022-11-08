class ArtistsController < ApplicationController
    skip_before_action :authorize, only: :index

        #GET
        def index
            artists = Artist.all
            render json: artists, status: :ok
        end
end
