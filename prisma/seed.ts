import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const password = await hash('password', 12);
    const user = await prisma.user.upsert({
        where: {
            email: 'mariomad2296@gmail.com',
        },
        update: {},
        create: {
            email: 'mariomad2296@gmail.com',
            name: 'Mario',
            password: password,
        },
    });
    console.log({ user });
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
