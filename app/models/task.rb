class Task < ActiveRecord::Base
  belongs_to :user

  def self.incomplete
    where(completed: false)
  end

  def self.complete
    where(completed: true)
  end
   validates :title, presence: true
   validates :description, presence: true
end
