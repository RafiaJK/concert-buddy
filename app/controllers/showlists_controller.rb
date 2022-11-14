class ShowlistsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

        #GET
        def index
            showlists = Showlist.all
            render json: showlists, status: :ok
        end

        #GET 
        def show
            showlist = Showlist.find_by(id: session[:user_id])
            if showlist
                render json: showlist
            else
                render json: {error: "Not authorized"}, status: :unauthorized
            end
        end

        #POST
        def create
            showlist = Showlist.create(user_id: session[:user.id], show_id: params[:show_id])
            render json: showlist, status: :created
        end

        private
        def showlist_params
            params.permit(:show_id)
        end


end
