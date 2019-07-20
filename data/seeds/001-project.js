exports.seed = function(knex, Promise) {
    return knex('projects').insert([
      {name: 'Build a car', description: 'The car will have four wheel and will be blue', completed: 'false'},
      {name: 'Build a house', description: 'The house will have three floors and a basement', completed: 'false'},
      {name: 'Build a boat', description: 'The boat will resemble a yacht with three floors', completed: 'false'}
    ]);
};