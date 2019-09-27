class LikesController < ApplicationController
  def index
    if params.has_key?(:user_id)
      likes = Like.where(user_id: params[:user_id])
      # artworks = Artwork.where()
    elsif params.has_key?(:artwork_id)
      likes = User.where(id: params[:artwork_id])
    elsif params.has_key?(:comment_id)

    else
      likes = Like.all
    end
    render json: likes
  end
end
