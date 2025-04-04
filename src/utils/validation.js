import {cpf, cnpj} from 'cpf-cnpj-validator';
import isValidCep from '@brazilian-utils/is-valid-cep';

export const validateCreate = (schema, schemaFields) => {
    const requiredFields = Object.entries(schema.rawAttributes)
        .filter(([_, attribute]) => attribute.allowNull === false)
        .map(([field]) => field);

    const missingFields = requiredFields.filter(field => !(field in schemaFields));
    if(missingFields.length>0){
        throw new Error("Campos obrigatórios não informados: " + missingFields.join(", "));
    }

    return missingFields;
}

export const validateUpdate = (schema, schemaFields) => {
    // Remove id from validation check if present
    const { id, ...fieldsToUpdate } = schemaFields;
    
    const providedFields = Object.keys(fieldsToUpdate);
    const allFields = Object.keys(schema.rawAttributes);
    
    const invalidFields = providedFields.filter(field => !allFields.includes(field));
    if(invalidFields.length > 0) {
        throw new Error("Campos inválidos encontrados: " + invalidFields.join(", "));
    }
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
  