# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

todo1 = {title: "one", body: "one", done: false}
todo2 = {title: "two", body: "two", done: false}
todo3 = {title: "three", body: "three", done: false}
todo4 = {title: "four", body: "four", done: false}
todo5 = {title: "five", body: "five", done: false}

Todo.create([todo1, todo2, todo3, todo4, todo5])