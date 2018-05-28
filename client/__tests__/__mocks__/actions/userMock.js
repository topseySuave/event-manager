import jwt from 'jsonwebtoken';

const imageUrl =
'http://www.topangacreekoutpost.com/assets/images/site/image_not_available.png';

export const signUpRequest = {
  firstName: 'Gabriel',
  lastName: 'Micah',
  email: 'gabriel@gmail.com',
  password: '123456789'
};

export const signUpReponse = {
  statusCode: 201,
  id: 1,
  message: 'Account Created for Gabriel Micah'
};

export const signInRequest = {
  email: 'gabriel@gmail.com',
  password: '123456789'
};

export const signInReponse = {
  statusCode: 200,
  message: 'signin successful',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpZCI6MiwibGFzdE5hbWUiOiJGb3N0
    ZXIiLCJyb2xlIjpmYWxzZSwiaWF0IjoxNTI3MjY1MTIzL
    CJleHAiOjE1MjczNTE1MjN9.ErCDwGG_Jh09Kdr1_Dxa5o1Au5xmtmwYlEoU5F1avPg`
};

export const userState = jwt.sign({
  id: 1,
  lastName: 'Micah',
}, 'thisisspartar', { expiresIn: '24h' });
