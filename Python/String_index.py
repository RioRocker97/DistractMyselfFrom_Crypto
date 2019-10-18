name = "chang" #String in a LIST
print(name[0])
print(name[1])
print(name[2])
print(name[3])
print(name[4])
a = input()
i=0
res=0
while i<5 :
    if(a[i] == name[i]):
        res+=1
    i+=1

if res==5:
    print('It\'s Chang!')
word = 'respect'
print(word[-1]) #Negative Index in string LIST
print(word[-2])
print(word[-3])
print(word[-4])
print(word[-5])
print(word[-6])
print(word[-7])