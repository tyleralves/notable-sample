class StatusesController < ApplicationController

  def create
    patient = Patient.find(params[:patient_id])
    status = patient.statuses.create(status_params)

    respond_with patient, status
  end

  def index

    respond_with Status.all
  end

  private
  def status_params
    params.require(:status).permit(:body)
  end

end
