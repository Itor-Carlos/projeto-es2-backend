import {cpf, cnpj} from 'cpf-cnpj-validator';
import isValidCep from '@brazilian-utils/is-valid-cep';

export const validateModel = (schema, schemaFields) => {
    const requiredFields = Object.entries(schema.rawAttributes)
    .filter(([_, attribute]) => attribute.allowNull === false)
    .map(([field]) => field);

    const missingFields = requiredFields.filter(field => !(field in schemaFields));
    return missingFields;
}

export function validateDocumento(documento) {
    documento = documento.replace(/\D/g, "");
  
    if (documento.length === 11) return cpf.isValid(documento);
    else if (documento.length === 14) return cnpj.isValid(documento);
    return false;
}

export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export function validateCEP(cep){
    return isValidCep(cep)
}
  