class Bingo < ApplicationRecord
  has_many :squares

  validates :name, presence: true
end
