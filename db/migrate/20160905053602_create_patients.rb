class CreatePatients < ActiveRecord::Migration
  def change
    create_table :'patients' do |t|
      t.string :name
      t.references :scientist, index: true
      t.references :physician, index: true

      t.timestamps null: false
    end
  end
end
