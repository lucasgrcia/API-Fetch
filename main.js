
      let url = "https://jsonplaceholder.typicode.com/users"; //en la primera parte definimos una variable un
      //url donde hacemos referencia al origen de los datos

      fetch(url) //en la segunda línea realizamos una solicitud a esta url
        .then((response) => response.json()) //en la tercera línea se resuelve la promesa al obtener la respuesta la pasa a un
        //determinado formato utilizando la función correspondiente.. en este caso estamos utilizando json

        .then((data) => mostrarData(data)) //en la cuarta línea leemos este objeto data y lo mostramos por consola

        .catch((error) => console.log(error)); //por último en cinco si hay un error será atrapado con la palabra reservada catch

      const mostrarData = (data) => {
        //Se traen los datos
        console.log(data);
        let body = "";
        for (let i = 0; i < data.length; i++) {
          //vamos a utilizar un bucle for
          //porque sabemos de que esa data va a tener una longitud en este caso es un arreglo de 10 ELEMENTOS
          body += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
        }
        document.getElementById("data").innerHTML = body; // Con esta linea graficamos lo de la linea 208 en el ID "data" de
      }; //la linea 28.. En cada iteracion del bucle se va creando lo estipulado
