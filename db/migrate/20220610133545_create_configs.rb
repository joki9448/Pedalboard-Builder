class CreateConfigs < ActiveRecord::Migration[7.0]
  def change
    create_table :configs do |t|
      t.integer :user_id
      t.text :signal_chain

      t.timestamps
    end
  end
end
