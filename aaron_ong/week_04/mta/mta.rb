require "pry"
require 'rainbow/ext/string'


$line_index
$transfer_station
$start_line
$end_line

def same_line(start_loc, end_loc)
  common_lines = 0
  $line_array.each do |line|
    if (line.member? start_loc) && (line.member? end_loc)
      common_lines += 1
      $line_index = $line_array.index(line)
    end
  end
  common_lines
end

def transfer(start_loc, end_loc)
  $line_array.each do |line|
    if (line.member? start_loc)
        $start_line = $line_array.index(line)
      end
    if (line.member? end_loc)
        $end_line = $line_array.index(line)
      end
    end
  ($line_array[$start_line] & $line_array[$end_line]).each do |i|
    
  end
  end


def travel(start_loc, end_loc)
  system 'clear' 
  puts "Your Starting station is ".color(:green) + start_loc.background(:green).color(:black)
  if (same_line start_loc,end_loc) > 0
    startNum = $line_array[$line_index].index(start_loc).to_i
    endNum = $line_array[$line_index].index(end_loc).to_i
    puts $line_array[$line_index][startNum..endNum]
  
  else
    
  @transfer_station = (transfer(start_loc, end_loc)[0])
    @startNum = $line_array[$start_line].index(start_loc).to_i
    @endNum = $line_array[$end_line].index(end_loc).to_i
    @trn_ID_start = $line_array[$start_line].index(@transfer_station)
    @trn_ID_end = $line_array[$end_line].index(@transfer_station)
    if @startNum > @trn_ID_start
      puts $line_array[$start_line][@trn_ID_start..@startNum].reverse
    else
      puts $line_array[$start_line][@startNum..@trn_ID_start]
    end
    puts ("Transfer here from the " + $line_names[$start_line] + " to the " + $line_names[$end_line] + " at " + @transfer_station).underline.bright.background(:default).color(:red)
    if @trn_ID_end > @endNum
      puts $line_array[$end_line][@endNum..@trn_ID_end].reverse
    else
      puts $line_array[$end_line][@trn_ID_end..@endNum]
    end
  end
  puts "Your Ending station is ".color(:blue) + end_loc.background(:blue).color(:black)
end



t1NorthShoreLine = ["Berowra", "Mount Kuring-gai", "Mount Colah", "Asquith", "Hornsby", "Waltara", "Wahroonga", "Warrawee", "Turramurra", "Pymble", "Gordon", "Killara", "Lindfield", "Rosefield", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquiarie University", "Macquarie Park", "North Ryde", "Chatswood", "Artarmon", "St Leonards", "Wollstonecraft", "Waverton", "North Sydney", "Milsons Point", "Wynyard", "Town Hall", "Central", "Redfern", "Burwood", "Strathfield", "Lidcombe", "Auburn", "Clyde", "Granville", "Harris Park", "Parramatta"];
t1NorthernLine = [ "Hornsby", "Normanhurst", "Thornleigh", "Pennant Hills", "Beecroft", "Cheltenham", "Epping", "Macquiarie University", "Macquarie Park", "North Ryde", "Chatswood", "Eastwood", "Denistone", "Westryde", "Meadowbank", "Rhodes", "Concord West", "North Strathfield", "Strathfield", "Burwood", "Redfern", "Central" ,"Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood"] ;
t1WesternLine = ["Emu Plains", "Penrith", "Kingswood", "Werrington", "St Marys", "Mount Druitt", "Rooty Hill", "Doonside", "Richmond", "Easy Richmond", "Clarendon", "Windsor", "Mulgrave", "Vineyard", "Riverstone", "Schofields", "Quakers Hill", "Marayonh", "Blacktown", "Seven Hills", "Toongabbie", "Pendle Hill", "Wentworthville", "Westmead", "Parramatta", "Harris Park", "Granville", "Clyde", "Auburn", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Town Hall", "Wynyard", "Milsons Point", "North Sydney", "Waverton", "Wollstonecraft", "St Leonards", "Artarmon", "Chatswood"];
t2AirportLine = ["Macarthur", "Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Holsworthy", "East Hills", "Panania", "Reversby", "Padstow", "Riverwood", "Narwee", "Beverly Hills", "Kingsgrove", "Bexley North", "Bardwell Park", "Turrella", "Wolli Creek", "International Airport", "Domestic Airport", "Mascot", "Green Square", "Sydenham", "Redfern", "Central", "Museum", "St James", "Circular Quay", "Wynyard", "Town Hall"];
t2InnerWestAndSouthLine = ["Macarthur", "Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Granville", "Clyde", "Auburn", "Lidcombe", "Flemington", "Homebush", "Strathfield", "Burwood", "Croydon", "Ashfield", "Summer Hill", "Lewisham", "Petersham", "Stanmore", "Newtown", "Macdonaldtown", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"];
t3BankstownLine = ["Liverpool", "Warwick Farm", "Cabramatta", "Carramar", "Villawood", "Leightonfield", "Chester Hill", "Sefton", "Lidcombe", "Berala", "Regents Park", "Birrong", "Yagoona", "Bankstown", "Punchbowl", "Wiley Park", "Lakemba", "Belmore", "Campsie", "Canterbury", "Hurlstone Park", "Dulwich Hill", "Marrickville", "Sydenham", "St Peters", "Erskineville", "Redfern", "Central", "Town Hall", "Wynyard", "Circular Quay", "St James", "Museum"];
t4EasternSuburbsAndIllawarraLine = ["Waterfall", "Heathcode", "Engadine", "Loftus", "Cronulla", "Woolooware", "Caringbah", "Miranda", "Gymea", "Kirrawee", "Sutherland", "Jannali", "Como", "Oatley", "Mortdale", "Penshurst", "Hurstville", "Allawah", "Carlton", "Kogarah", "Rockdale", "Banksia", "Arncliffe", "Wolli Creek", "Tempe", "Sydenham", "Redfern", "Central", "Town Hall", "Martin Place", "Kings Cross", "Edge Cliff", "Bondi Junction"];
t5CumberlandLine = ["Campbelltown", "Leumeah", "Minto", "Ingleburn", "Macquarie Fields", "Glenfield", "Casula", "Liverpool", "Warwick Farm", "Cabramatta", "Canley Vale", "Fairfield", "Yennora", "Guildford", "Merrylands", "Harris Park", "Parramatta", "Westmead", "Wentworthville", "Pendle Hill", "Toongabbie", "Seven Hills", "Blacktown", "Marayong", "Quakers Hill", "Schofields"]
t6CarlingfordLine = ["Carlingford", "Telopea", "Dundas", "Rydalmere", "Rosehill", "Clyde", "Auburn", "Lidcombe", "Strathfield", "Burwood", "Redfern", "Central", "Townhall", "Wynyard", "Milsons Point", "North Sydney"];
t7OlympicParkLine = ["Lidcombe", "Olympic Park"];

$line_array = [t1NorthShoreLine, t1NorthernLine, t1WesternLine, t2AirportLine, t2InnerWestAndSouthLine, t3BankstownLine, t4EasternSuburbsAndIllawarraLine, t5CumberlandLine, t6CarlingfordLine, t7OlympicParkLine]
$line_names = ['t1 North Shore Line', 't1 Northern Line', 't1 Western Line', 't2 Airport Line', 't2 Inner West And South Line', 't3 Bankstown Line', 't4 Eastern Suburbs And Illawarra Line', 't5 Cumberland Line', 't6 Carlingford Line', 't7 Olympic Park Line']


binding.pry