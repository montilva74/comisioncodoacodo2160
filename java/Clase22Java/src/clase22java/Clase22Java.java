
package clase22java;

import java.util.Scanner;


public class Clase22Java {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Ingrese su nombre");
        String nombre = entrada.nextLine();
        System.out.println("Ingrese su apellido");
        String apellido = entrada.nextLine();
        System.out.println("Ingrese su edad!");
        int edad = entrada.nextInt();
        System.out.println("Ingrese su hobbie!");
        String hobbie = entrada.nextLine();
        System.out.println("Ingrese su editor de código preferido!");
        String editorDeCodigo = entrada.nextLine();
        System.out.println("Ingrese el sistema operativo que utiliza!");
        String sistemaOperativo = entrada.nextLine();
        System.out.println("Bienvenid@ " + nombre);
        System.out.println("Su apellido es: " + apellido);
        System.out.println("Su edad es: " + edad);
        System.out.println("Su hobbie es: " + hobbie);
        System.out.println("Su editor de código favorito es: " + editorDeCodigo);
        System.out.println("El sistema operativo que utiliza es: " + sistemaOperativo);
        /*System.out.println("Ingrese su contraseña");
        String pass = entrada.nextLine();
        Ingreso ingresar = new Ingreso();
        ingresar.setUsuario(nombre);
        ingresar.setPass(pass);
        if(ingresar.validar()){
            System.out.println("Bienvenid@ " + ingresar.getUsuario());
        }else {
            System.out.println("Los datos son incorrectos");
        }*/
    }
    
}
