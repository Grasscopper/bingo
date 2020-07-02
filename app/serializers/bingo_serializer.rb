class BingoSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :squares
end
