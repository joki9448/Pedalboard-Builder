class CreateConfigs < ActiveRecord::Migration[7.0]
  def change
    create_table :configs do |t|
      t.integer :user_id
      t.string :brand
      t.string :model
      t.string :effect

      t.timestamps
    end
  end
end
