/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.Date;

/**
 *
 * @author oscar
 */
public class Expense {
    
    public enum Category{
        RENT,TRANSPORTATION,FOOD,SHOPPING,ENTERTAINMENT,TRAVEL,INSURANCE,OTHER 
    }
    
    private String id;
    private Date date;
    private double cost;
    private Category category;
    
    public Expense(String id, Date date, double cost, Category category){
        this.id = id;
        this.date = date;
        this.cost = cost;
        this.category = category;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
    
}
