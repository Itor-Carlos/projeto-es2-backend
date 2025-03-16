export const BaseModelMethods = {
  findByEmail: async function(email) {
    return await this.findOne({ where: { email } });
  },
  
  findByDocumento: async function(documento) {
    return await this.findOne({ where: { documento } });
  }
};