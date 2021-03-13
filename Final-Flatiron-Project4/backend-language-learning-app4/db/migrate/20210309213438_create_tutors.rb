class CreateTutors < ActiveRecord::Migration[6.1]
  def change
    create_table :tutors do |t|
      t.string :name
      t.string :image
      t.string :language
      t.string :bio
      t.string :years_of_experience
      t.string :review
      t.integer :user_id

      t.timestamps
    end
  end
end
