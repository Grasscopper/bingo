class Square < ApplicationRecord
  belongs_to :bingo
  
  validates :description, presence: true, length: { maximum: 50 }
end
