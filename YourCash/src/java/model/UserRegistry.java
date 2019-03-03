/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/**
 *
 * @author oscar
 */
public class UserRegistry implements Iterable{
    
    private List<User> userList = new ArrayList();
    
    public UserRegistry(){
    
    }
    
    public boolean register(User newUser){
        
        
        if(findUser(newUser.getUsername())==null){
            iterator().add(newUser);
            return true;
        }
        return false;

    }
    
    public User findUser(String username){
        
        while(iterator().hasNext()){
            User user = iterator().next();
            if(user.getUsername().equals(username))
                return user;
        }
        return null;
    }
    
    @Override
    public ListIterator<User> iterator(){
        return userList.listIterator();
    }
    
}
