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

ActiveRecord::Schema.define(version: 20160908170441) do

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
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "username"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  add_index "users", ["username"], name: "index_users_on_username", unique: true

  create_table "users_data", force: :cascade do |t|
    t.string   "name"
    t.string   "image_url"
    t.string   "type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
