exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments().primary;
    tbl
      .text("VIN", 128)
      .unique()
      .notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.text("transmissionType", 128);
    tbl.text("titleStatus", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
