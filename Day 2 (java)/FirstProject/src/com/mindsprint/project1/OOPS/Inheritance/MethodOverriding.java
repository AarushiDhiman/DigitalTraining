package com.mindsprint.project1.OOPS.Inheritance;
import java.io.PrintStream;

class ParentPhone{
    public void call(){
        System.out.println("Parent phone is calling");
    }
}
class ChildPhone extends ParentPhone{
    public void call(){
        super.call();//call parent method as well
        System.out.println("Child phone is calling");
    }
}
public class MethodOverriding {
    public static void main(String[] args) {
        ChildPhone alex= new ChildPhone();
        alex.call();
        System.out.println();

    }
}