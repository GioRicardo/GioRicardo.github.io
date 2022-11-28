const Restaurantes = [

    {
        nombre:'Itamar Restobar' ,
        rangoPrecios: 'Precios $ 49.505 - $ 148.515',
        img: './images/itamarrestobar.jpg',
        detalles: 'Comida Peruana, Latina, Saludable, Mariscos, Española, Apto para vegetarianos.'
    }
    ,
    {
        nombre: 'Pescaye' ,
        rangoPrecios: 'Precios $ 34.999 - $ 59.000',
        img: './images/pescaye.jpg',
        detalles: 'Comida Caribeña, mariscos, colombiana, opciones sin gluten.'
    }
    ,
    {
        nombre:'LaBota' ,
        rangoPrecios: 'Precios $ 14.000 - $ 35.450',
        img: './images/labota.jpg',
        detalles: 'Comida Italiana, Delicatessen, Saludable, Pizzería, Mediterránea., Apto para vegetarianos.'
    }
    ,
    {
        nombre: 'Sarab' ,
        rangoPrecios: 'Precios $ 20.000 - $ 40.000',
        img: './images/sarab.jpg',
        detalles: 'Comida Libanesa, Árabe, opciones veganas, opciones sin gluten, almuerzo, cena.'
    }
];



let data = Restaurantes.map(function(Rest){
    return'<article class="restaurantes_icons">'+
    '<img src= "' + 
    Rest.img +
    '" class="restaurantes_icons">' +
    '<h3 class="restaurantes_title">' + 
    Rest.nombre + 
    '</h3>' + 
    '<p class="restaurantes_paragraph">' +
    Rest.rangoPrecios +
    '</p>' +
    '<p class="restaurantes_paragraph">' +
    Rest.detalles +
    '</p>' +
    '<a href="#" class="restaurantes_cta cta">Mas detalles</a>'+
    '</article>'
});

document.getElementById('container').innerHTML = data.join('');


document.getElementById("nav_submit").addEventListener("click", function(){
    const name = document.getElementById("nav_input").value.toLowerCase();
    const encontrado = Restaurantes.find(function(rest){
        return rest.nombre.toLowerCase() === name;
    })

    if(encontrado){

        document.getElementById('alert').innerHTML = ' ';

        let data = 
            '<article class="restaurantes_icons">'+
            '<img src= "' + 
            encontrado.img +
            '" alt="itamarestobar" class="restaurantes_icons">' +
            '<h3 class="restaurantes_title">' + 
            encontrado.nombre + 
            '</h3>' + 
            '<p class="restaurantes_paragraph">' +
            encontrado.rangoPrecios +
            '</p>' +
            '<p class="restaurantes_paragraph">' +
            encontrado.detalles +
            '</p>' +
            '<a href="#" class="restaurantes_cta cta">Mas detalles</a>'+
            '</article>';

            document.getElementById('container').innerHTML = data;

    } else{
        let alert = 
            '<section class="contenedor restaurantes">' + 
            '<h2 class="subtitle">No se encontró ese restaurante, Por qué no miras estos...</h2>' + 
            '</section>';

            let data = Restaurantes.map(function(Rest){
                return'<article class="restaurantes_icons">'+
                '<img src= "' + 
                Rest.img +
                '" class="restaurantes_icons">' +
                '<h3 class="restaurantes_title">' + 
                Rest.nombre + 
                '</h3>' + 
                '<p class="restaurantes_paragraph">' +
                Rest.rangoPrecios +
                '</p>' +
                '<p class="restaurantes_paragraph">' +
                Rest.detalles +
                '</p>' +
                '<a href="#" class="restaurantes_cta cta">Mas detalles</a>'+
                '</article>'
        }); 
        
        document.getElementById('container').innerHTML = data.join('');
        document.getElementById('alert').innerHTML = alert;
    }
})

