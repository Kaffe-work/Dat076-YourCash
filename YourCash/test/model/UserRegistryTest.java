/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author oscar
 */
public class UserRegistryTest {
    
    public UserRegistryTest() {
        
    }
    
    @BeforeClass
    public static void setUpClass() {
        
    }
    
    @AfterClass
    public static void tearDownClass() {
    }

    /**
     * Test of register method, of class UserRegistry.
     */
    @Test
    public void testRegister() {
        
        UserRegistry testReg = new UserRegistry();
        User testUser1 = new User("test1","test","01","pass");
        User testUser2 = new User("test2","testy","02","pass");
        testReg.register(testUser1);
        testReg.register(testUser2);
        
        assertTrue(testReg.findUser(testUser1.getUsername())!=null);
        assertTrue(testReg.findUser(testUser2.getUsername())!=null);
        
        /*
        System.out.println("register");
        UserRegistry instance = new UserRegistry();
        boolean expResult = false;
        boolean result = instance.register();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");*/
    }

    /**
     * Test of find method, of class UserRegistry.
     */
    @Test
    public void testFind() {
        
        UserRegistry testReg = new UserRegistry();
        User testUser1 = new User("test1","test","01","pass");
        User testUser2 = new User("test2","testy","02","pass");
        testReg.register(testUser1);
        testReg.register(testUser2);
       
        
        /*
        System.out.println("find");
        UserRegistry instance = new UserRegistry();
        User expResult = null;
        User result = instance.find();
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
        */
    }
    
}
