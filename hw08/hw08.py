#hw08

def union(a, b):
    newlist = b  
    [newlist.append(element) for element in setDiff(a, b)]
    return newlist

def intersection(a, b):
    return [element for element in a if element in b]

def setDiff(a, b):
    return [element for element in a if element not in b]

def symmDiff(a, b):
    return setDiff( union(a, b), intersection(a, b) )

def cartProd(a, b):
    return [(elementa, elementb) for elementa in a for elementb in b]

l1 = [1, 2, 3, 4]
l2 = [0, 2, 3, 5]

print union(l1, l2)
print intersection(l1, l2)
print setDiff(l1, l2)
print cartProd(l1, l2)
