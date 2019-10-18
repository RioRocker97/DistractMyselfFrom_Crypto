car = ['Mazda','Mitsubishi','Toyota']
print(car[1])
car.append('BMW')
print(car[3])
car.append('Benz')
print(car[4])
car[0] = 'Jacuuzi'
car.insert(1,'lazada') # insert into NOT replace into that index
print(car)
#-----------------------------------------------------------------------------------------#
#del car[1]
my_car = car.pop() 
#default POP function will get info from last index and then delete
print(car)

car2 = []
#Empty List is FALSE
while car :
    car2.append(car.pop())

print(car2)
car2.remove('BMW') #It must be a specific info in that LIST to be removed or it will cause error
print(car2)