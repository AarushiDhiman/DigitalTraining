package com.mindsprint.project1.OOPS;

public class WaterBottle {
    int capacity;
    String color;
    String brand;

    public void setData(int capacity,String color,String brand) {
        this.capacity = capacity;
        this.color = color;
        this.brand=brand;
    }
    public void display(){
        System.out.println("----------------------");
        System.out.println("Brand: "+brand);
        System.out.println("color: "+color);
        System.out.println("capacity: "+capacity+ " ltr");
    }

    public static void main(String[] args) {
        WaterBottle b1=new WaterBottle();
        b1.setData(1, "Blue", "Notch");
        b1.display();
    }
}
