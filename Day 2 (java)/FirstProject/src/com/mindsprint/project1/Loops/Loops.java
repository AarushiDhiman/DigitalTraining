package com.mindsprint.project1.Loops;

public class Loops {
    public static void main(String[] args) {
        System.out.println("For Loop");
        for(int i=1;i<=10;i++){
            System.out.print(i+",");
        }

        System.out.println("\nWhile Loop");
        int i=1;
        while(i<=10){
            System.out.print(i + ",");
            i++;
        }
        System.out.println("\nDo While Loop");
        do{
            System.out.print(i+",");
            i++;
        }while(i<12);
    }
}

