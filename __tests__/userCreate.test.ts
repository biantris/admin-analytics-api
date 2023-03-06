import request from 'supertest';
import prisma from '../prisma/prisma.config';
import { app } from '../supertest.config';

describe('POST /users', () => {
  afterAll(async () => {
    await prisma.user.deleteMany({});
  });

  it('should create a user', async () => {
    const response = await request(app).post('/users').send({
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '12345678',
      access_level: 'EMPLOYEE',
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name', 'John Doe');
  });
});
