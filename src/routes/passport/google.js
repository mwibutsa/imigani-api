import { Router } from 'express';
import passport from 'passport';
import authenticateUser from '../../controllers/passportAuth';

const router = Router();

router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/callback', passport.authenticate('google'), authenticateUser);

export default router;
