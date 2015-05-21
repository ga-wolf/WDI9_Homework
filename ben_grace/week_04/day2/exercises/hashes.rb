# Array and Hash access
# A. Given the following data structure:

# a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# a[1]
# How would you add your name to the array?
# a << "Ben"
# puts "#{a}"



# B. Given the following data structure:

# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# # How would you return the string "One"?
# p "#{h[1]}"
# # How would you return the string "Two"?
# p "#{h[:two]}"
# # How would you return the number 2?
# p "#{h["two"]}"
# # How would you add {3 => "Three"} to the hash?
# h.merge! 3 => "Three"
# h[3]='three'
# # How would you add {:four => 4} to the hash?
# h.merge! :four => 4
# h[:four] = 4
# p "#{h}"

# C. Given the following data structure:

# is = {true => "It's true!", false => "It's false"}
# # What is the return value of is[2 + 2 == 4]?
# p is [2 + 2 == 4]
# true
# # What is the return value of is["Erik" == "Jonathan"]?
# p is ["Erik" == "Jonathan"]
# false
# # What is the return value of is[9 > 10]?
# p is [9 > 10]
# false
# # What is the return value of is[0]?
# p is [0]
# nil
# # What is the return value of is["Erik"]?
# p is ["Erik"]
# nil
# # D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
users["Erik"][:favorite_numbers].push 7
p users ["Erik"][:favorite_numbers]
# How would you add yourself to the users hash?
# users.merge! "Ben" => {
#   :twitter => "buenomaird",
#   :favorite_numbers => [1, 2, 3],
# }

users["Ben"] = { :twitter => "Monkeyfish", :favorite_numbers => [4,5,6] }
p users["Ben"]
# How would you return the array of Erik's favorite numbers?
p users["Erik"][:favorite_numbers]
# How would you return the smallest of Erik's favorite numbers?
p users["Erik"][:favorite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
evens = users["Anil"][:favorite_numbers].select do |num|
  num.even?
end

p evens

# How would you return an array of the favorite numbers common to all users?
p users['Jonathan'][:favorite_numbers] & users['Erik'][:favorite_numbers] & users['Anil'][:favorite_numbers]
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
faves = []

users.each do |name, details|
  faves.push details[:favorite_numbers]
end

p faves.flatten.sort.uniq








