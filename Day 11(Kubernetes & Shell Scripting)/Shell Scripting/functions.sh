#!/bin/bash

echo "-------Function to add two numbers--------"
add_numbers(){
    sum=$(( $1+ $2 ))
    echo "Sum of $1 and $2 is: $sum"
}

# calling the function with two numbers
add_numbers 10 20


echo "-------Function to check if a file exists------"
check_file(){
    if [ -f "$1" ];then
        echo "File $1 exists."
    else
        echo "File $2 does not exist."
    fi
}

# calling the function with a filename
check_file "testfile.txt"