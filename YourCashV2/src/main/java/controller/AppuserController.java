package controller;

import facade.AppuserFacade;
import com.mycompany.yourcashv2.beans.Appuser;
import com.mycompany.yourcashv2.util.JsfUtil;
import com.mycompany.yourcashv2.util.PaginationHelper;
import java.io.IOException;

import java.io.Serializable;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.Writer;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;
import javax.ejb.EJB;
import javax.inject.Named;
import javax.enterprise.context.SessionScoped;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.convert.Converter;
import javax.faces.convert.FacesConverter;
import javax.faces.model.DataModel;
import javax.faces.model.ListDataModel;
import javax.faces.model.SelectItem;
import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import javax.json.JsonReader;
import javax.json.JsonWriterFactory;
import javax.json.stream.JsonGenerator;
import javax.persistence.Query;

@Named("appuserController")
@SessionScoped
public class AppuserController implements Serializable {

    private Appuser loggedIn;
    private Appuser user;
    private DataModel items = null;
    @EJB
    private facade.AppuserFacade ejbFacade;
    private PaginationHelper pagination;
    private int selectedItemIndex;
    private JsonObjectBuilder jOBuilder;
    private JsonArrayBuilder jArrBuilder;

    public AppuserController() {
    }
    
    public String testJson(){
        loggedIn = new Appuser();
        //loggedIn.setUsername("TestJson");
        //loggedIn.setName("Testimon");
        //loggedIn.setPasword("TestPas");
        loggedIn = ejbFacade.find("g");
        return toJSON(createJsonObject());
    }
    
    public String testJsonArray(){
        List<Appuser> users;
        users = ejbFacade.findAll();
        return (toJSON(createJSONArray(users)));
        
    }
   
    
    
    public JsonObject createJsonObject(){
        jOBuilder = Json.createObjectBuilder();
        jOBuilder.add("username", loggedIn.getUsername())
                .add("name", loggedIn.getName())
                .add("password", loggedIn.getPasword());
        return jOBuilder.build();
        
    }
    
    public JsonObjectBuilder getJObject(Appuser user){
        jOBuilder = Json.createObjectBuilder();
        jOBuilder.add("username", user.getUsername())
                .add("name", user.getName())
                .add("password", user.getPasword());
        return jOBuilder;
    }
    
    public String toJSON(JsonObject jObject){
        
        Map<String, Boolean> config = new HashMap<>();
        
        config.put(JsonGenerator.PRETTY_PRINTING, true);
        
        JsonWriterFactory writerFactory = Json.createWriterFactory(config);
        
        String jsonString;
        Writer writer = new StringWriter(); 
        writerFactory.createWriter(writer).write(jObject);
        jsonString = writer.toString();
        System.out.print(jsonString);
        return jsonString;
    }
    
    
    
    private Appuser fromJSON(String jsonString){
        JsonReader reader = Json.createReader(new StringReader(jsonString));
        JsonObject jsonObject = reader.readObject();
        
        Appuser user = new Appuser();
        user.setUsername(jsonObject.getString("username"));
        user.setUsername(jsonObject.getString("name"));
        user.setUsername(jsonObject.getString("password"));
        
        return user;
    }
    
    private JsonObject createJSONArray(List<Appuser> users){
        
        jArrBuilder = Json.createArrayBuilder();
        
        for(Appuser user: users){
            jArrBuilder.add(getJObject(user));
        }
        
        jOBuilder = Json.createObjectBuilder();
        jOBuilder.add("users",jArrBuilder);
        
        return jOBuilder.build();
    }
    

    public Appuser getSelected() {
        if (user == null) {
            user = new Appuser();
            selectedItemIndex = -1;
        }
        return user;
    }

    private AppuserFacade getFacade() {
        return ejbFacade;
    }

    public PaginationHelper getPagination() {
        if (pagination == null) {
            pagination = new PaginationHelper(10) {

                @Override
                public int getItemsCount() {
                    return getFacade().count();
                }

                @Override
                public DataModel createPageDataModel() {
                    return new ListDataModel(getFacade().findRange(new int[]{getPageFirstItem(), getPageFirstItem() + getPageSize()}));
                }
            };
        }
        return pagination;
    }

    public String prepareList() {
        recreateModel();
        return "List";
    }

    public String prepareView() {
        user = (Appuser) getItems().getRowData();
        selectedItemIndex = pagination.getPageFirstItem() + getItems().getRowIndex();
        return "View";
    }

    public String prepareCreate() {
        user = new Appuser();
        selectedItemIndex = -1;
        return "Create";
    }

