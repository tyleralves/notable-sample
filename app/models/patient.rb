class Patient < ActiveRecord::Base
  # Valid? or has_many :user ?
  belongs_to :scientist
  belongs_to :physician

  def as_json(options = {})
    super(options.merge(include: [:scientist,:physician]))
  end
end
