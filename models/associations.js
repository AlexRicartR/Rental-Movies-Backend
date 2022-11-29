/// To set forth the associations for streamlining purposes

const Users = require('./users');
const Loans = require('./loans');
const Films = require('./films');
const Series = require('./series');

Users.hasMany(Loans, {foreignKey: "user_id"});
Loans.belongsTo(Users, {foreignKey: "user_id"});
Films.hasMany(Loans, {foreignKey: "film_id"});
Loans.belongsTo(Films, {foreignKey: "film_id"});
Series.hasMany(Loans, {foreignKey: "serie_id"});
Loans.belongsTo(Series, {foreignKey: "serie_id"});

