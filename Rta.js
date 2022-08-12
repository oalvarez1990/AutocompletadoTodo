function sin_titulo() {
	var code, codigo, experto, j, junior, m, mayor, menor, nivel, novato, parche_codigo, v;
	// Definir variables iniciales
	var nombre = new String();
	var apellido = new String();
	var codigovendedor = new Number();
	var codigonivel = new Number();
	var nvendedores = new Number();
	var cventas = new Number();
	var ventas = new Number();
	var totalventas = new Number();
	var i = new Number();
	var index = new Number();
	var menu = new Number();
	var n = new Number();
	var dato = new Number();
	var parche = new Boolean();
	menu = 1;
	n = 0;
	dato = 1;
	// Creamos el menu
	do {
		document.write("1.Registrar la cantidad de vendedores.",'<BR/>');
		document.write("2.Registrar datos de cada vendedor ",'<BR/>');
		document.write("3.Registrar cantidad de ventas y el total de ventas.",'<BR/>');
		document.write("4.Mostrar mejor vendedor",'<BR/>');
		document.write("6.Vendedor con menores ventas.",'<BR/>');
		document.write("7.Autor o talento",'<BR/>');
		document.write("0. Salir",'<BR/>');
		menu = Number(prompt());
		switch (menu) {
		case 1:
			if (n<=0) {
				document.body.innerHTML = '';
				// Ingresar numero de vendedores defi Dimension
				document.write("Cuantos vendedores va ingresar",'<BR/>');
				nvendedores = Number(prompt());
				n = n+nvendedores;
				// llenar arreglo
				var nombre = new Array(nvendedores);
				var apellido = new Array(nvendedores);
				var codigovendedor = new Array(nvendedores);
				var codigonivel = new Array(nvendedores);
				var cventas = new Array(nvendedores);
				var ventas = new Array(nvendedores);
				var totalventas = new Array(nvendedores);
				for (i=0;i<=nvendedores-1;i++) {
					nombre[i] = "_";
				}
			} else {
				document.write("Ya asigno los vendedores suficientes",'<BR/>');
				document.write("",'<BR/>');
				document.write("Pulse una tecla para continuar",'<BR/>');
				prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
			}
			break;
		case 2:
			do {
				if (dato==1) {
					document.body.innerHTML = '';
					document.write("Dato que desea registrar",'<BR/>');
					document.write("1. Nombre vendedor",'<BR/>');
					document.write("2. Apellido del vendedor",'<BR/>');
					document.write("3. Codigo vendedor",'<BR/>');
					document.write("4. Nivel vendedor",'<BR/>');
					document.write("0. Regresar al menu anterior",'<BR/>');
					dato = Number(prompt());
					switch (dato) {
					case 1:
						parche = false;
						for (i=0;i<=nvendedores-1;i++) {
							if (nombre[i]=="_" && !parche) {
								document.write("Usted no ha definido la cantidad de vendedores",'<BR/>');
								index = i;
								parche = true;
							}
						}
						if (parche) {
							document.write("Ingrese el nombre del vendedor N°",index,'<BR/>');
							nombre[index] = prompt();
							document.write(nombre[index]," Registro exitosamente",'<BR/>');
							document.write("",'<BR/>');
							document.write("Pulse una tecla para continuar",'<BR/>');
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						} else {
							document.write("Cantidad excedida de vendedores",'<BR/>');
							document.write("",'<BR/>');
							document.write("Pulse una tecla para continuar",'<BR/>');
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						}
						for (i=0;i<=nvendedores-1;i++) {
							document.write(nombre[i]," ");
						}
						prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						break;
					case 2:
						// Se registra los apellido de los vendedores
						parche = false;
						for (i=0;i<=nvendedores-1;i++) {
							if (apellido[i]=="_" && !parche) {
								index = i;
								parche = true;
							}
						}
						if (parche) {
							document.write("Ingrese el apellido del vendedor N° ",index,'<BR/>');
							apellido[index] = prompt();
							document.write(apellido[index]," Registro exitosamente",'<BR/>');
							document.write("",'<BR/>');
							document.write("Pulse una tecla para continuar",'<BR/>');
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						} else {
							document.write("Cantidad de apellidos excedidos",'<BR/>');
							document.write("",'<BR/>');
							document.write("Pulse una tecla para continuar",'<BR/>');
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						}
						for (i=0;i<=nvendedores-1;i++) {
							document.write(apellido[i]," ");
						}
						break;
					case 3:
						for (i=0;i<=nvendedores-1;i++) {
							// Ingreso de codigo del vendedor
							parche = false;
							// Aqui Inicia la posicion vacia para asignar nuevo codigo
							if (codigovendedor[i]==0 && !parche) {
								index = i;
								parche = true;
							}
						}
						if (parche) {
							document.write("Ingrese el codigo del vendedor ",nombre[index],'<BR/>');
							codigo = prompt();
							// verifica que el codigo no se repita con el de otro vendedor
							parche_codigo = false;
							for (i=0;i<=n-1;i++) {
								// codigo existente
								if (codigo==codigovendedor[i]) {
									i = n-1;
									document.write("Codigo asignado en otro vendedor",'<BR/>');
									document.write("",'<BR/>');
									document.write("pulse una tecla para continuar",'<BR/>');
									prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
								} else {
									// codigo no existente
									parche_codigo = true;
								}
							}
							// valida el registro de codigo
							if (parche_codigo) {
								codigovendedor[index] = code;
								document.write("El codigo ",codigovendedor[index]," Agregado exitosamente para el vendedor ",nombre[index],'<BR/>');
								document.write("",'<BR/>');
								document.write("pulse una tecla para continuar",'<BR/>');
								prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
							}
						} else {
							document.write("Maxima cantidad de vendedores fuera de rango ",'<BR/>');
							document.write("",'<BR/>');
							document.write("pulse una tecla para continuar",'<BR/>');
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						}
						break;
					case 4:
						// / nivel de para vendedores
						parche = false;
						for (i=0;i<=nvendedores-1;i++) {
							if (codigonivel[i]>0 && !parche) {
								index = i;
								parche = true;
							}
						}
						if (parche) {
							// /indice para selecionar el nivel del vendedor
							document.write("Selecione un nivel para el vendedor ",nombre[index],'<BR/>');
							document.write("1.Novato",'<BR/>');
							document.write("2.Junior",'<BR/>');
							document.write("3.Experto",'<BR/>');
							nivel = Number(prompt());
							switch (nivel) {
							case 1:
								novato = 1;
								codigonivel[index] = 1;
								document.write("Se Agrego el nivel de Novato al vendedor ",nombre[index],'<BR/>');
								document.write("",'<BR/>');
								document.write("pulse una tecla para continuar",'<BR/>');
								prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
								break;
							case 2:
								junior = 2;
								codigonivel[index] = 2;
								document.write("Se agrego el nivel de Junior al vendedor ",nombre[index],'<BR/>');
								document.write("",'<BR/>');
								document.write("pulse una tecla para continuar",'<BR/>');
								prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
								break;
							case 3:
								experto = 3;
								codigonivel[index] = 3;
								document.write("Se agrego el nivel de Experto al vendedor ",nombre[index],'<BR/>');
								document.write("",'<BR/>');
								document.write("pulse una tecla para continuar",'<BR/>');
								prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
								break;
							}
						} else {
							// /Se veriica que este dentro del espacio del nivel ingresado por estudiantes
							document.write("No hay dato para almacenar",'<BR/>');
							document.write("",'<BR/>');
							document.write("pulse una tecla para continuar",'<BR/>');
							prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
						}
						break;
					case 0:
						dato = 0;
						break;
					default:
						document.write("Opcion no permitda",'<BR/>');
					}
				}
			} while (dato!=0);
			break;
		case 3:
			if (nvendedores==0) {
				document.write("No se ha agregado cantidad de vendedores",'<BR/>');
			}
			for (j=0;j<=nvendedores-1;j++) {
				document.write("Ventas que realizo el vendedor ","",nombre[v],'<BR/>');
				cventas[j] = Number(prompt());
				document.write("Ingrese el total de las ventas realizadas",'<BR/>');
				ventas[j] = Number(prompt());
				if (codigonivel[j]==1) {
					document.write("Usted es novato",'<BR/>');
					totalventas[j] = ventas[j]*0.05;
				} else {
					if (codigonivel[j]>1 && codigonivel[j]<=5) {
						document.write("USted es junior",'<BR/>');
						totalventas[j] = ventas[v]*0.06;
					} else {
						if (codigonivel[j]>5) {
							document.write("Usted es experto ",'<BR/>');
							totalventas[j] = ventas[j]*0.07;
						}
					}
				}
				document.write("La comision por venta es:"," ","$",totalventas[j],'<BR/>');
				document.write("",'<BR/>');
				document.write("-----------------------------------------------------",'<BR/>');
				document.write("",'<BR/>');
			}
			break;
		case 4:
			if (nvendedores==0) {
				document.write("No se ha agregado cantidad de vendedores",'<BR/>');
			}
			mayor = 0;
			for (i=0;i<=nvendedores-1;i++) {
				if (ventas[i]>mayor) {
					mayor = ventas[i];
				}
			}
			for (i=0;i<=nvendedores-1;i++) {
				if (mayor==ventas[i]) {
					document.write(nombre[i],"............","$");
					document.write(ventas[i],'<BR/>');
				}
			}
			document.write("------------------------------------",'<BR/>');
			break;
		case 5:
			if (nvendedores==0) {
				document.write("No se ha agregado cantidad de vendedores",'<BR/>');
			}
			menor = ventas[1];
			for (m=0;m<=i;m++) {
				if (ventas[m]<menor) {
					menor = ventas[m];
					document.write(nombre[m],".....","$",ventas[m],'<BR/>');
				}
			}
			break;
		case 6:
			document.write("Derechos de autor: Omar Aleiser Alvarez Laverde",'<BR/>');
			document.write("",'<BR/>');
			document.write("Pulse una tecla para continuar",'<BR/>');
			prompt(); // no hay una forma simple de esperar una tecla en javascript sin separar esta función (vease document.onKeyUp), lo cual no siempre es posible
			break;
		case 0:
			document.write("Salida Exitosa",'<BR/>');
			break;
		default:
			document.write("Opcion no permitda",'<BR/>');
		}
	} while (menu!==0);
}