    public String create() {
        try {
            getFacade().create(user);
            JsfUtil.addSuccessMessage(ResourceBundle.getBundle("/Bundle").getString("AppuserCreated"));
            return prepareCreate();
        } catch (Exception e) {
            JsfUtil.addErrorMessage(e, ResourceBundle.getBundle("/Bundle").getString("PersistenceErrorOccured"));
            return null;
        }
    }

    public String prepareEdit() {
        user = (Appuser) getItems().getRowData();
        selectedItemIndex = pagination.getPageFirstItem() + getItems().getRowIndex();
        return "Edit";
    }

    public String update() {
        try {
            getFacade().edit(user);
            JsfUtil.addSuccessMessage(ResourceBundle.getBundle("/Bundle").getString("AppuserUpdated"));
            return "View";
        } catch (Exception e) {
            JsfUtil.addErrorMessage(e, ResourceBundle.getBundle("/Bundle").getString("PersistenceErrorOccured"));
            return null;
        }
    }

    public String destroy() {
        user = (Appuser) getItems().getRowData();
        selectedItemIndex = pagination.getPageFirstItem() + getItems().getRowIndex();
        performDestroy();
        recreatePagination();
        recreateModel();
        return "List";
    }

    public String destroyAndView() {
        performDestroy();
        recreateModel();
        updateCurrentItem();
        if (selectedItemIndex >= 0) {
            return "View";
        } else {
            // all items were removed - go back to list
            recreateModel();
            return "List";
        }
    }

    private void performDestroy() {
        try {
            getFacade().remove(user);
            JsfUtil.addSuccessMessage(ResourceBundle.getBundle("/Bundle").getString("AppuserDeleted"));
        } catch (Exception e) {
            JsfUtil.addErrorMessage(e, ResourceBundle.getBundle("/Bundle").getString("PersistenceErrorOccured"));
        }
    }

    private void updateCurrentItem() {
        int count = getFacade().count();
        if (selectedItemIndex >= count) {
            // selected index cannot be bigger than number of items:
            selectedItemIndex = count - 1;
            // go to previous page if last page disappeared:
            if (pagination.getPageFirstItem() >= count) {
                pagination.previousPage();
            }
        }
        if (selectedItemIndex >= 0) {
            user = getFacade().findRange(new int[]{selectedItemIndex, selectedItemIndex + 1}).get(0);
        }
    }

    public DataModel getItems() {
        if (items == null) {
            items = getPagination().createPageDataModel();
        }
        return items;
    }

    private void recreateModel() {
        items = null;
    }

    private void recreatePagination() {
        pagination = null;
    }

    public String next() {
        getPagination().nextPage();
        recreateModel();
        return "List";
    }

    public String previous() {
        getPagination().previousPage();
        recreateModel();
        return "List";
    }

    public SelectItem[] getItemsAvailableSelectMany() {
        return JsfUtil.getSelectItems(ejbFacade.findAll(), false);
    }

    public SelectItem[] getItemsAvailableSelectOne() {
        return JsfUtil.getSelectItems(ejbFacade.findAll(), true);
    }

    public Appuser getAppuser(java.lang.String id) {
        return ejbFacade.find(id);
    }
    
    public String login(){
        Appuser compareUser = getAppuser(user.getUsername());
        if(compareUser.getPasword().equals(user.getPasword())){
            System.out.println("Username:"+user.getUsername());
            loggedIn = compareUser;
            return "/pages/Home";
        }
        else{
            return "/appuser/Login";
        }
        
        
            
    }

    @FacesConverter(forClass = Appuser.class)
    public static class AppuserControllerConverter implements Converter {

        @Override
        public Object getAsObject(FacesContext facesContext, UIComponent component, String value) {
            if (value == null || value.length() == 0) {
                return null;
            }
            AppuserController controller = (AppuserController) facesContext.getApplication().getELResolver().
                    getValue(facesContext.getELContext(), null, "appuserController");
            return controller.getAppuser(getKey(value));
        }

        java.lang.String getKey(String value) {
            java.lang.String key;
            key = value;
            return key;
        }

        String getStringKey(java.lang.String value) {
            StringBuilder sb = new StringBuilder();
            sb.append(value);
            return sb.toString();
        }

        @Override
        public String getAsString(FacesContext facesContext, UIComponent component, Object object) {
            if (object == null) {
                return null;
            }
            if (object instanceof Appuser) {
                Appuser o = (Appuser) object;
                return getStringKey(o.getUsername());
            } else {
                throw new IllegalArgumentException("object " + object + " is of type " + object.getClass().getName() + "; expected type: " + Appuser.class.getName());
            }
        }

    }
    
    
   
}
