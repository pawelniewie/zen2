ActiveAdmin.register Organization do
  permit_params :name, :slug

  index do
    selectable_column
    column :name
    column :slug
    column :created_at
    actions
  end

  filter :name
  filter :slug
  filter :created_at

  form do |f|
    f.inputs "Organization Details" do
      f.input :name
      f.input :slug
    end
    f.actions
  end

end
