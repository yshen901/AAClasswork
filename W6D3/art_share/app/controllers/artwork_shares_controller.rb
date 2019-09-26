class ArtworkSharesController < ApplicationController
  def create
    new_share = ArtworkShare.new(artwork_shares_params)
    if new_share.save
      render json: new_share
    else
      render json: new_share.errors.full_messages, status: 422
    end
  end

  def destroy
    share = ArtworkShare.find_by(id: params[:id])
    if share 
      share.destroy
      render json: share 
    else
      render json: share.errors.full_messages, status: 422
    end
  end

  private

  def artwork_shares_params
    params.require(:artwork_share).permit(:artwork_id, :viewer_id)
  end
end
