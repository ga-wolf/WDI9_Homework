require 'pry'
require 'pry-byebug'
# Activity:

# Students should create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.

$mta = {
	"N line" => {
		:stations => "Times Square, 34th, 28th, 23rd, Union Square, 8th".split(", "),
		# :union_ind => self[:stations].index("Union Square")
		},
	"6 line" => {
		:stations => "Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place".split(', '),
		# :union_ind => self[:stations].index("Union Square")
		},

	"L line" => {
		:stations => "8th, 6th, Union Square, 3rd, and 1st".split(", "),
		# 
		},
}

# WILL REFACTOR LATER. IN THE PROCESS OF COMPLETING ERROR CHECKING. 
# ERROR CHECKING WILL BE HANDLED BY THE ABSTRACTED FUNCTIONS

# def trainline prompt
# 	p prompt
# 	p"[n] N line
# 	 [l] L line
# 	 [6] 6 line"
# 	 line_name = get.chomp.to_f
# 	 if line == 'n'
# 	 	line == $mta["N line"]
# 	 elsif line =='l'
# 	 	line == $mta["L line"]
# 	 elsif line =='6'
# 	 	line == $mta["6 line"]
# 	 end
# end

# def get_start_destination
# 	"Please input your station"
# 	start = get.chomp.to_f
# end


def planTrip (startLine, endLine, startDest, endDest)
	s_line = $mta[startLine][:stations]
	e_line = $mta[endLine][:stations]
	start_val = s_line.index(startDest)
	end_val = e_line.index(endDest)
	s_union = s_line.index("Union Square")
	e_union = e_line.index("Union Square")
	
	stats_travelled = []
	counter = 0

	#Check first if the startline is equal to the endline 
	unless startLine == endLine
		#check if the startDest is Union Square
		unless startDest == "Union Square"
			if start_val < s_union 
				#iterate forward through the array till you hit USquare
				p tripa = s_line[start_val..s_union]
				tripa.each do|stat|
					stats_travelled.push(stat)
					counter+=1
				end
			elsif start_val > s_union
				#iterate backward through the array till you hit USquare
				tripa = s_line[s_union..start_val]
				tripa.reverse_each do|stat|
					stats_travelled.push(stat)
					counter+=1
				end
			end

			if end_val < e_union
				#iterate forward through the array till you hit USq
				p tripb = e_line[end_val..e_union-1]
				tripb.reverse_each do|stat|
					stats_travelled.push(stat)
					counter+=1
				end
			elsif end_val > e_union
				#iterate backward through the array till you hit USq 
				tripb = e_line[e_union+1..end_val]
				tripb.each do|stat|
					stats_travelled.push(stat)
					counter+=1
				end
			end
		end
	else
		if start_val < end_val
			tripa = s_line[start_val..end_val]
			tripa.each do |stat|
				stats_travelled.push(stat)
				counter+=1
			end
		elsif start_val > end_val
			tripa = s_line[end_val..start_val]
			tripa.reverse_each do |stat|
				stats_travelled.push(stat)
				counter+=1
			end
		end 
	end
	p stats_travelled
	p counter
end

planTrip("N line", "N line", "Times Square", "23rd")
binding.pry  #equivalent to debugger in JS

# Hints:

# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

