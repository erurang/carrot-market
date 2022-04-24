import { PrismaClient } from '@prisma/client';

export default new PrismaClient()

// 데이터베이스는 프론트에서는 api를 통해 서버에 접근하여 데이터를 받아와 처리하는데.. 프론트에서 prisma에 직접 접근한다? 어우 사망각
// 그럼 db를 연결하기위한 서버를 또 만들어서 (express..) api를 만들어주고 해야 해야할텐데.. 
// 이걸 next에서 하는 방법은 없을까?