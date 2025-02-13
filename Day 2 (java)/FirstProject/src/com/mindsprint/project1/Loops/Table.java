package com.mindsprint.project1.Loops;

import java.util.Scanner;

public class Table {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter any number: ");
        int num1 = sc.nextInt();
        for(int i=1;i<=10;i++) {
            System.out.println(num1 + " X " + i + "="+ (num1*i));
        }
    }
}
