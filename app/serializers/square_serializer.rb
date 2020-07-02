class SquareSerializer < ActiveModel::Serializer
  attributes :id, :description
  belongs_to :bingo
end
