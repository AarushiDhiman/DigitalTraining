employee={ 

    "emp1": {"id":101,"name":"Honey","department":"IT","salary":250000},
    "emp2": {"id":102,"name":"Aarushi","department":"HR","salary":200000},
    "emp3": {"id":103,"name":"Gugu","department":"Finance","salary":300000},
    "emp4": {"id":104,"name":"Dugu","department":"Sales","salary":300000}
}
def add_employee(id,name,department,salary):
    n=len(employee)
    employee["emp"+str(n+1)]={"id":id,"name":name,"department":department,"salary":salary}
    print("Employee added successfully")


def update_employee(id,salary):
    for emp in employee:
        if employee[emp]["id"]==id:
            employee[emp]["salary"]=salary
            print("Employee updated successfully")
            break

def remove_employee(id):
    for emp in employee:
        if employee[emp]["id"]==id:
            del employee[emp]
            print("Employee removed successfully")
            break

def print_employees(employees):
    for emp in employees:
        print("**********************")
        for key,value in employees[emp].items():
            print(key,":",value)


add_employee(105,"Oreo","Marketing",200000)
update_employee(101,550000)
remove_employee(101)
print_employees(employee)