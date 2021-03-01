class Contact < ApplicationRecord
  validates :name, :email, :topic, :message, :terms, presence: true
end
