export class MockModel {
    static findByPk = jest.fn();
    static findAndCountAll = jest.fn();
    static destroy = jest.fn();
    static create = jest.fn();
    static update = jest.fn();
    static findOne = jest.fn();
    
    static rawAttributes = {
      id: { allowNull: false },
      name: { allowNull: false },
      email: { allowNull: false },
      documento: { allowNull: false }
    };
}