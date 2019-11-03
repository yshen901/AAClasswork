class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    render 'api/benches/index'
  end

  def create
    @bench = Bench.new(bench_params)
    if @bench.save
      render 'api/benches/show'
    else
      render json: @bench.errors.full_messages, status: 401
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
