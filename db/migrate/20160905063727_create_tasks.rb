class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :content
      t.integer :status
      t.boolean :complete
      t.references :scientist, index: true, foreign_key: true
      t.references :physician, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
