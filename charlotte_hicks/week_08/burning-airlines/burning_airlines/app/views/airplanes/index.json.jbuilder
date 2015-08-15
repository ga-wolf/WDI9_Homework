json.array!(@airplanes) do |airplane|
  json.extract! airplane, :id, :name, :row, :column
  json.url airplane_url(airplane, format: :json)
end
