#This code count how many time you open counter.txt file 
file = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\counter.txt','r+')
file2 = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\counter.txt','a')
open_counter = int(file.readline())
file.seek(0)
if(open_counter !=0):
    file.write('%d' %(open_counter+1))
    file2.write("This is your %d time you gain access to this file\n" %(open_counter+1))
else:
    file.write('%d' %(open_counter+1))
    file2.write("This is your first time. Go on and open more often.\n")
file.close