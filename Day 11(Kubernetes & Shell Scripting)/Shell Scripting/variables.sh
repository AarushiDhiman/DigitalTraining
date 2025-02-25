# Environment variables
# inherited by script from parent shell

echo "Current User: $(whoami)"
echo "Home Directory: $HOME"


# Create constant Variables
readonly PI=3.14
echo "Value of PI: $PI"
#PI=3.89 #This line will throw error

# SPECIAL VARIABLES
echo "No of Argument: $#"
echo "First Argument: $1"
echo "Second Argument: $2"
echo "Third Argument: $3"