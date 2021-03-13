class User < ApplicationRecord
    has_secure_password
    has_many :user_languages
    has_many :spanish_languages, through: :user_languages
    has_many :spanish_words, through: :spanish_languages
    has_many :tutors

    validates :email, uniqueness:  true
    validates :username, uniqueness: true
    validates :email, :username, presence: true
end
