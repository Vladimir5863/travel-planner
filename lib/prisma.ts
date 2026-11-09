import { PrismaClient } from "@/app/generated/prisma/client";

const globalsForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalsForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalsForPrisma.prisma = prisma;
}
