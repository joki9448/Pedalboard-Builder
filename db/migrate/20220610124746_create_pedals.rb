class CreatePedals < ActiveRecord::Migration[7.0]
  def change
    create_table :pedals do |t|
      t.string :brand
      t.string :model
      t.string :effect
      t.integer :user_id

      t.timestamps
    end
  end
end
