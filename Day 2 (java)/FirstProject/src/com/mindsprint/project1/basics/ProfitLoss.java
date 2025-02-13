package com.mindsprint.project1.basics;
import java.util.Scanner;
public class ProfitLoss {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter Selling Price:");
        int sellingPrice=scanner.nextInt();
        System.out.println("Enter Purchase Price:");
        int purchasePrice =scanner.nextInt();

        String result=(sellingPrice>purchasePrice )? "Profit of "+ (sellingPrice-purchasePrice ) : "Loss of"+(sellingPrice-purchasePrice );
        System.out.println(result);
    }
}
