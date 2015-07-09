class HomeController < ApplicationController
  def index
    #desarrollo
    @bloguers = Bloguer.order("RANDOM()").limit(3)
    #production
    #@bloguers = Bloguer.limit(5).order("RAND()")
    @posts = Post.all
  end
end
