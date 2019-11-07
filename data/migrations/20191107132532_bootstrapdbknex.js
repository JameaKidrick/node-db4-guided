
exports.up = function(knex) {
  return knex.schema.createTable('species', tbl => {
    // PK type is integer without negative values, aka unsigned
    tbl.increments(); 

    tbl.string('name', 255).notNullable();
  })
  
  .createTable('animals', tbl => {
    tbl.increments();
    
    tbl.string('name', 255).notNullable();
    // define foreign key
    tbl
      .integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be "CASCADE", "RESTRICT", "NO ACTION", "SET NULL"
      .onUpdate("CASCADE") // about changing the value of the primary key table
  })

  .createTable('zoos', tlb => {
    tbl.increments();

    tbl.string('name', 255).notNullable();
    tbl.string('address', 500);
  })

  .createTable('animal_zoos', tbl => {
    tbl.increments();

    tbl
      .integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('zoos')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl
      .integer('animal_id')
      .unsigned()
      .references('id')
      .inTable('animals')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    
    tbl.date('from')

    tbl.date('to')
  })
};

exports.down = function(knex) {
  
};
