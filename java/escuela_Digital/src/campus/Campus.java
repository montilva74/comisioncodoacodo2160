
package campus;

public class Campus {
    public int id;
    public String nombre;
    private String password;
    public void setPassword(String pass) {
        this.password=password;
    }
    
    public String getPassword() {
        return this.password;
    }
    public Campus(int id, String nombre){
        this.id=id;
        this.nombre=nombre;
    }
    public boolean ingresar(int id, String password){
        return this.id==id && this.password.equals(password);
    }
}
