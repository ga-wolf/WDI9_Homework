# 1. Create an array of the days of the week

# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday
# 2. My calendar says the first day is Sunday...

# Remove Sunday from the last postion and move it to the first position. Use array methods.
# 3. Create a new array of the days of the week:

# The first inner array should be the weekdays
# The second inner array should be the weekend days
# 4. Remove either the weekdays or the weekends

# Your choice...

# 5. Sort the remaining days alphabetically

days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split

def print_week
  days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split
  puts days_of_the_week
end

def move_sunday
  days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split
  days_of_the_week.pop
  days_of_the_week.unshift 'Sunday'
  puts days_of_the_week
end

# def split_the_week
#   days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split
#   week_chunk = [days_of_the_week.take(5)]
#   weekend = [days_of_the_week.drop(5)]
#   puts "The days of the week are #{weekdays.to_s}"
#   puts "The days of the glorious weekend are #{weekend.to_s}"
# end

def split_the_week
  days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split
  week_chunk = [days_of_the_week[0..4],[days_of_the_week.drop(5)] ]
  p week_chunk
end

def alphabatise_the_week
  days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split
  puts days_of_the_week.sort
end


# print_week

# move_sunday

split_the_week

# alphabatise_the_week

