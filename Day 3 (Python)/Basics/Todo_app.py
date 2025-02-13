todoli=[]
print("Welcome to yaad karo kya karna hai then add kro, kaam karo or firr remove kardo!!!\n")

def add_todo():
    print("Yaad karo kaam jo krna hai: ")
    task=input()
    todoli.append(task)
    print("Your kaam added successfully")
    print(" ")

def remove_todo():
    print("Kaam kr liya to delete karo: ")
    task=input()
    todoli.remove(task)
    print("Your kaam removed successfully")
    print(" ")

def view_all_todo():
    if len(todoli)==0:
        print("Sab karr liya bhai aapne!!! Kya baat hai !!!")
        print(" ")
        return
    print("Present tasks in Todo List:")
    for i in todoli:
        print(f"Task{i} to  be completed: ",i)
    print(" ")


while True:
    print("1. Add a task")
    print("2. Remove a task")
    print("3. View all tasks")
    print("4. Exit")
    choice=int(input("Enter your choice: "))
    if choice==1:
        add_todo()
    elif choice==2:
        remove_todo()
    elif choice==3:
        view_all_todo()
    elif choice==4:
        break
    else:
        print("Invalid choice. Please try again")