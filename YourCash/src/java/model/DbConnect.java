/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Oscar Orava Kilberg
 */
public class DbConnect {
    
    private final String url = "jdbc:postgresql://localhost/yourcash";
    private final String user = "postgres";
    private final String password = "";
    
    public Connection connect(){
        Connection conn = null;
        try{
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Connected to PSQL server succesfully");
        }
        catch(SQLException e){
            System.out.println(e.getMessage());
            
        }
        return conn;
    }
    public static void main(String[] args){
        DbConnect dbConn = new DbConnect();
        dbConn.connect();
    }
    
}
