import math
def reverse(x): 
  sign = -1 if x < 0 else 1 # python dont have ? but uses if else for terniary 
  num = abs(x) # python has built in abs method
  rev = 0

  while (num > 0):
    rev = rev * 10 + (num % 10)
    num = math.floor(num / 10)

  return rev * sign

print(reverse(-123))