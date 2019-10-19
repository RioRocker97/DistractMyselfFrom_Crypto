my_word = "Hello ! I wanna die fAST"
my_word_spilt = my_word.split()
#using .split() to split string into pieces of substring into another List . By default , it will split between spacebar
my_word_spilt2 = my_word.split('die')
#if there an argument given in split() it will split the string between those word given in split()
my_word_assemble = ' '.join(my_word_spilt)
#using .join() to join substring into one string
my_word_cast = list("Here")
print(my_word_spilt)
print(my_word_spilt2)
print(my_word_assemble)
print(my_word_cast)
print('.........................................')
print('abc',end='')
print('def')
print('ghi')
