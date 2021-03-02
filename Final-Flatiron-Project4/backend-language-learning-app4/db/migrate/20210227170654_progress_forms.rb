class ProgressForms < ActiveRecord::Migration[6.1]
  def change
    create_table :progress_forms do |t|
      t.string :name
      t.string :date
      t.string :quiz
      t.string :content
      
    end
  end
end
