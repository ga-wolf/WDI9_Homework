# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Song.destroy_all
Mixtape.destroy_all
Album.destroy_all
Genre.destroy_all
Artist.destroy_all

g1 = Genre.create :name => 'Rock'
g2 = Genre.create :name => 'Progressive'
g3 = Genre.create :name => 'Melodic'

s1 = Song.create :name => 'Lifelike'
s2 = Song.create :name => 'Pardon Me'
s3 = Song.create :name => 'Love'

a1 = Album.create :name => 'Robots'
a2 = Album.create :name => 'Soup'
a3 = Album.create :name => 'Jewels'

r1 = Artist.create :name => 'Karnivool'
r2 = Artist.create :name => 'Odd Project'
r3 = Artist.create :name => 'Incubus'

u1 = User.create :name => 'Angus'
u2 = User.create :name => 'Kurt'
u3 = User.create :name => 'Boxy'

m1 = Mixtape.create :name => 'Code Jams'
m2 = Mixtape.create :name => 'Driving'
m3 = Mixtape.create :name => 'Seduction'

r1.songs << s1
r2.songs << s2
r3.songs << s3

a1.songs << s1
a2.songs << s3
a3.songs << s2

g1.songs << s2
g2.songs << s1
g3.songs << s3

m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s1 << s3

u1.mixtapes << m1
u2.mixtapes << m2
u3.mixtapes << m3



