my_car = ['Mazda','Mitsubishi','Lamboguni']
his_car = ['Toyota','Lexus','BMW']
our_car = my_car + his_car
my_grade = [2,9,128,4,78,56,85.44]
# using + operator to easily combine 2 List into 1
print(my_car)
print(his_car)
print(our_car)
#using .extend() method to include list into another list
#our_car.extend(his_car)
#using .reverse() method to reverse index number in LIST
#our_car.reverse()
#print(our_car)
print('........................')
print(my_grade)
my_grade.sort() #using .sort() method to order List in the numeric way
print(my_grade) 
our_grade = sorted(my_grade) #using sorted(some_List) to copy ordered List that given into the method
print(our_grade)
