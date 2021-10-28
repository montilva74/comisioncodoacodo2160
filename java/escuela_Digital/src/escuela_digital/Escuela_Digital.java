/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package escuela_digital;

import alumnos.Alumnos;
import campus.Campus;
import docente.Docente;

public class Escuela_Digital {

    public static void main(String[] args) {
        Docente docente1 = new Docente(12,"Alba","Montilva",35);
        Alumnos alumno = new Alumnos (14,"Pedro","Escalante",36,10);
        Campus campus = new Campus(14,"DFSJ");
        campus.setPassword("123456");
        Campus docente = new Campus(12, "WEB");
        docente.setPassword("123456");
        System.out.println(docente.ingresar(12, "123456"));
        
    }
    
}
