class CreateConfigs < ActiveRecord::Migration[7.0]
	def change
		create_table :configs do |t|
		  t.integer :user_id
		  t.jsonb :signal_chain, default: {'links': []}
		  t.timestamps
		end
	end
end