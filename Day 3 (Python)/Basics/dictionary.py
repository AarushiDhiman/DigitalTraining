employee={
    "eid":101,
    "name":"Honey",
    "department":"IT",
    "salary":250000
}

print(employee)
print("emplyee id: ",employee["eid"])
print("employee name: ",employee.get("name"))
print("manager: ",employee.get("manager","Aarushi"))



print("")
for key in employee:
    print(key,":",employee[key])

print(employee.items())