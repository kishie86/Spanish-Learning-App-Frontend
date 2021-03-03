class Api::V1::ProgressFormsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :destroy, :update ]
    def index

        render json: ProgressForm.all.to_json(pf_serializer_option)

        # words = Word.all
        # render json: words.to_json

    end
    
    def pf_serializer_option
        {
            :include => {},

            :except => [:created_at, :updated_at]
        }
    end

    def create
        pf = ProgressForm.create(pf_params)
        render json: pf.to_json
      end

    def show
        pf = ProgressForm.find_by(params[:id])
        render json: pf.to_json
    end

    def destroy
        ProgressForm.destroy(params[:id])
    end

    def update
        pf = ProgressForm.find(params[:id]).update(pf_params)
        # binding.pry
        render json: pf.to_json
    end


      private
  def pf_params
    params.require(:progress_form).permit(:name, :date, :quiz, :content, :user_id)
  end
end
