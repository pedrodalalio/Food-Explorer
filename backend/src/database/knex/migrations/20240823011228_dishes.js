exports.up = knex => knex.schema.createTable("links", table => {
    table.increments("id");
    table.text("description").notNullable();
    table.timestamp("created_at").default(knex.fn.now());
});
  
exports.down = knex => knex.schema.dropTable("links");

// Cada prato deve conter uma imagem, um nome, uma categoria, uma breve descrição, os ingredientes e o seu preço.