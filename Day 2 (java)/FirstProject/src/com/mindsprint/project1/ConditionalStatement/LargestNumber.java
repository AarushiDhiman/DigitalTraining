package com.mindsprint.project1.ConditionalStatement;

import java.util.Scanner;

public class LargestNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any number");
        int num1 = sc.nextInt();
        System.out.println("Enter any number");
        int num2 = sc.nextInt();
        int result = (num1>num2)? num1:num2;
        System.out.println(result);
    }
}
