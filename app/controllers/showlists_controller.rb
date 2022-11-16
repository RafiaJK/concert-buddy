class ShowlistsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :show]

        #GET
        def index
            showlists = Showlist.all
            render json: showlists, status: :ok
        end

        #GET 
        def show
            showlist = Showlist.find_by(id: session[:user_id])
            render json: showlist
        end

        #POST
        def create
            showlist = Showlist.create(user_id: session[:user_id], show_id: params[:show_id])
            render json: showlist, status: :created
        end

end
