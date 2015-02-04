class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  #creates a whitelist for desired attributes
end
