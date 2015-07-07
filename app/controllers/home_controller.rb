class HomeController < ApplicationController
  def index
    @bloguers = Bloguer.limit(5).order("RAND()")
    @posts = Post.all
  end
end
