/**
 * Created by EDWIN on 30/03/2017.
 */

var Libro=Backbone.Model.extend({
    //iniciar modelo
    urlRoot:"/libros",
    initialize: function () {
        console.log("se ha creado una instancia");
        this.on("change",function () {
           console.log("el modelo ha cambiado");
        });
    },
    //campos por defecto en elementos creados
    defaults:{
        autor: "Desconocido",
    }
});

//libros.fetch();

