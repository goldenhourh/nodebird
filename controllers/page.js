const { User } = require('../models'); // 예시: 실제 모델의 경로에 따라 수정

exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
};

exports.processJoin = async (req, res, next) => {
  const { email, nick, password } = req.body;

  try {
    // 사용자 생성 (예시: Sequelize 모델을 사용한 코드)
    const user = await User.create({
      email,
      nick,
      password,
    });

    // 회원가입 성공 시 로직 (예시: 로그인 등의 추가 로직)

    res.redirect('/'); // 회원가입 성공 시 메인 페이지로 리다이렉트
  } catch (error) {
    // 회원가입 실패 시 에러 처리 로직
    console.error(error);
    next(error);
  }
};
