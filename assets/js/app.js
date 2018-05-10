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
    // var hamburguesas = data.hamburguesas.characters;
    // var pizzas = data.pizzas.characters;
   

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
            // $('.hamburguesas, .pizzas, .todos').empty(); //a los divs con esas clases les remueve todos sus hijos
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

    // $('.btn-completo').click(function () {
    //     for (var i = 0; i < breaking.length; i++) {
    //         $('.gossip, .how, .stranger, .all').empty();
    //         $('.breaking').append('<div class="row character">' +
    //             '<div class= "col-md-6 text-center">' +
    //             '<img src="assets/' + breaking[i].picture + '">' +
    //             '</div>' +
    //             '<div class= "col-md-6">' +
    //             '<h3>' + breaking[i].name + '</h3>' +
    //             '<p>City: ' + breaking[i].city + '</p>' +
    //             '</div>' +
    //             '</div>')
    //     }
    // })

    // $('.btn-how').click(function () {
    //     for (var i = 0; i < howtoget.length; i++) {
    //         $('.gossip, .breaking, .stranger, .all').empty();
    //         $('.how').append('<div class="row character">' +
    //             '<div class= "col-md-6 text-center">' +
    //             '<img src="assets/' + howtoget[i].picture + '">' +
    //             '</div>' +
    //             '<div class= "col-md-6">' +
    //             '<h3>' + howtoget[i].name + '</h3>' +
    //             '<p>City: ' + howtoget[i].city + '</p>' +
    //             '</div>' +
    //             '</div>')
    //     }
    // })

    // $('.btn-stranger').click(function () {
    //     for (var i = 0; i < stranger.length; i++) {
    //         $('.gossip, .breaking, .how, .all').empty();
    //         $('.stranger').append('<div class="row character">' +
    //             '<div class= "col-md-6 text-center">' +
    //             '<img src="assets/' + stranger[i].picture + '">' +
    //             '</div>' +
    //             '<div class= "col-md-6">' +
    //             '<h3>' + stranger[i].name + '</h3>' +
    //             '<p>City: ' + stranger[i].city + '</p>' +
    //             '</div>' +
    //             '</div>')
    //     }
    // })

    /*
    * Ahora haremos el evento que al presionar el botón All nos muestre todos los personajes
    * de todas las series.
    * Crearemos un arreglo vacío donde pushearemos todos los objetos de characters
    */

    // var allCharacters = [];

    // $('.btn-all').click(function () {
    //     $('.gossip, .breaking, .how, .stranger').empty();
        /*
        * Debemos recorrer cada de uno de los objetos presente en la data (gossip, breakingbad,
        * howtoget y stranger) y pushear al array allCharacters todos los objetos pertenecientes a
        * la propiedad characters
        */
        // for (var i in data) {
        //     allCharacters.push(data[i].characters);
        // }
        /*
        * Si hacemos console.log(allCharacters) podremos ver que ahora tenemos un arreglo con arreglos
        * en su interior, cada arreglo interno a su vez tiene en su interior los personajes (objetos)
        * Puedes comprobarlo haciendo console.log(allCharacters[0], allCharacters[1],
        * allCharacters[2], allCharacters[3]), es decir, tenemos un arreglo compuesto de
        * arreglos que en su interior se compone de objetos.
        * Entonces para poder llegar a las propiedades de cada personaje debemos iterar paralelamente
        * con dos for, en español esto quiere decir que estaríamos entrando por ejemplo así:
        * allCharacters[0][0] <-- el primer par de corchetes corresponde los personajes de gossip girl,
        * el segundo par corresponde al primer personaje de gossip girl, en este caso Blair Waldorf
        * allCharacters[1][0] <-- el primer par de corchetes corresponde los personajes de breaking bad,
        * el segundo par corresponde al primer personaje de breaking bad, en este caso Walter White
        * Mientras iteramos en cada personaje, es decir dentro del segundo for, hacemos el append
        * correspondiente
        */
        // for (var i = 0; i < allCharacters.length; i++) {
        //     for (var j = 0; j < allCharacters.length; j++) {
        //         $('.all').append('<div class="row character">' +
        //             '<div class= "col-md-6 text-center">' +
        //             '<img src="assets/' + allCharacters[i][j].picture + '">' +
        //             '</div>' +
        //             '<div class= "col-md-6">' +
        //             '<h3>' + allCharacters[i][j].name + '</h3>' +
        //             '<p>School: ' + allCharacters[i][j].school + '</p>' +
        //             '<p>City: ' + allCharacters[i][j].city + '</p>' +
        //             '</div>' +
        //             '</div>')
            // }
        // }
    // })
});
