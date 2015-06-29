class AddAttachmentBackgroundToBloguers < ActiveRecord::Migration
  def self.up
    change_table :bloguers do |t|
      t.attachment :background
    end
  end

  def self.down
    remove_attachment :bloguers, :background
  end
end
