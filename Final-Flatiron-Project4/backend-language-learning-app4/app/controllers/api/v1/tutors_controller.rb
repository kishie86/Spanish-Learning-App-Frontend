class Api::V1::TutorsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index ]
    def index

        render json: Tutor.all.to_json(tutor_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def tutor_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end

    def create
        tutors = Tutor.create(tutor_event_params)
        render json: tutors.to_json
      end

    def show
        tutors = Tutor.find_by(params[:id])
        render json: tutors.to_json
    end

    def destroy
        Tutor.destroy(params[:id])
    end

    def update
        tutors = Tutor.find(params[:id]).update(tutor_params)
        # binding.pry
        render json: tutors.to_json
    end


      private
  def tutor_params
    params.require(:tutor).permit(:name, :image, :language, :bio, :years_of_experience, :review, :user_id)
  end
end
