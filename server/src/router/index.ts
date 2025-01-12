import koaRouter from 'koa-router';

import card from './card';
import character from './character';
import db from './db';
import assets from './assets';
import common from './common';
import wiki from './wiki';

const router = new koaRouter();

router.use('/card', card.routes(), card.allowedMethods());
router.use('/character', character.routes(), character.allowedMethods());
router.use('/db', db.routes(), db.allowedMethods());
router.use('/assets', assets.routes(), assets.allowedMethods());
router.use('/common', common.routes(), common.allowedMethods());
router.use('/wiki', wiki.routes(), wiki.allowedMethods());

export default router;
