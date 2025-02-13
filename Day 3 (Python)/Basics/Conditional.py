age=int(input("Enter your age: "))
if age >18:
    print("You are eligible to vote")
elif age <18:
    print("You are not eligible to vote")
else:
    print("Enter correct age")


#Ternary (shorthand) if statement
num=5
print("Positive") if num>0 else print("Negative")




#Nested if statement
number = int(input("Enter any number: "))
if number>0:
    if number%2==0:
        print("Positive Even Number")
    else:
        print("Positive Odd Number")
else:
    print("Non-Positive Number")


#GRADING SYSTEM
Marks=int(input("Enter your marks: "))
if Marks>=90 and Marks<=100:
    print("Grade A")
elif Marks>=69 and Marks<=89:
    print("Grade B")
elif Marks>=50 and Marks<=69:
    print("Grade C")
elif  Marks<=50:
    print("Fail")
else:
    print("Invalid Marks")


#CHECKING POSITIVE ,NEGATIVE NUMBER
n=int(input("Enter any number:"))
if n==0:
        print("Zero")
elif n>0:
        if n%2==0:
            print("Positive Even Number")
        else:
            print("Positive Odd Number")
elif n<0:
        if n<-10:
           print("Number is less than -10")
else:
    print("Invalid Number")