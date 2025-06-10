# Pattern 1
for i in range(5):
    for j in range(5):
        print("*", end="") #for printing without line breaks
    print("")

# Pattern 2
for i in range(5):
    for j in range(i+1):
        print("*", end="")
    print("")

# Pattern 3
for i in range(1,6):
    for j in range(1,i+1):
        print(j, end="")
    print("")

# Pattern 4
for i in range(1,6):
    for j in range(1,i+1):
        print(i, end="")
    print("")

# Pattern 5
for i in range(5,0, -1):
    for j in range(1,i+1):
        print("*", end="")
    print("")

# Pattern 6
for i in range(5,0, -1):
    for j in range(1,i+1):
        print(j, end="")
    print("")