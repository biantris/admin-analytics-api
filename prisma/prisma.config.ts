import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `${process.env.DATABASE_URL}`,
      provider: "mongodb",
    },
  },
});

export default prisma;
