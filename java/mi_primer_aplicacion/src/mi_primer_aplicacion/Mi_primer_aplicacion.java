
package mi_primer_aplicacion;

public class Mi_primer_aplicacion {
   
    public static void main(String[] args) {
        int $numero;
        String nombre;
        float procentaje;
        boolean llueve = true;
        $numero=13;
        float resultado;
        resultado = $numero +19;
        System.out.println("Hola esta es mi primer aplicación");
        System.out.println(resultado);
        System.out.println(45 > 19 != 19 < 32);
        if(llueve == true){
            System.out.println("Usamos paraguas");
        }else{
            System.out.println("No usamos paraguas");
        }
        Juego jugador = new Juego(0,3,"Mario ","Hongos","Martillo");
        Juego jugador1 = new Juego(0,3,"Pedro ","Hongos","Martillo");

        System.out.println("Mi nombre es " + jugador.personaje);
        System.out.println("Tengo: " + jugador.vidas + " Vidas");
        System.out.println(jugador.mostrarSaludo());
        System.out.println(jugador1.mostrarSaludo());
    } 
}
