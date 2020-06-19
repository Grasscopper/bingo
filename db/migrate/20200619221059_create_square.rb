class CreateSquare < ActiveRecord::Migration[5.2]
  def change
    create_table :squares do |t|
      t.string :description, null: false
      t.belongs_to :bingo, null: false
      t.timestamps null: false
    end
  end
end
