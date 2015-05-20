# MTA Lab
# Objectives:

# Apply your knowledge of Javascript to solve a real world problem.
# Get really good at array manipulation.
# Activity

# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

# // console.log() shows output similar to this:
# // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


 require 'pry'
#-------------------------------------------main menu display-----------------------------

def train_start
  puts `clear`

  puts "-----------Travel from------------"

  line_picker
  puts "-------------------------------------"

end

def train_end
  puts `clear`

  puts "-----------Traveling to------------"

  line_picker
  puts "-------------------------------------"
  
end

def line_picker
  puts
  puts "[1] - N Line"
  puts "[2] - L Line"
  puts "[3] - 6 Line"
  puts

end

#-------------------------------------------main menu display end ---------------------------
#--------------------------------------------------------------------------------------------



#--------------------------------------------------------------------------------------------

#                                        display route info                

#--------------------------------------------------------------------------------------------

def direction_same_line( line, route )
  journey = route.join(", ")
  stop_off = route.last
  stop_on = route.first

  route.shift
  stops = route.length
  route.pop

  if stops >= 1
    puts `clear`
    puts "-------------------------------------------------------------"
    puts
    puts "Your route #{ journey }"
    puts
    puts "Take the: #{ line }" 
    puts "Get on at: #{stop_on}"
    puts "Pass through: #{ route.join(", ") } "
    puts "Get off at: #{ stop_off } "
    puts
    puts "There are: #{ stops } stops to your destination"
    puts
    puts "-------------------------------------------------------------"
  
  else
    puts "Your being a dick"
    puts "You are getting on at #{stop_off} and getting off at #{stop_off}"
  end
end



def direction_diff_line(ln_start, route1, ln_end, route2)



  stop_off = route2.last
  route2.shift
  route2_total = route2.length

  stop_on = route1.first
  stop_transfer = route1.last 
  route_start = route1.join(", ")
  route_end = route2.join(", ")
  route1.shift
  stops = route1.length + route2.length
  route2.pop
  route1.pop

  puts `clear`
  puts "--------------------------------------------------------------------"
  puts
  puts "Your route: #{ln_start}- #{route_start} ----transfer to--> #{ln_end}- #{route_end}"
  puts  
  puts "Take the: #{ln_start}"
  puts "Get on at: #{stop_on}"
  puts "travel through: #{ route1.join(", ") }"



  if route2_total == 0
    puts "Get off at: #{stop_transfer}" 
  else
    puts "Get off and transfer at: #{stop_transfer}"
    puts "Take the: #{ln_end}"
    puts "travel through: #{route2.join(", ")}"
    puts "Get off at: #{stop_off}"
  end

  puts
  puts "There are: #{stops} stops to your destination"
  puts
  puts "--------------------------------------------------------------------"

end


#-------------------------------------display route info end---------------------------------
#--------------------------------------------------------------------------------------------
                                                     







def route_choice(user_choice)
    station = []
    case user_choice
      when '1'
        station << "N Line"
        station << n_line()     #calls n_line function which returns station name
      when '2'
        station << "L Line"
        station << l_line()     
      when '3'
        station << "6 Line"
        station << six_line()
      when 'q'
        station = false
    end

    return station          #returns array eg ["n_line", "Times Square" ]
end




def n_line

  puts `clear`

  puts "--------------N Line-------------------"
  puts
  puts "[1] - Times Square"
  puts "[2] - 34th"
  puts "[3] - 28th"
  puts "[4] - 23rd"
  puts "[5] - Union Square"
  puts "[6] - 8th"
  puts  
  puts "---------------------------------------"


  user_choice = fetch_input "Please enter your selection [#]: "

  case user_choice
    when "1","2","3","4","5","6"
      return station(user_choice)
  else
    puts "not a valid number try again"
    gets
    n_line  
  end

end

#The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st

def l_line
  puts `clear`

  puts "--------------L Line-------------------"
  puts
  puts "[6] - 8th"
  puts "[7] - 6th"
  puts "[5] - Union Square"
  puts "[8] - 3rd"
  puts "[9] - 1st"
  puts  
  puts "---------------------------------------"


  user_choice = fetch_input "Please enter your selection [#]: "
  
  case user_choice
    when "6","7","5","8","9"
      return station(user_choice)
  else
    puts "not a valid number try again"
    gets
    l_line  
  end

end

 
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

def six_line


  puts `clear`

  puts "--------------6 Line-------------------"
  puts
  puts "[10]  - Grand Central"
  puts "[11] - 33rd"
  puts "[3]  - 28th"
  puts "[4]  - 23rd"
  puts "[5]  - Union Square"
  puts "[12] - Astor Place"
  puts  
  puts "---------------------------------------"


  user_choice = fetch_input "Please enter your selection [#}: "

  case user_choice
    when "10","11","3","4","5","12"
      return station(user_choice)
  else
    puts "not a valid number try again"
    gets
    six_line  
  end

end




def station(user_choice)
  case user_choice 
    when '1'
      return "Times Square"
    when '2'
      return "34th"
    when '3'
      return "28th"
    when '4' 
      return "23rd"
    when '5' 
      return "Union Square"
    when '6' 
      return "8th"
    when '7' 
      return "6th"
    when '8'
      return "3rd"
    when '9' 
      return "1st"
    when '10'
      return "Grand Central"
    when '11' 
      return "33rd"
    when '12' 
      return "Astor Place"
    end
end



def fetch_input(prompt)
    print prompt
    gets.chomp
end



def mta_go

  train_lines = {
      "N Line" => {
        :stops => ["Times Square","34th","28th","23rd","Union Square","8th"] },
      "L Line" =>{
        :stops => ["8th","6th","Union Square","3rd","1st"] },
      "6 Line" => {
        :stops => ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"] }
      }



            train_start  #displays menu
            line_choice = fetch_input "Please enter your selection: "



            route_start = route_choice(line_choice)
  
            train_end   #displays menu
            line_choice = fetch_input "Please enter your selection: "
            route_end = route_choice(line_choice)



    if route_start[0] == route_end[0]

                route = []
                line = route_start[0]

                on_station = train_lines[line][:stops].index(route_start[1]) #returns index of the station
                off_station = train_lines[line][:stops].index(route_end[1])


                if on_station <= off_station #checks if the station you want to get off at is in front or back
                  route = train_lines[line][:stops][(on_station)..(off_station)]
                else
                  route = train_lines[line][:stops][(off_station)..(on_station)].reverse  
                end

                direction_same_line( line, route )

    else
                union = "Union Square"
                line_start = route_start[0] #line name
                line_end = route_end[0]
                on_station = train_lines[line_start][:stops].index(route_start[1]) #index of the on station
                off_station = train_lines[line_end][:stops].index(route_end[1]) #index of the off station
                on_union_idx = train_lines[line_start][:stops].index(union)
                off_union_idx = train_lines[line_end][:stops].index(union)


                route_1 = []
                if on_station <= on_union_idx
                  route_1 = train_lines[line_start][:stops][(on_station)..(on_union_idx)]
                else
                  route_1 = train_lines[line_start][:stops][(on_union_idx)..(on_station)].reverse  
                end

               

                route_2 = []
                if off_station >= off_union_idx
                  route_2 = train_lines[line_end][:stops][(off_union_idx)..(off_station)] 
                else
                   route_2 = train_lines[line_end][:stops][(off_station)..(off_union_idx)].reverse
                end

                direction_diff_line(line_start, route_1, line_end, route_2)

    end

end




mta_go




















