json.array!(@flights) do |flight|
  json.extract! flight, :id, :flight_no, :departure, :destination, :date, :plane_id
  json.url flight_url(flight, format: :json)
end
