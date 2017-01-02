module StatusCategory
  DONE = "done".freeze
  NEW = "new".freeze
  IN_PROGRESS = "in_progress".freeze

  def self.all
    [
      NEW, IN_PROGRESS, DONE
    ]
  end
end