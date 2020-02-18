// Table setup, changes to apply to database

exports.up = function(knex) {
  // DO NOT FORGET TO RETURN!
  return knex.schema.createTable("cars-dealer", tbl => {
    // Adds ID column to the table
    tbl.increments(); // primary key, makes every row unique
    tbl
      .string("vin")
      .notNullable()
      .index();
    tbl
      .string("make")
      .notNullable()
      .index();
    tbl
      .string("model")
      .notNullable()
      .index();
    tbl
      .string("mileage")
      .notNullable()
      .index();

    tbl.string("transmission");
    tbl.string("title");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars-dealer");
};
