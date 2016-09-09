class Patient < ActiveRecord::Base
  belongs_to :scientist
  belongs_to :physician
  has_many :statuses
  has_many :results

  def as_json(options = {})
    super(options.merge(include: [:scientist,:physician,:statuses,:results]))
  end
end
