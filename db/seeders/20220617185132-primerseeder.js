'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('categories', [{
      name: "Mariozsdd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      created_at: "2022-06-15 20:33:55"
    },{
      name: "listozdds",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      created_at: "2022-06-15 20:33:55"
    },{
      name: "Happyzsdd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      created_at: "2022-06-15 20:33:55"
    },{
      name: "que pasazsd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      created_at: "2022-06-15 20:33:55"
    }], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('categories');
  }
};
