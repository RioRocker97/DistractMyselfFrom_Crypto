file = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\myfile.txt','w+') #w+ mean write mode and will created a new file if it doesn't existed
#by default, the location of the file created will be at the python interpreter ie. where python installed and use that directory to compile . (user/changnoi)
#we can use r'......Path..../name.txt to specify exact path that we want
file2 = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\file2.txt','a') #a mean append mode . it will write a new thing into the file without overwrite it
file3 = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\myword.txt','r')
for i in range(10):
    file.write('Create my file at line %d\n' %(i+1))

#file2.write('\n\nFuck you . I\'ll write this in python \n\n') 
myword_content = file3.read()
#.read() method will read every line of given file into string
#if there an specific number of word given to read() . it will read until it reach specific number of word
#newline = 1 
#spacebar = 1
file3.seek(0) #use seek(n) to reset the number of read word to n number
myword_content2 = file3.read(20)
print(myword_content)
print('.....................................')
print(myword_content2)
file.close()
file2.close()
file3.close()