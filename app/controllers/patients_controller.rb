class PatientsController < ApplicationController

  def index
    # patients = Patient.all :include => [:scientist]
    respond_with Patient.all
  end

  def create
    user = User.find(params[:id])
    if user[:type] == 'Scientist'
      user_model = Scientist.find(params[:id])
    else
      user_model = Physician.find(params[:id])
    end
    patient = user_model.patients.create(patient_params)

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
