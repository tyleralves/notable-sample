class Scientist < User
  has_many :'patients'
  has_many :tasks

  def as_json(options = {})
    super(options.merge(include: :'patients'))
  end
end
