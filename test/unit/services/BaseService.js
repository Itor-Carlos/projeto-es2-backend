import { jest } from "@jest/globals";

// Mock das funções de validação
jest.unstable_mockModule("src/utils/validation.js", () => ({
    validateCreate: jest.fn(),
    validateUpdate: jest.fn(),
    validateEmail: jest.fn(),
    validateDocumento: jest.fn(),
  }));
  

import { BaseService } from "../../../src/service/BaseService.js";
import * as validationModule from "src/utils/validation.js";
import { MockModel } from "../../mocks/MockModel.js"; // Model mockado
import { validateEmail } from '../../../src/utils/validation.js';
  
const mockedValidationModule = await import("src/utils/validation.js");

// Then continue with your test definitions...
describe("BaseService", () => {
  let service;
  const mockModelInstance = { id: 1, name: "Test", email: "test@example.com", documento: "123" };

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();

    // Setup MockModel with required properties
    MockModel.rawAttributes = {
      id: { allowNull: false },
      name: { allowNull: false },
      email: { allowNull: false },
      documento: { allowNull: false }
    };

    // Configure model method mocks
    MockModel.findByPk.mockResolvedValue(mockModelInstance);
    MockModel.findAndCountAll.mockResolvedValue({ rows: [mockModelInstance], count: 1 });
    MockModel.destroy.mockResolvedValue(1);
    MockModel.create.mockResolvedValue(mockModelInstance);
    MockModel.update.mockResolvedValue([1]);
    MockModel.findOne.mockResolvedValue(null);

    // Configure validation mocks with default values
    mockedValidationModule.validateCreate.mockImplementation(() => []);
    mockedValidationModule.validateUpdate.mockImplementation(() => true);
    mockedValidationModule.validateEmail.mockReturnValue(true);
    mockedValidationModule.validateDocumento.mockReturnValue(true);

    service = new BaseService(MockModel, "id", {
      validateEmailAndDoc: true,
      includes: ["relatedModel"],
    });
  });


    // Test: findById
    test("findById retorna registro quando existe", async () => {
        const result = await service.findById(1);
        expect(MockModel.findByPk).toHaveBeenCalledWith(1, { include: ["relatedModel"] });
        expect(result).toEqual(mockModelInstance);
    });

    // Test: create com validações
    test("create lança erro se email inválido", async () => {
        validationModule.validateEmail.mockReturnValue(false);
        const testData = { email: "invalid", documento: "123" };
        
        await expect(service.create(testData))
        .rejects
        .toThrow("Email inválido.");
    });

    test("create verifica duplicatas de documento", async () => {
        validationModule.validateEmail.mockReturnValue(true);
        validationModule.validateDocumento.mockReturnValue(true);
        validationModule.validateCreate.mockReturnValue([]);
        MockModel.findOne.mockResolvedValueOnce(null); // Email check passes
        MockModel.findOne.mockResolvedValueOnce({}); // Documento already exists

        const testData = { email: "test@example.com", documento: "123" };
        
        await expect(service.create(testData))
        .rejects
        .toThrow("Documento já cadastrado.");
    });

    // Test: update
    test("update chama Model.update corretamente", async () => {
        const updateData = { name: "Novo Nome" };
        validationModule.validateUpdate.mockImplementation(() => true);
        
        await service.update(1, updateData);
        
        expect(MockModel.update).toHaveBeenCalledWith(
        updateData,
        { where: { id: 1 } }
        );
    });
});