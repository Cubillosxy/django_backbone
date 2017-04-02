/**
 * Created by EDWIN on 30/03/2017.
 */

var Libreria= Backbone.View.extend({
    //tagName: "span",
    //className: "nombreClas",
    //id: "nomid",

    //el: ".vista",
    el: '#app',

    initialize: function () {

      //app.libros.fetch();
    }

    /*
    events: {
       'click.cambiarColor':'cambia',
    },

    cambia: function () {
        this.$el.css('color',"red");
    },
    render: function () {
        this.$el.html('<p> El metodo render en accion</p>');
    }
    */
});

var appView = new Libreria();