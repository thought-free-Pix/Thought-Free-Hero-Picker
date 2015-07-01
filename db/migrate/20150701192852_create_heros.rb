class CreateHeros < ActiveRecord::Migration
  def change
    create_table :heros do |t|
      t.string :name, null: false
      t.integer :role_id, null: false
      t.string :overall_win
      t.string :matchups

      t.timestamps null: false
    end

    add_index :heros, :name, unique: true
  end
end
