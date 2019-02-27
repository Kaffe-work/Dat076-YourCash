/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

/**
 *
 * @author oscar
 */
public class User {
    
    
    private String name;
    private String password;
    private String id;
    
    public User(String name, String id, String password){
        this.name = name;
        this.password = password;
        this.id = id;
    }
    
}
