import math
def isPalindrome(x): 
  num = abs(x)
  rev = 0
  while(num > 0):
    rev = rev * 10 + (num % 10);
    num = math.floor(num / 10);
  
  return rev == x


print(isPalindrome(121))
