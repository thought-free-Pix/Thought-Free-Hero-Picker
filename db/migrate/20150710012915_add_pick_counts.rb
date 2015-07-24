class AddPickCounts < ActiveRecord::Migration
  def change
    add_column :heros, :pick_count, :string
  end
end
