#List
li =[1,2,'Aarushi','Honey',3,4]
print(li)
print(" ")
print(li[2]) #accessing using index
print(" ")
li.append('Dugu') #append
print(li)

print(" ")
#insert element at some index
li.insert(2,'Gugu')
print(li)

#length of list
print("Length of list: ",len(li))

#check membership
print("Aarushi" in li)

#slicing
print(li[1:3])


#accessing using loop
for i in li:
    print(i)

#sorting
mylist=[1,4,5,6,7,3,8,6]
mylist.sort()
print("list after sorting in ascending order: ",mylist)
mylist.sort(reverse=True)
print("list after sorting in descending order",mylist)
mylist.reverse()
print("list after reversing: ",mylist)


#Sort Way to create a list
squares=[x**2 for x in range(1,11)]
print("List of squares till 10: ",squares)

