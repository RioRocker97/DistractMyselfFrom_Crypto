name = "chang" #String in a LIST
print(name[0:2]) #Use n:n as a substring
print(name[:3]) # use :n as a substring AT 0 to n point
print(name[3:]) # use n: as a substring AT n point to last 
print(name[::2]) # use ::n to return a string at every n index
print(name[::-2])
print(name[:-2])

for n in name[2:]: #Finally , LOOP for
    print(n)
for n in name: #Finally , LOOP for
    a = 1
    print(a,n)
    a+=1

a = len(name)
print(a)
print(name.count('1'))
print(name.find('h',0)) #return index of that character or -1 if not found