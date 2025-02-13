#For loop
for num in range(1,10):
    print("Numbers : ",num)

#While loop

print("Odd numbers less than 20 :",end="")
count=1
while count<=20:
     print(count)
     count+=2


#While with break

count=0
while count<5:
     if count ==3:
          print("Breaking the loop at count 3")
          break
     print("Count: ",count)
     count+=1