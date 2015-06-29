class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :view, default: 0
      t.string :img
      t.references :bloguer, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
