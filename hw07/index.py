## HW07
"""
def inc(x):
    return x + 1

f = inc

print f(10)

def h(x):
    return lambda y: x + y
print h(1)
print h(2)
print h(1)(3)
print h(2)(5)
b=h(1)
print b(4)
"""
def f(x):
    def g(y):
        return x + y
    return g
print f(1)(2)

def r1(num):
    newstr = ""
    for i in range(num):
        newstr += "hello"
    return newstr
def r2(num):
    newstr = ""
    for i in range(num):
        newstr += "goodbye"
    return newstr

print r1(2)
print r2(2)

def repeat(phrase):
    def loop(num):
        newstr = ""
        for i in range(num):
            newstr += phrase
        return newstr
    return loop
print repeat('cool')(3)
