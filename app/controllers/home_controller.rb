class HomeController < ApplicationController
  def index
    @bloguers = Bloguer.order("RANDOM()").limit(3)
    @posts = Post.all
  end
end
