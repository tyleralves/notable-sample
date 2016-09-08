class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.string :combination
      t.integer :score
      t.references :patient, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
