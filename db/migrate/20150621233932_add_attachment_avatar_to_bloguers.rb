class AddAttachmentAvatarToBloguers < ActiveRecord::Migration
  def self.up
    change_table :bloguers do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :bloguers, :avatar
  end
end