class Api::V1::ExperienceDetailSerializer < ActiveModel::Serializer
  attributes :id, :year_of_start, :year_of_end, :company_name, :location, :designation, :currently_working
end
