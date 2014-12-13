class AddUsernameColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :username, :string, null: false, uniqueness: true
  end
end
