import { Router } from 'express';
import passport from 'passport';
import authenticateUser from '../../controllers/passportAuth';

const router = Router();

router.get('/', passport.authenticate('facebook'));

router.get('/callback', passport.authenticate('facebook'), authenticateUser);

export default router;
