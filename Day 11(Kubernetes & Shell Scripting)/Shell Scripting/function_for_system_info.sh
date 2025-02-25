echo " "
echo "------------Function to display system info-----------"

system_info(){
    echo "Operating System: $(uname -o)"
    echo "Kernel Version: $(uname -r)"
    echo "Disk Usage: " 
    df -h  | grep '^/dev/'
}

#calling the function
system_info