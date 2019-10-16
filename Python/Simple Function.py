def say_NICE(): #def to declare function
    print('Nice')
    print('oof')
    #there seem to be a spacebar sensitive for define a scope for function
    #MUST TAB every line of code so that it will be in function

def say_NICE69(word): #argumented function
    print(word,'HeHe 69')

def plus(num): #function with return . No need to declare type of return value
    res = num+num
    return res

def area(a,b): #mutiple argumented function
    res = a*b
    return 'This area equal ' + str(res) 
    #use STR() to transform INT to String
print('abc')
say_NICE()
say_NICE69('Something good')
print(plus(5))
print(plus(5.5))
print(area(10,5))

#Hard-coding Tip
#DO NOT use data directly to argument . It lack of flexibility and it look unprofessional
#  