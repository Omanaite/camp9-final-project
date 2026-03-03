const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

async function main(){
  const db = new PrismaClient();
  try{
    const u = await db.user.findUnique({ where: { name: 'auto_user_x' } });
    console.log('USER:', u);
    if(u){
      const ok = await bcrypt.compare('Password123', u.password);
      console.log('PASSWORD_MATCH:', ok);
    }
  }catch(e){
    console.error(e);
    process.exit(1);
  }finally{
    await db.$disconnect();
  }
}

main();
