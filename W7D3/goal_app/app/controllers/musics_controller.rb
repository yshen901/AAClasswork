class MusicsController < ApplicationController
  before_action :require_login

  def index
    @musics = Music.all
    render :index
  end
end
