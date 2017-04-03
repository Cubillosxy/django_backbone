/**
 * Created by EDWIN on 31/03/2017.
 */
var LibrosCollection = Backbone.Collection.extend({
    model : Libro,

    url : "/libros",
});

var libros = new LibrosCollection();
libros.fetch();

