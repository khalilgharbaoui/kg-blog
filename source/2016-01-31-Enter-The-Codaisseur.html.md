---
title: Enter The Codaisseur!
date: 2016-01-31
tags: Ruby, HTML, CSS, Git, Github, Terminal, IRB
class: blogpost
---

#Enter The Codaisseur!
```ruby
.include? #Ruby♡
```
<p>In the 1st week of my traineeship at Codaisseur, I've had an introduction to programming followed by HTML/CSS, Even tough i knew the basics of HTML and CSS it was nice to see everything from a developers point-of-view, also using Atom, Github's open-source editor instead of Dreamweaver was a positive twist.</p>
<p>Shortly after that we went strait to Ruby♡. What i liked most about the Ruby language is that it's almost readable in english. once i understood the basics and rules, it was quite clear and made a lot of sense, there was not much need for brackets and semi-colons.</p>
<p>The following code was my first snippet in Ruby, it's a little game that runs in the terminal. It's messy but it makes sense, at least for to me it does 😋.</p>
<p>You can choose a random number between 0 and 100, it will respond based on your choice. you only have 10 tries.</p>

source:

```ruby
#----- Question Starts Here ------------
puts "Try to guess my secret number (between 0 and 100) in 10 Tries!"
#------ Question ENDS Here ------------

#Secret Number "Variable" is defined here outside of the methode / function
secret_number = rand(100) #random number between 0 and 100
number_of_tries = 10
#---- isolated funtion / methode STARTS HERE --------
#def = define... guess = the methode / function...
#(secret_number = argument 1, number_of_tries = argument 2)
def guess(secret_number, number_of_tries)

    puts "Try #{number_of_tries}: " #Show the number_of_tries
  user_input = gets.chomp.to_i #get the user input and covert it to intenger a.k.a. number....

if user_input == secret_number # end the game if found
puts "You guessed it! with #{} left!"
return
end
if user_input > secret_number # speaks for itself :P
    puts "Lower!"
  elsif number_of_tries == 10 - 1 # if there are 10 number_of_tries
    puts "You failed!!\n The number you were lookin for is: #{secret_number}"
return # end the game if not found
else user_input < secret_number # speaks for itself :P
    puts "Higher!"
  end
  # Add 1 number to the number_of_tries each time the "methode / function" runs
  guess(secret_number, number_of_tries + 1)
end
#---- isolated funtion / methode ENDS HERE ---------

#------ The Final Call that Calls or "Activates" the methode or function !!!
guess(secret_number, 0)
```


<p>After saving this game, I learned about the Git, created a Github repository and uploaded my work with the following commands:</p>

```
git add .

git commit -m "guessing game in Ruby terminal"

git push
```

## Multiple choices

<p>In ruby multiple choices can simply be checked by adding a function with a question mark to the end of whatever it should check, like for example in the multiple choice fruit store code below:</p>

```ruby
.include?
```

look arround line 52

```ruby
class Item
  attr_accessor :name, :price, :choice
end

class Fruit < Item

end


fruits = []

banana = Fruit.new
banana.name = "banana"
banana.price = 5
banana.choice = :a
fruits << banana

apple = Fruit.new
apple.name = "Apple"
apple.price = 3
apple.choice = :b
fruits << apple


lemon = Fruit.new
lemon.name = "Lemon"
lemon.price = 3
lemon.choice = :c
fruits << lemon
#fruits[:a] = banana this is how to input it inide hashes

ordered = []

# methode starts HERE
def chooseFruits(fruits, ordered)
  index = 0
  fruits.each do |fruit|
    puts "#{index}: #{fruit.name}, Price: $#{fruit.price}".colorize(:green)
    index += 1
  end

  #puts "choose one:[#{fruits.keys.join(', ')}]"  with hashes
puts "choose one:"
  fruits.each do |fruit|
    print "#{fruit.choice} ,".colorize(:green)
  end

  # get user input, convert it to uppercase, convert it to symbol
  choice = gets.chomp.upcase.to_i

  # is the choice of the user included in "keys" of the "hash" in this case fruits
  fruits.include? choice
  puts "You chose: #{fruits[choice].choice} #{fruits[choice].name}"

  # add each choice to the array "ordered"
  ordered << choice

  puts 'So far you ordered:'

  ordered.each do |index|
    fruit = fruits[index]
    puts "• #{fruit.name} #{fruit.price}".colorize(:blue)
  end

  # methode is called HERE
  chooseFruits(fruits, ordered)
end
# methode ends HERE
# methode is "Activated here" a.k.a. called HERE
chooseFruits(fruits, ordered)
```
