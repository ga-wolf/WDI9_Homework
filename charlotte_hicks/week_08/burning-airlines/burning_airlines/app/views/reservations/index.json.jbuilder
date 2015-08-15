json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :row, :column, :flight_id
  json.url reservation_url(reservation, format: :json)
end
