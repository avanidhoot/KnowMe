class User < ApplicationRecord
    has_secure_password
    has_secure_token :auth_token
    has_one :user_detail
    validates :email, presence: true, uniqueness: true
end
