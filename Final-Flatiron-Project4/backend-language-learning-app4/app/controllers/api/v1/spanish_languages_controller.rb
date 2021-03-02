class Api::V1::SpanishLanguagesController < ApplicationController
    skip_before_action :authorized, only: [:create, :index ]
    def index

        render json: SpanishLanguage.all.to_json(sl_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def sl_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end

    def create
        byebug
        spanish_languages = SpanishLanguage.create(sl_params)
        render json: spanish_languages.to_json
      end

    def show
        
        spanish_languages = SpanishLanguage.find(params[:id])
        render json: spanish_languages.to_json
    end

    def destroy
        # SpanishLanguage.destroy(params[:id])
        spanish_languages = SpanishLanguage.find(params[:id])
        SpanishLanguage.destroy
        render json: spanish_languages
    end

    def update
        spanish_languages = SpanishLanguage.find(params[:id]).update(sl_params)
        # binding.pry
        render json: spanish_languages.to_json
    end


      private
  def sl_params
    params.require(:spanish_language).permit(:name)
  end

end
