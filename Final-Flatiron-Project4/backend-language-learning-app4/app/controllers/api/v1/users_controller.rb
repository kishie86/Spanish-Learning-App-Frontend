class Api::V1::UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index ]
   

    def index

        render json: User.all.to_json(user_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def user_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end

    def create
        user = User.create(user_params)
      
       
        if user.valid?
          render json: { user: user, status: :created}
        else
          render json: { errors: user.errors.full_messages, status: :not_acceptable}
        end
      end
    
    private
      
      def user_params
        params.require(:user).permit(:username, :email, :password)
      end
end
