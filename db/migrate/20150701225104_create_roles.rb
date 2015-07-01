class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
      t.string :role, null: false

      t.timestamps null: false
    end

    add_index :roles, :role, unique: true
  end
end
