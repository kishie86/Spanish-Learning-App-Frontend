class User < ApplicationRecord
    has_secure_password
    has_many :user_languages
    has_many :spanish_languages, through: :user_languages
    has_many :spanish_words, through: :spanish_languages

    validates :email, uniqueness: true 
    validates :username, presence: true
end