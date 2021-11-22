package operaciones;

public class Operaciones {
    public float num, num2;
    public String op;
    public Operaciones(float num, float num2, String op) {
        this.num=num;
        this.num2=num2;
        this.op=op;
    }
    public float operacion() {
        return switch (op) {
            case "+" -> num + num2;
            case "-" -> num - num2;
            case "*" -> num * num2;
            case "/" -> num / num2;
            default -> 0;
        };
    }
}