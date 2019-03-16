/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlet;

import controller.AppuserController;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

/**
 *
 * @author oscar
 */
@Path("/YourCash/faces/jsonTest")
public class jaxTest {
    
    private AppuserController aC;
    
    @GET
    @Path("/getUser")
    public String text(){
        
        return null;
    }
    
}
