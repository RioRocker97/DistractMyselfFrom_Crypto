a = 121 #it look like the program predict its type of variable based on the value of it
b = 240 
if a%2 == 0 : print("Answer : %d" % (a+b))
else : print("Answer : %d" % (a-b))
KList = [1,2,3] #This is List . Similar to Array 
KList.append(29) #Append function for List to add more value 
print(KList[3])
#######################################################
print(2**30) ## ** = ...power of...
Repeat_String = "WOW " * 50 # String can be mutiplied its value with * operator
print(Repeat_String)
Repeat_List = [1,2,3] *3 # List also can be mutiplied its value with * operator
print(Repeat_List)
Mix  = ("Chang","Noi",69) # Group variable maybe ? 
print( "My name is %s %s . I like %s" % Mix) 

for i in range(3,8) : 
    print(i) ## spacebar and tab seem to be important for range of effect
    print("This %d" % i)
def java(a): ## this is function
    print("Java 123 %d" % a)
    #no need to specify type of function . the code simply predict the type of function 
java(69)