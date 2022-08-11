import { createRouter } from "./context";
import { UserValidator } from "../../types/User";

export const userRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany({
        include: {
          portfolio: true,
          preference: true,
        }
      });
    },
  });