import { User } from '../../db/models';

const updateProfile = async (req, res) => {
  // check if user exists

  const { id } = req.params;
  const user = await User.findByPk(id);

  if (user) {
    const updatedUser = await User.update(req.body, {
      where: { id },
      returning: true,
    });

    return res.status(200).json({ data: updatedUser });
  }

  return res.status(404).json({
    error: {
      message: 'Can not update a non existent user',
    },
  });
};

export default updateProfile;
