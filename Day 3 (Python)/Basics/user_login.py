def user_login(email,password):
    if email=="ad123@gmail.com" and password==12345:
        print("Login Successful")
        print("Welcome bro!!!!")
    else:
        print("Invalid login credentials")

user_login("ad123@gmail.com",12345)
user_login("admin123@gmail.com",123)

email=input("Enter your email:")
password=int(input("Enter your password:"))
user_login(email,password)