import joi from 'joi';

export default joi.object({
  username: joi.string().alphanum().min(5),
  email: joi.string().email(),
  phoneNumber: joi.string().min(10),
  firstName: joi.string().min(2),
  lastName: joi.string().min(2),
});
