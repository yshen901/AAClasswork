## Assessment 3

**Instructions:** Run `bundle exec rspec` in your terminal. Your job is to implement the classes and their methods outlined by the RSpec output in the corresponding `/lib` files. We recommend you look into the `/spec` files to get additional clarity or hints on how to satisfy the spec. Below is a high-level overview of this project, but pay attention to RSpec especially.

### Passenger

In this project, a `Passenger` class will store information about a single passenger and the flight numbers they are booked for. Note that a single `Passenger` can book multiple flights. `Passenger` must support the following instance methods:

+ Attributes
  + `@name`
  + `@flight_numbers`
+ Instance Methods
  + `#initialize`
  + `#name`
  + `#has_flight?`
  + `#add_flight`

### Flight

The `Flight` class will store information about a single flight, identified by it's `@flight_number`. A passenger can only board the flight if they have booked the `@flight_number`.

+ Attributes
  + `@flight_number`
  + `@capacity`
  + `@passengers`
+ Instance Methods
  + `#initialize`
  + `#passengers`
  + `#full?`
  + `#board_passenger`
  + `#list_passengers`
  + `#[]`
  + `#<<`
