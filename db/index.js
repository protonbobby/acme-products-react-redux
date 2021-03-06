const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
})

const Product = conn.define('product', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    defaultValue: 7,
  }
});

const syncAndSeed = () => {
  conn.sync({ force: true })
    .then(() => {
      Promise.all([
        Product.create({
          name: 'Meanie Babies',
          rating: 10
        }),
        Product.create({
          name: 'X-Ray Mirror',
          rating: 8
        }),
        Product.create({
          name: 'Flying Carpet',
          rating: 9
        }),
      ]);
    })
    .then(() => {
      console.log('db synced and seeded')
    })
    .catch(e => console.error(e))
}

module.exports = {
  syncAndSeed,
  models: {
    Product,
  }
}
