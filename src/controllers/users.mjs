import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const getUsers = async (req,res) => {
    await prisma.user.create({
        data: {
          name: 'Alice',
          email: 'alice@prisma.io',
          posts: {
            create: { title: 'Hello World' },
          },
          profile: {
            create: { bio: 'I like turtles' },
          },
        },
      })
    const users = await prisma.user.findMany();
    res.json(users);
}

export {getUsers};