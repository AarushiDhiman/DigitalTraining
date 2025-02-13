package com.mindsprint.project1.Loops;

public class NestedLoops {
    public static void main(String[] args) {
        for(int i=1;i<=5;i++){
            for(int j =1; j<=i; j++){
                System.out.print(" * ");
                System.out.print(i+" ");
            }
            System.out.println();
        }
    }
}
