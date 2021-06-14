import { Router } from 'express';
import updateProfile from '../../controllers/user/updateProfile';
import hasProfilePermission from '../../middleware/user/hasProfilePermission';
import isAuthenticated from '../../middleware/user/isAuthenticated';
import asyncErrorHandler from '../../utils/asyncErrorHandler';
import getUserProfile from '../../controllers/user/getUserProfile';
import updateUserProfileValidation from '../../middleware/validation/userProfile';

const router = Router();

router.get('/:id', isAuthenticated, asyncErrorHandler(getUserProfile));
router.patch(
  '/:id',
  isAuthenticated,
  hasProfilePermission,
  updateUserProfileValidation,
  asyncErrorHandler(updateProfile)
);

export default router;
