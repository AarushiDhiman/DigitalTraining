package com.mindsprint.project1.Loops;

import java.util.Scanner;

public class FibonacciSeries {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Last number");
        int n=sc.nextInt();

        int first=0;
        int second=1;

        System.out.println("Fibonacci series is : ");
        for(int i = 1;i<=n;++i){
            System.out.print(first+" ");

            //compute the next term
            int next=first+second;
            first=second;
            second=next;
        }

    }
}
