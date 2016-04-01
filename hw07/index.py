## HW07

def r1(num):
    return repeat("hello")(num)
def r2(num):
    return repeat("goodbye")(num)
    
def repeat(phrase):
    def loop(num):
        newstr = num*phrase        
        return newstr
    return loop

print r1(2)
print r2(2)
print repeat('cool')(3)
