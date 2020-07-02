class Api::V1::BingosController < ApplicationController
  def index
    render json: Bingo.all
  end
end
