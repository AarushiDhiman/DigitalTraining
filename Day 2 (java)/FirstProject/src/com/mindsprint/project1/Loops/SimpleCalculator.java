package com.mindsprint.project1.Loops;

import java.util.Scanner;

public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while(true) {
            System.out.println("Enter any number: ");
            double num1 = sc.nextDouble();
            System.out.println("Enter any number: ");
            double num2 = sc.nextDouble();
            System.out.println("Enter + for Addition \n - for Subtraction \n * for multiplication \n / for Division");
            String input = sc.next();
            switch (input) {
                case "+":
                    System.out.println("Addition: " + (num1 + num2));
                    break;
                case "-":
                    System.out.println("Subtraction: " + (num1 - num2));
                    break;
                case "*":
                    System.out.println("Multiplication: " + (num1 * num2));
                    break;
                case "/":
                    System.out.println("Division: " + (num1 / num2));
                    break;
                default:
                    System.out.println("Kindly enter correct operator");
            }
            System.out.println("Enter y to continue or press any to exit");
            String op = sc.next();
            if (op.equals("y") || op.equals("Y"))
                continue;
            else break;
        }

    }
}
