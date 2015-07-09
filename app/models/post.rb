class Post < ActiveRecord::Base
  belongs_to :bloguer
  include Bootsy::Container
  is_impressionable
  has_attached_file :picture, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => ActionController::Base.helpers.asset_path('No_image_available.png')
  validates_attachment_content_type :picture, :content_type => /\Aimage\/.*\Z/

end
