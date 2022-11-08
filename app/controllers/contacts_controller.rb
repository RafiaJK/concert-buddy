class ContactsController < ApplicationController
    #GET
    def index
        contacts = Contact.all
        render json: contacts, status: :ok
    end

    #GET 
    def show
        user = Contact.find_by(id: session[:user_id])
        render json: user
    end

    #CREATE
    def create
        contact = Contact.create(user_id: session[:user_id], bio: params[:bio], photo: params[:photo], email: params[:email], instagram: params[:instagram], twitter: params[:twitter])
        render json: contact, status: :created
    end

    #PATCH
    def update
        contact = Contact.find_by(id: session[:user_id])
        if contact
            contact.update(user_id: session[:user_id], bio: params[:bio], photo: params[:photo], email: params[:email], instagram: params[:instagram], twitter: params[:twitter] )
            render json: review, status: :ok
        else
            render json: {error: "Info Not Found"}, status: :not_found
        end
    end

end
