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
	Definir n,num, a,b Como Entero
	
	Escribir "Ingrese cantidad de numeros"
	leer n
	
	Dimension num[n]
	Dimension c[n]
	
	para b<-0 Hasta n-1 Hacer
		Escribir "Ingrese base b"
		leer num[b]
		c[b]= num[b]*num[b]
		
	FinPara
	
	Imprimir "El valor elavado es" c[b]


	// Ingresar datos usuarios 
	Funcion resultado <- Potencia (base, exponente)
    Si exponente=0 Entonces
        resultado <- 1;
    sino 
        resultado <- base*Potencia(base,exponente-1); 
    FinSi
FinFuncion

Algoritmo DosALaDiezRecursivo
    Escribir "Ingrese Base"
    Leer base
    Escribir "Ingrese Exponente"
    Leer exponente
    Escribir "El resultado es ",Potencia(base,exponente)
FinAlgoritmo

	
	Algoritmo matrizNumericaTresxTres03
	//Definir variables iniciales 
	Definir fil, col, num Como Entero
	///Ingresar datos para la matriz
	Escribir "Ingrese los datos para matriz de 3x3"
	///Definir el arreglo de la matriz
	Dimension num[3,3]
	Para fil<-0 Hasta 3-1 Con Paso 1 Hacer
		Para col<-0 Hasta 3-1 Con Paso 1 Hacer
			Escribir "Ingrese los numeros para la fila " " " fil " " col
			leer num[fil,col]
		Fin Para 
	Fin Para
	
	Para fil<-0 Hasta 3-1 Con Paso 1 Hacer
		Para col<-0 Hasta 3-1 Con Paso 1 Hacer
			Imprimir Sin Saltar num[fil,col], " "
		Fin Para
		Escribir " "
	Fin Para
FinAlgoritmo
 