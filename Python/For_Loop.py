print('i wanna die')
#range(n) is equal to [0,1,2,...,n-1]
for i in range(10):
    for j in range(i):
        print('*',end='')
    print()
for i in range(10):
    for j in range(10-i):
        print('*',end='')
    print()
#################################################
print('...............................................')
n = 1
for i in range(10):
    for j in range(10-i):
        print(end=' ')
    for k in range(n):
        print('*',end='')
    n+=2
    print()
for i in range(11):
    for j in range(i):
        print(end=' ')
    for k in range(n):
        print('*',end='') #Using end= at the print() will cause that output NOT going to the newline
    if n!=1 :
        n-=2
    else :
        n=1
    print()
#using for loop with range(start,stop,step) is similar to regular C++ FOR loop 
for i in range(1,20,2) :
    print(i,end=' ')
