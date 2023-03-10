"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: `${process.env.DATABASE_URL}`,
            //@ts-ignore
            provider: "mongodb",
        },
    },
});
exports.default = prisma;
