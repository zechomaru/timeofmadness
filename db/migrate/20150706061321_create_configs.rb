class CreateConfigs < ActiveRecord::Migration
  def change
    create_table :configs do |t|
      t.string :facebook
      t.string :twitter
      t.string :youtube

      t.timestamps null: false
    end
  end
end
