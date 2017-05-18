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

ActiveRecord::Schema.define(version: 20170518095135) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "audits", force: :cascade do |t|
    t.uuid     "auditable_id"
    t.string   "auditable_type"
    t.uuid     "associated_id"
    t.string   "associated_type"
    t.uuid     "user_id"
    t.string   "user_type"
    t.string   "username"
    t.string   "action"
    t.jsonb    "audited_changes"
    t.integer  "version",         default: 0
    t.string   "comment"
    t.string   "remote_address"
    t.string   "request_uuid"
    t.datetime "created_at"
    t.index ["associated_id", "associated_type"], name: "associated_index", using: :btree
    t.index ["auditable_id", "auditable_type"], name: "auditable_index", using: :btree
    t.index ["created_at"], name: "index_audits_on_created_at", using: :btree
    t.index ["request_uuid"], name: "index_audits_on_request_uuid", using: :btree
    t.index ["user_id", "user_type"], name: "user_index", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.string   "body",       null: false
    t.uuid     "author_id",  null: false
    t.uuid     "issue_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id", using: :btree
    t.index ["issue_id"], name: "index_comments_on_issue_id", using: :btree
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer  "priority",   default: 0, null: false
    t.integer  "attempts",   default: 0, null: false
    t.text     "handler",                null: false
    t.text     "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string   "locked_by"
    t.string   "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority", using: :btree
  end

  create_table "gods", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.string   "first_name",                          null: false
    t.string   "last_name",                           null: false
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_gods_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_gods_on_reset_password_token", unique: true, using: :btree
    t.index ["unlock_token"], name: "index_gods_on_unlock_token", unique: true, using: :btree
  end

  create_table "issue_types", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "position",   null: false
    t.string   "color",      null: false
    t.uuid     "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "project_id"], name: "index_issue_types_on_name_and_project_id", unique: true, using: :btree
    t.index ["project_id"], name: "index_issue_types_on_project_id", using: :btree
  end

  create_table "issues", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.integer  "no",                                              null: false
    t.string   "summary",                                         null: false
    t.text     "description"
    t.uuid     "project_id"
    t.uuid     "organization_id"
    t.uuid     "assignee_id"
    t.uuid     "reporter_id"
    t.string   "status"
    t.datetime "created_at",      default: '2017-01-18 19:30:40', null: false
    t.datetime "updated_at",      default: '2017-01-18 19:30:40', null: false
    t.index ["assignee_id"], name: "index_issues_on_assignee_id", using: :btree
    t.index ["no", "project_id"], name: "index_issues_on_no_and_project_id", unique: true, using: :btree
    t.index ["organization_id"], name: "index_issues_on_organization_id", using: :btree
    t.index ["project_id"], name: "index_issues_on_project_id", using: :btree
    t.index ["reporter_id"], name: "index_issues_on_reporter_id", using: :btree
  end

  create_table "organizations", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "name"
    t.string   "slug"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["slug"], name: "index_organizations_on_slug", unique: true, using: :btree
  end

  create_table "projects", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "key",             null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.uuid     "organization_id"
    t.index ["key", "organization_id"], name: "index_projects_on_key_and_organization_id", unique: true, using: :btree
    t.index ["name", "organization_id"], name: "index_projects_on_name_and_organization_id", unique: true, using: :btree
    t.index ["organization_id"], name: "index_projects_on_organization_id", using: :btree
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "session_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.jsonb    "data"
    t.index ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
    t.index ["updated_at"], name: "index_sessions_on_updated_at", using: :btree
  end

  create_table "statuses", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "position",   null: false
    t.string   "category",   null: false
    t.uuid     "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name", "project_id"], name: "index_statuses_on_name_and_project_id", unique: true, using: :btree
    t.index ["project_id"], name: "index_statuses_on_project_id", using: :btree
  end

  create_table "teams", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "name",            null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.uuid     "organization_id"
    t.index ["name", "organization_id"], name: "index_teams_on_name_and_organization_id", unique: true, using: :btree
    t.index ["organization_id"], name: "index_teams_on_organization_id", using: :btree
  end

  create_table "teams_users", id: false, force: :cascade do |t|
    t.integer "team_id", null: false
    t.integer "user_id", null: false
    t.index ["team_id", "user_id"], name: "index_teams_users_on_team_id_and_user_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_teams_users_on_user_id", using: :btree
  end

  create_table "users", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.uuid     "organization_id"
    t.string   "username",                            null: false
    t.string   "first_name"
    t.string   "last_name"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["organization_id"], name: "index_users_on_organization_id", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true, using: :btree
    t.index ["username", "organization_id"], name: "index_users_on_username_and_organization_id", unique: true, using: :btree
  end

  add_foreign_key "comments", "issues"
  add_foreign_key "comments", "users", column: "author_id"
  add_foreign_key "issue_types", "projects"
  add_foreign_key "issues", "organizations"
  add_foreign_key "issues", "projects"
  add_foreign_key "issues", "users", column: "assignee_id"
  add_foreign_key "issues", "users", column: "reporter_id"
  add_foreign_key "projects", "organizations"
  add_foreign_key "statuses", "projects"
  add_foreign_key "teams", "organizations"
  add_foreign_key "users", "organizations"
end
