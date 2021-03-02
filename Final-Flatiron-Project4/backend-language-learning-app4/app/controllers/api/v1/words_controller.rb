class Api::V1::WordsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index ]
    def index

        render json: Word.all.to_json(word_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def word_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end

    def create
        words = Word.create(user_event_params)
        render json: words.to_json
      end

    def show
        words = Word.find_by(params[:id])
        render json: words.to_json
    end

    def destroy
        Word.destroy(params[:id])
    end

    def update
        words = Word.find(params[:id]).update(word_params)
        # binding.pry
        render json: words.to_json
    end


      private
  def user_event_params
    params.require(:word).permit(:image, :english_word, :non_english_word, :spanish_language_id)
  end

end



