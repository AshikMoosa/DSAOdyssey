

num1=5
num2=3

def add(a,b):
    return a+b
    
def subtract(a,b):
    return a-b
    
def multiply(a,b):
    return a*b
    
def divide(a,b):
    return a/b
    
choices = """Enter your choice:
    1.Add
    2.Subtract
    3.Multiply
    4.Divide
    """
choice = int(input(choices))
match choice:
    case 1:  print(add(num1, num2)) 
    case 2:  print(subtract(num1, num2)) 
    case 3:  print(multiply(num1, num2)) 
    case 4:  print(divide(num1, num2)) 
    case _:  "Invalid Choice"
    