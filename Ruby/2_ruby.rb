class Car
    @@number_of_car = 0 # class varialble . belong to the class
    def initialize(name,brand,year)
        @car_name = name # instance variable . belong to the object
        @car_brand = brand
        @car_year = year
        @@number_of_car+=1
    end
    def get_name()
        puts "This car named #@car_name"
    end
    def display()
        puts "This is #@car_name\nMade by #@car_brand\nbuilt in #@car_year"
    end
    def get_num()
        return @@number_of_car
    end
end

def myfx(num)
    puts 2+num
end

nissan = Car.new("Fairlady 370Z","Nissan","2007")
puts nissan.get_num
toyota = Car.new("toyota1","Toyota","2005")
puts nissan.get_num
misu = Car.new("EVO VIII","Mitsubishi Motor","2012")
nissan.display
toyota.display
misu.display
puts nissan.get_num
myfx(10)