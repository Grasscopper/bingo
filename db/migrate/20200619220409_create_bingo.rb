class CreateBingo < ActiveRecord::Migration[5.2]
  def change
    create_table :bingos do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
  end
end
