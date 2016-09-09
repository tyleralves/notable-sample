class ResultsController < ApplicationController
  def index
    respond_with Result.all
  end

  def import
    Result.import(params[:file], params[:id])

    respond_with Result.all, location: nil
  end

end
