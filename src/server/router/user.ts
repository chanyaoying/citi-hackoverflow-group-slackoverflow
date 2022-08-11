import { createRouter } from "./context";
import { UserValidator } from "../../types/User";

export const userRouter = createRouter()
//   .query("hello", {
//     input: UserValidator,
//     resolve({ input }) {
//       return {
//         greeting: `Hello ${input?.text ?? "world"}`,
//       };
//     },
//   })
  .query("getAll", {
    input: UserValidator,
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  });
