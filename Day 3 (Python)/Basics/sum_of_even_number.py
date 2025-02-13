num1 = int(input("Enter first number: "))
num2 = int(input("Enter last number: "))
sum=0
for num in range(num1,num2+1):
    if num%2==0:
        sum+=num
    else:
        continue
print("Sum of even numbers between ",num1," and ",num2," is ",sum)