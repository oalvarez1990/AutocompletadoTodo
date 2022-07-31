import java.io.*;

public class fiestamatrimonio_12 {

	public static void main(String args[]) throws IOException {
		BufferedReader bufEntrada = new BufferedReader(new InputStreamReader(System.in));
		int cantidabono;
		int cantidadregalo;
		int cantidadsobre;
		double cuentanegativos;
		double i;
		int opc;
		double suma;
		double sumamayoresacuatro;
		double sumaopciondos;
		double sumaopciontres;
		double sumaopcionuno;
		int vbo;
		// Definir variables 
		// Iniciliazar variables  
		opc = 0;
		// Ingresar datos por el usuario
		System.out.println("Usted trajo el regalo 1.Si 2.No");
		vbo = Integer.parseInt(bufEntrada.readLine());
		if (vbo>0 && vbo<3) {
			if (vbo==2) {
				System.out.println("Señor invitado NO Puede Ingresar a la FIESTA, deje la tacañez");
			} else {
				for (i=0;i<=5;i++) {
					System.out.println("Escoja una opcion de regalo: "+"Invitado N. "+i);
					System.out.println("1. Sobre  con dinero ");
					System.out.println("2. Relago para novios");
					System.out.println("3. Bono, almacen Casa Bonito");
					opc = Integer.parseInt(bufEntrada.readLine());
					// Validad ingreso de datos seleccionados sean 1-2-3
					if (opc>0 && opc<4) {
						// Totalizar invitados a la fiesta
						suma = suma+opc;
						if (opc==1) {
							sumaopcionuno = sumaopcionuno+opc;
						} else {
							if (opc==2) {
								sumaopciondos = sumaopciondos+opc;
							} else {
								if (opc==3) {
									sumaopciontres = sumaopciontres+opc;
									if (opc>0) {
										cuentanegativos = cuentanegativos+opc;
									} else {
										if (opc<4) {
											sumamayoresacuatro = sumamayoresacuatro+opc;
										}
									}
								}
							}
						}
					} else {
						System.out.println("Numeros fuera de rango 1-3");
					}
				}
			}
		} else {
			System.out.println("El numero esta fuera de rango 1-2");
		}
		// Imprimir 
		System.out.println("");
		System.out.println("Total regalos en la fiesta:         "+suma);
		System.out.println("");
		System.out.println("Los regalos fueron compuestos asi: ");
		System.out.println("");
		System.out.println("Cantidad de Sobre con dinero        "+sumaopcionuno);
		System.out.println("Cantidad con Solo regalos           "+sumaopciondos);
		System.out.println("Canitdad con Bonos para Casa Bonito "+sumaopciontres);
		System.out.println("");
		System.out.println("Ingresos datos menor a cero         "+cuentanegativos);
		System.out.println("Ingreso datos mayor igual a 4       "+sumamayoresacuatro);
	}


}

Algoritmo matrices
  Definir i,j como Entero
  Definir M,n,suma Como Real
  Dimension M[4,3];
  Para i<-1 Hasta 4 Con Paso 1 Hacer
      Para j<-1 Hasta 3 Con Paso 1 Hacer
        Escribir Sin Saltar"Ingresa el dato de la posición [", i,",",j,"]";
        Leer n;
        M[i,j]<-n;
        suma<-suma+M[i,j];
     Fin Para
   Fin Para
   Escribir "El resultado de la suma de todos los elementos de la matriz es :",suma;
FinAlgoritmo

//Definir variables ``
let dia, costo, km, costoKm, precioTiquete;

//Ingrese datos usuarios
km = parseFloat(prompt(`Ingrese los km a recorre ${km}`));
dia = parseFloat(prompt(`ingrese los dias de instancia ${dia}`));

//Calcular datos para usuario
costoKm = km * 2.5;
if (dia >= 7 && dia < 800) {
  precioTiquete = (costoKm * 30) / 100;
} else {
  confirm(`No hay descuento para el viaje. En el siguiente viaje!!!`);
}
//Imprimir datos
confirm(`El costo de recorrido para ${km} km es de Usd ${costoKm}`);
