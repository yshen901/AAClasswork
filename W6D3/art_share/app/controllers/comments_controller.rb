class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment 
    else
      render json: comment.errors.full_messages, status: 422
    end 
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    if comment
      comment.destroy
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end 
  end

  def index
    if params.has_key?(:user_id)
      comments = Comment.where(user_id: params[:user_id])   

    elsif params.has_key?(:artwork_id)
      comments = Comment.where(artwork_id: params[:artwork_id])
      
    else
      comments = Comment.all
      
    end
    render json: comments
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :artwork_id)
  end
end
