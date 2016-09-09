class PatientsController < ApplicationController

  def index
    # patients = Patient.all :include => [:scientist]
    respond_with Patient.all
  end

  def create
    physician = Physician.find(params[:id])
    patient = physician.patients.create(patient_params)

    respond_with patient, location: nil
  end

  def show
    respond_with Patient.find(params[:id])
  end

  def assign_scientist
    patient = Patient.find(params[:id])
    patient.scientist_id = assign_params[:scientist_id]
    patient.save

    respond_with patient
  end

  def status

  end

  private
  def patient_params
    params.require(:patient).permit(:name)
  end

  def assign_params
    params.require(:patient).permit(:scientist_id)
  end
end
