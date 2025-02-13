def greet():
    print("Hello, Guys")

greet()


def greet_user(name):
    print("Namaste!!!",name)

greet_user('Aarushi')


#multiple paramenters
def multiply(a,b):
    return a*b
result= multiply(2,3)
print("The multiplication of two numbers is:",result)

#default parameters
def greet_user(name='Guest'):
    print(f"Namaste!!!,{name} neevu heggidira!!")