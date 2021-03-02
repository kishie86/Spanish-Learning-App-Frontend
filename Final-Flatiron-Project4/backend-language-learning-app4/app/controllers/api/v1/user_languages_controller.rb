class Api::V1::UserLanguagesController < ApplicationController
    skip_before_action :authorized, only: [:create, :index ]
    def index

        render json: UserLanguage.all.to_json(ul_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def ul_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end


end
