class User < ApplicationRecord
  belongs_to :organization

  accepts_nested_attributes_for :organization

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
    :recoverable, :trackable, :validatable,
    :confirmable, :lockable, :rememberable

  validates :email, presence: true, uniqueness: true
  validates :organization, presence: true
  validates :username, presence: true, uniqueness: { scope: :organization_id }, format: {
    with: /[a-zA-Z][\w-]+/,
    message: 'Only letters and digits allowed'
  }

  def full_name
    "#{first_name} #{last_name}".chomp
  end

end
