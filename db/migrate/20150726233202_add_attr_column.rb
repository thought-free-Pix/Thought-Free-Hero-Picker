class AddAttrColumn < ActiveRecord::Migration
  def change
    add_column :heros, :attr, :string
  end
end
