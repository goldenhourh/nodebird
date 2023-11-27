const express = require('express');
const { renderProfile, renderJoin, renderMain } = require('../controllers/page');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', renderProfile);

router.get('/join', renderJoin);

// POST /auth/join 라우터 추가
router.post('/join', processJoin); // processJoin 함수 추가

router.get('/', renderMain);

module.exports = router;
