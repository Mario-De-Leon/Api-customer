'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('products', [{
      name: "Mario",
      price: 200,
      description: "asdasfdasfd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      category_id: 65,
      created_at: "2022-06-14 10:10:55"
    },{
      name: "Mario",
      price: 200,
      description: "asdasfdasfd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      category_id: 65,
      created_at: "2022-06-14 10:10:55"
    },{
      name: "Mario",
      price: 200,
      description: "asdasfdasfd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      category_id: 65,
      created_at: "2022-06-14 10:10:55"
    },{
      name: "Mario",
      price: 200,
      description: "asdasfdasfd",
      image: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
      category_id: 65,
      created_at: "2022-06-14 10:10:55"
    }], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('products');
  }
};
