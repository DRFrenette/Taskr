class Task < ActiveRecord::Base
  belongs_to :user

  def self.incomplete
    where(completed: false)
  end
   validates :title, presence: true
   validates :description, presence: true
end
