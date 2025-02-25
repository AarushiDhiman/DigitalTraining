# !/bin/bash
# If else


echo "-------FOR LOOP---------"
for i in {1..15}
do 
   echo "Number: $i"
done

echo "--------WHILE LOOP--------"
count=1
while [ $count -le 5 ]
do 
   echo "Iteration: $count"
   ((count++))
done