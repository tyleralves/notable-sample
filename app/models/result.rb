class Result < ActiveRecord::Base
  belongs_to :patient

  require 'csv'

  # Technique from: http://www.mattmorgante.com/technology/csv
  def self.import(file, id)
    CSV.foreach(file.path, headers:true) do |row|
      result_hash = row.to_hash
      result_hash.merge!('patient_id' => id)
      Result.create! result_hash
    end
  end
end
