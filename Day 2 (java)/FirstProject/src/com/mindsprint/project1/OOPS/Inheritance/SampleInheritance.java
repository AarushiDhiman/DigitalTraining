package com.mindsprint.project1.OOPS.Inheritance;
class Parent{
    public String name="Test";
    public Parent(){
        System.out.println("Parent Class Constructor");
    }
    public void hello(){
        System.out.println("Hello From Parent");
    }
}
class Child extends Parent{
    public Child(){
        super(); //calling parent class constructor
        System.out.println("Child Constructor");
    }
    public void print(){
        System.out.println("Welcome "+name);
        //Child can access properties of parent class
    }
}
public class SampleInheritance {
    public static void main(String[] args) {
        Child child= new Child();
        child.print();
        child.hello();//Child can access method of parent class
        System.out.println(child.name);//direct access
    }
}