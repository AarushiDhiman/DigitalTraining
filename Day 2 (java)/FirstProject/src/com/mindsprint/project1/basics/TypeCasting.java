package com.mindsprint.project1.basics;

import java.sql.SQLOutput;

public class TypeCasting {
    public static void main(String[] args) {
        short data1 = 10;
        float data2 = data1;
        System.out.println("Data2: " +data2); // implicit

        double info=78.78;
        int info1=(int) info;
        System.out.println("Info: "+info1);


        char a='A';
        System.out.println("ASCII NO: "+ (int)a);
        System.out.println("ASCII NO: "+ (char)+((int)a+32));

    }
}
