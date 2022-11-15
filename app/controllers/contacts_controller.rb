class ContactsController < ApplicationController
    skip_before_action :authorize, only: [:index, :create, :show, :update]

    #GET
    def index
        contacts = Contact.all
        render json: contacts, status: :ok
    end

    #GET 
    def show
        contact = Contact.find_by(id: session[:user_id])
        render json: contact
    end

    #CREATE
    def create
        contact = Contact.create(user_id: session[:user_id], bio: params[:bio], photo: params[:photo], email: params[:email], instagram: params[:instagram], twitter: params[:twitter])
        render json: contact, status: :created
    end

    #PATCH
    def edit
        contact = Contact.find_by(user_id: params[:id])
        if contact
            contact.update(user_id: session[:user_id], bio: params[:bio], photo: params[:photo], email: params[:email], instagram: params[:instagram], twitter: params[:twitter] )
            render json: contact, status: :ok
        else
            render json: {error: "Info Not Found"}, status: :not_found
        end
    end

    #DESTROY
    def destroy
        contact = Contact.find_by(id: params[:id])
        if contact
            contact.destroy
            render json: {}, status: :ok 
        else
            render json: {error: "Contact Not Found"}, status: :not_found
        end
    end

end
