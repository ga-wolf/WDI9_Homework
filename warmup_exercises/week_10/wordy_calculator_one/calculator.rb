class Calculator

  def ask( question )
    question.match( /What is (-?\d+) plus (-?\d+)\?/ ) do |matches|
      matches[1].to_i + matches[2].to_i
    end
  end

end