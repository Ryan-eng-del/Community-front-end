const users = [
  { id: 0, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 1, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

export default {
  'POST /api/user/register': (req: any, res: any) => {
    setTimeout(() => {
      res.status(200);
      res.json({
        code: 200,
        data: { list: users },
        msg: '注册成功',
      });
    }, 1500);
  },

  'POST /api/user/login': (req: any, res: any) => {
    setTimeout(() => {
      res.status(200);
      res.json({
        code: 200,
        data: { list: users, token: 'xhzjkjkjrejtjejkjrkjekjrk' },
        msg: '登录成功',
      });
    }, 1500);
  },

  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
