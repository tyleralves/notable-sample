class Task < ActiveRecord::Base
  belongs_to :scientist
  belongs_to :physician
end
