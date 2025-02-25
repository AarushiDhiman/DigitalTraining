# !/bin/bash
# Case Example
echo "-------- CASE EXAMPLE--------------"
echo "Enter your choice (Start / stop / restart ):"
read choice
case $choice in
   start)
       echo "Starting the service...."
       ;;
    stop)
        echo "Stopping the service...."
        ;;
    restart)
        echo "Restarting the service...."
        ;;
    *)
        echo "Invalid Choice. PLEASE!! Enter start , stop , restart. "
        ;;
    
esac