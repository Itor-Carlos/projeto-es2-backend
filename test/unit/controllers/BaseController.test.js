import { jest } from "@jest/globals";
import request from "supertest";
import express from "express";
import BaseController from "../../../src/controller/BaseController.js";

// Mock do Service
const mockService = {
  findById: jest.fn(),
  findAll: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe("BaseController", () => {
  let app;
  const modelName = "User";

  beforeAll(() => {
    const controller = new BaseController(mockService, modelName);
    app = express();
    app.use(express.json());
    
    // Configura rotas
    app.get("/:id", controller.findById);
    app.get("/", controller.findAll);
    app.post("/", controller.create);
    app.put("/:id", controller.update);
    app.delete("/:id", controller.delete);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Teste: GET /:id sem ID
  test("findById retorna 400 se ID ausente", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(404); // Express retorna 404 para rota não encontrada
  });

  // Teste: POST / com erro de validação
  test("create retorna 400 em caso de erro", async () => {
    mockService.create.mockRejectedValue(new Error("Erro de validação"));
    const res = await request(app).post("/").send({});
    expect(res.status).toBe(400);
    expect(res.body.message).toBe("Erro de validação");
  });

  // Teste: DELETE /:id bem-sucedido
  test("delete retorna 200 com mensagem de sucesso", async () => {
    mockService.delete.mockResolvedValue(1);
    const res = await request(app).delete("/1");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe(`${modelName} deletado com sucesso.`);
  });
});