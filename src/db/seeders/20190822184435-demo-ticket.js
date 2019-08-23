'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [
    { parentId: null,
      title: 'Foo',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { parentId: null,
      title: 'Bar',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { parentId: null,
      title: 'Baz',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { parentId: 1,
      title: 'Qux',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { parentId: 1,
      title: 'Frang',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    { parentId: 1,
      title: 'Zooby',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
