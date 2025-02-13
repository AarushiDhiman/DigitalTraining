package com.mindsprint.project1.OOPS.Abstraction;

abstract class Test{
    public abstract void display();

}
public class SampleAbstraction extends Test{
    @Override
    public void display() {
        System.out.println("Implemented Prent Method");
    }

    public static void main(String[] args) {
        Test test=new SampleAbstraction();
        test.display();
    }
}
