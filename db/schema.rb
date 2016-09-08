# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160906052049) do

  create_table "patients", force: :cascade do |t|
    t.string   "name"
    t.integer  "scientist_id"
    t.integer  "physician_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "patients", ["physician_id"], name: "index_patients_on_physician_id"
  add_index "patients", ["scientist_id"], name: "index_patients_on_scientist_id"

  create_table "results", force: :cascade do |t|
    t.string   "combination"
    t.integer  "score"
    t.integer  "patient_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "results", ["patient_id"], name: "index_results_on_patient_id"

  create_table "tasks", force: :cascade do |t|
    t.string   "name"
    t.string   "content"
    t.integer  "status"
    t.boolean  "complete"
    t.integer  "scientist_id"
    t.integer  "physician_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "tasks", ["physician_id"], name: "index_tasks_on_physician_id"
  add_index "tasks", ["scientist_id"], name: "index_tasks_on_scientist_id"

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "image_url"
    t.string   "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
