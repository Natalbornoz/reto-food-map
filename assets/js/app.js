$(document).ready(() => {
    /*
    * Si analizan la data, se darán cuenta que en la variable data podemos encontrar
    * 3 objetos, estos son: completos, hamburguesas, pizzas.
    * Cada objeto en su interior, tiene el objeto characters, que a su vez está compuesto
    * por un arreglo de objetos donde se almacen los datos de cada uno de los personajes
    * Pueden visualizar esto haciendo los siguientes console.log
    * console.log(data);
    * console.log(data.completos.characters);
    * console.log(data.hamburguesas.characters);
    * console.log(data.pizzas.characters);
    */

    /*
    * Genero las variables donde guardaré el acceso a characters de cada uno de los objetos (series)
    * ¿por qué hago esto? para que cuando lo utilice en el for no me maree tanto texto :)
    * Es visualmente más ordenado y entendible
    */
    var completos = data.completos.characters;
    var hamburguesas = data.hamburguesas.characters;
    var pizzas = data.pizzas.characters;
   

    /*
    * Ahora comenzamos con el contenido. Cuando se le haga click al botón de Completos, mostraremos
    * las opciones de completos desde jquery y la data proporcionada.
    * Para eso creamos el evento de click en el botón que queremos y le decimos que una vez ejecutado
    * este evento recorra el largo del arreglo donde están almacenados los datos los locales de comida que venden completos
    *  (data.completos.characters) el que ya tenemos guardado en la variable completos.
    */
    $('.btn-completo').click(function () {
        for (var i = 0; i < completos.length; i++) {
            /*
            * Lo que hacemos acá es que como se repite lo mismo en cada botón por cada serie (los otros eventos
            * que están más abajo) le pedimos que borre todo el contenido generado en los otros div y solo
            * queden insertados los del evento ejecutado.
            * Si presiono primero breaking bad, se cargan sus personajes, pero luego presiono gossip girl
            * se borra inmediatamente todo el contenido de breaking bad y se genera el de gossip girl
            * cada uno en su div correspondiente
            */
            $('.hamburguesas, .pizzas, .todos').empty(); //a los divs con esas clases les remueve todos sus hijos
            /*
            * Le indicamos que en cada iteración, es decir cuando pase por cada local, genera la
            * siguiente estructura por cada uno, sacando así el dato de nombre, ciudad y foto,
            * haciendo el respectivo append a su div contenedor que está vacío en el html (<div class="completos"></div>)
            */
            $('.completos').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img class="img-food" src="assets/images/' + completos[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + completos[i].name + '</h3>' +
                '<p class="direccion">City: ' + completos[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })
    
    /*
    * Si se dan cuenta en los siguientes eventos repetimos exactamente lo mismo
    * Si al hacer click en cada botón inspeccionan el html, se darán cuenta que el contenido
    * se borra y agrega desde jquery, nunca ha estado en el html, evitando así recargarlo
    * de contenido y simular que no está visible utilizando hide() y show()
    */

    $('.btn-hamburguesa').click(function () {
        for (var i = 0; i < hamburguesas.length; i++) {
            $('.completos, .pizzas, .todos').empty();
            $('.hamburguesas').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img class="img-food" src="assets/images/' + hamburguesas[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + hamburguesas[i].name + '</h3>' +
                '<p class="direccion">City: ' + hamburguesas[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })

    $('.btn-pizza').click(function () {
        for (var i = 0; i < pizzas.length; i++) {
            $('.hamburguesas, .completos, .todos').empty();
            $('.pizzas').append('<div class="row character">' +
                '<div class= "col-md-6 text-center">' +
                '<img class="img-food" src="assets/images/' + pizzas[i].picture + '">' +
                '</div>' +
                '<div class= "col-md-6">' +
                '<h3>' + pizzas[i].name + '</h3>' +
                '<p class="direccion">City: ' + pizzas[i].city + '</p>' +
                '</div>' +
                '</div>')
        }
    })


    /*
    * Ahora haremos el evento que al presionar el botón All nos muestre todos los locales de comida, de todas las secciones
    * Crearemos un arreglo vacío donde pushearemos todos los objetos de characters
    */

    var allCharacters = [];

    $('.btn-todo').click(function () {
        $('.completos, .hamburguesas, .pizzas').empty();
        /*
        * Debemos recorrer cada de uno de los objetos presente en la data (completos, hambuguesas, pizzas)
        * y pushear al array allCharacters todos los objetos pertenecientes a
        * la propiedad characters
        */
        for (var i in data) {
            allCharacters.push(data[i].characters);
        }
        /*
        * Si hacemos console.log(allCharacters) podremos ver que ahora tenemos un arreglo con arreglos
        * en su interior, cada arreglo interno a su vez tiene en su interior los personajes (objetos)
        * Puedes comprobarlo haciendo console.log(allCharacters[0], allCharacters[1],
        * allCharacters[2]), es decir, tenemos un arreglo compuesto de
        * arreglos que en su interior se compone de objetos.
        * Entonces para poder llegar a las propiedades de cada local de comida debemos iterar paralelamente
        * con dos for, en español esto quiere decir que estaríamos entrando por ejemplo así:
        * allCharacters[0][0] <-- el primer par de corchetes corresponde los los locales de  completos,
        * el segundo par corresponde al primer local de completos, en este caso El Señor de los Completos
        * allCharacters[1][0] <-- el primer par de corchetes corresponde los locales de hamburguesas,
        * el segundo par corresponde al primer local de hamburguesas, en este caso Hamburguesasas
        * Mientras iteramos en cada local, es decir dentro del segundo for, hacemos el append
        * correspondiente
        */
        for (var i = 0; i < allCharacters.length; i++) {
            for (var j = 0; j < allCharacters.length; j++) {
                $('.todos').append('<div class="row character">' +
                    '<div class= "col-md-6 text-center">' +
                    '<img class="img-food" src="assets/images/' + allCharacters[i][j].picture + '">' +
                    '</div>' +
                    '<div class= "col-md-6">' +
                    '<h3>' + allCharacters[i][j].name + '</h3>' +
                    '<p>City: ' + allCharacters[i][j].city + '</p>' +
                    '</div>' +
                    '</div>')
            }
        }
    })
});
