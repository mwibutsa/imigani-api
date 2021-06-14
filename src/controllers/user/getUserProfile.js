import { User } from '../../db/models';

const getUserProfile = async (req, res) => {
  const { id } = req.params;
  const user = await User.getOneUser(id);
  if (user) {
    return res.status(200).json({
      data: user,
    });
  }
  return res.status(404).json({
    error: {
      message: 'User not found',
    },
  });
};

export default getUserProfile;
