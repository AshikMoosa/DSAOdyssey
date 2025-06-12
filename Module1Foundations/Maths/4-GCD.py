def gcd(n1, n2):
  n1 = abs(n1)
  n2 = abs(n2)  

  while(n2 != 0): 
    temp = n2
    n2 = n1 % n2
    n1 = temp
  return n1

print(gcd(9, 12))
