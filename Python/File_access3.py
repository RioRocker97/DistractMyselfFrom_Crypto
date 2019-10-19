file = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\myword.txt','r+')
file2 = open(r'C:\Users\ChangNoi\Desktop\Edx\Python\myword.txt','r')
my_word = file.readlines() #read EVERY line of content in file and put them in List
i=0
for word in my_word:
    my_word[i] = word[:-1]
    print(my_word[i])
    i+=1

file.close()
print('......................................')
file2.seek(0)
word = file2.readline().strip()  #read EACH line of content in file and put it in one string
word2 = file2.readline().strip() #.strip method will automatically remove unnecessary char in string (white space , \n )
word3 = file2.readline().strip()
word4 = file2.readline().strip()
word5 = file2.readline().strip('well.') # given an argument to strip() method , it will remove those substring that in an argument from that string too
print(word)
print(word2)
print(word3)
print(word4)
print(word5)