package com.mindsprint.project1.ConditionalStatement;

import java.util.Scanner;

public class CheckEvenOdd {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter any number: ");
        int num= sc.nextInt();
        if(num/2==0){
            System.out.println("Number is Even");
        }
        else{
            System.out.println("Number is odd");
        }
    }
}
