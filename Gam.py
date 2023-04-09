import random
def guess():
    n=str(random.randint(100,999))
    if len(set(n))!=3:
        guess()
    return n

n=guess()
i=0
print("You have 10 guess")
while i<=10:
    gnum=str(input("Enter Your Guess: "))
    win=0
    close=0
    for i in range(3):
        if n[i]==gnum[i]:
            win+=1
        if n[i] in gnum:
            close+=1
    if win==3:
        print("You guessed It!")
        break
    elif win!=0:
        print("MATCH")
    elif close!=0:
        print("CLOSE")
    else:
        print("NOPE")
print("Ans: ",n)
        
            
            
            
    
            
            
        
    
