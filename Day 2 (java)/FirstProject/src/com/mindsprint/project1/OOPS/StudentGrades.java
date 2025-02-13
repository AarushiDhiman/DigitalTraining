package com.mindsprint.project1.OOPS;

public class StudentGrades {
    String name;
    int[] grade;

    public StudentGrades(String name, int[] grade) {
        this.name = name;
        this.grade = grade;
    }

    public double CalculateAverage(){
        int sum=0;
        for(int grades:grade){
            sum+=grades;
        }
        return (double) sum/grade.length;
    }

    public void display(){
        System.out.println("Name: "+name);
        System.out.println("Average Grade: "+CalculateAverage());
    }

    public static void main(String[] args) {
        int[]grade={80,85,95,80,90};
        StudentGrades s1= new StudentGrades("Aarushi",grade);
                s1.display();
    }
}