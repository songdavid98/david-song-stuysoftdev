"""
Software Development
LAB: List Comprehensions in Python
(HW06)

Here is one way to generate a list of consecutive integers:

nums = []
for x in range(8):
    nums.append(x)


Suppose you want a list of squares. You might modify the above as follows...

squares = []
for x in range(8):
    squares.append(x**2)


Now suppose you consider yourself 1337,
 have been writing list-generating loops 4evs, 
  and wish to concise-ify your code...


*******************************************************
Enter LIST COMPREHENSIONS --- some syntactic sugar to transform your list-processing loops into something resembling mathematical set notation.
*******************************************************


TASK: 
As you read below, test each example out for yourself in a Python shell or a .py file that will become HW06...



Here is how list comprehensions look and work in Python:
-------------------------------------------------------
A list comprehension consists of brackets containing an expression
 followed by a for clause,
 then zero or more for or if clauses.

The result will be a new list
 resulting from evaluating the expression
  in the context of the for and if clauses which follow it. 
-------------------------------------------------------


Exempli gratia, this will generate the same list as nums above:

[x for x in range(8)]



...and this will generate the same list as squares above:
    
[x*x for x in range(8)]


This listcomp will generate a list of tuples (immutable lists):

[ (x, x*x, x*x*x) for x in range(8) ]



=======================================================
Now suppose you would like to write a password validator...
=======================================================

Some pointers for revving up yer engine:

p="myNoobPass1234"

[x for x in p]  ->  ?

[x for x in "1234"]    ->  ?


UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

[ x for x in p if x in UC_LETTERS ]   ->  ?

[ 1 for x in p if x in UC_LETTERS ]   ->  ?

[ 1 if x in UC_LETTERS else 0 for x in p ]  ->  ?



YOUR TASK The First:
Write a function that uses list comprehension to return whether a password meets a minimum threshold: it contains a mixture of upper- and lowercase letters, and at least one number.


YOUR TASK The Second:
Write a function that uses list comprehension to return a password's strength rating. This function should return a low integer for a weak password and a higher integer for a stronger password. (Suggested scale: 1-10) 
Consider these criteria:
* mixture of upper- and lower-case
* inclusion of numerals
* inclusion of these non-alphanumeric chars: . ? ! & # , ; : - _ *

"""
p="Aa1!123456778987465"
UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc_letters="qwertyuiopasdfghjklzxcvbnm"
extra=".?!&#,;:-_*"
numbers = "0123456789"

def isValid(pw):
    
    up = [True for letter in pw if letter in UC_LETTERS]

    low = [True for letter in pw if letter in lc_letters]
    
    num = [True for letter in pw if letter in numbers]

    return True in up and True in low and True in num

print isValid(p)

def getStrength(pw):
    up = [True for letter in pw if letter in UC_LETTERS]

    low = [True for letter in pw if letter in lc_letters]
    
    num = [True for letter in pw if letter in numbers]

    ex = [True for letter in pw if letter in extra]
    
    strength = 0
    if (True in up):
        strength += 2
    if (True in low):
        strength += 1
    if (True in num):
        strength += 1
    if (True in ex):
        strength += 2
    if ( len(pw) >= 14 ):
        strength += 4
    elif ( len(pw) >= 11 ):
        strength += 3
    elif ( len(pw) >= 8 ):
        strength += 2
    elif ( len(pw) >= 5 ):
        strength += 1
        
    return strength

print getStrength(p);
