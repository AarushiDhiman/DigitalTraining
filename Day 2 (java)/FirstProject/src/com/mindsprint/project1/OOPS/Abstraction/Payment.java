package com.mindsprint.project1.OOPS.Abstraction;
import java.util.Scanner;

interface PaymentMethod{
    public void pay();
}
class Paypal implements PaymentMethod{
    @Override
    public void pay(){
        System.out.println("Payment done using Paypal");
    }
}
class RazorPay implements PaymentMethod{
    @Override
    public void pay(){
        System.out.println("Payment done using RazorPay");
    }
    public void businessLogic(){
        System.out.println("Logic Executed");
    }
}
public class Payment {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Select your payment method");
        String method= sc.next();
        PaymentMethod pm=null;
        if(method.equals("Paypal")){
            pm= new Paypal();
        }else{
            pm= new RazorPay();
        }
        pm.pay();

        //Here the reference object created based on PaymentMethod
        //So you can call only pay method of Razor Pay
        //If you try to access any other they are not accessible
        //Taking the refrence Type of Interface and creating an object
        //of you class can help you to achieve an abstraction

    }
}