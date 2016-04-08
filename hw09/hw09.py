#hw09

import time

def wrapper( f ):
   
      
   def inner( *arg ):
      stime = time.time()
      replacement = f( *arg )
      etime = time.time()
      print f.func_name + " time: " + str(etime - stime)
      return replacement
   
   
   return inner

@wrapper
def foo(*args):
   i = 1
   lols = "lols"
   nana = "nana"
   for a in args:
      print a
      print "argument " + str(i) + ": "
      
      lols *= i
      print lols
      print "trol" + lols
      i += 1
      
      nana *= i
      print nana
      print ""
   print "batman"
   print ""

foo( -2, 3, 'hello' )
