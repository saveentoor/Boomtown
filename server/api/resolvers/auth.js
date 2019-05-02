const { AuthenticationError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function setCookie({ tokenName, token, res }) {//
  res.cookie(tokenName, token, {//name of cookie is being passed as tokenname
    httpOnly: true,//should always be true, 
    secure: process.env.NODE_ENV === 'production',//setting it as a secure everytime, but only in production
    maxAge: 1000 * 60 * 60 * 2 //how long this cookie should live
  });
}

//id that lets server know you exist and lets you get access arrodingly to your role
function generateToken(user, secret) {
  const { id, email, fullname, bio } = user; // Omit the password from the token
  return jwt.sign(
    { id, email, fullname, bio },
    secret,
    { expiresIn: '2h' }
  );
}

module.exports = app => {
  return {
    async signup(parent, args, context) {
      console.log(args);
      try {
        const hashedPassword = await bcrypt.hash(args.user.password, 10); //10-for how many times it will hash it

        const user = await context.pgResource.createUser({
          fullname: args.user.fullname,
          email: args.user.email,
          password: hashedPassword
        });

        const encodedToken = generateToken(
          user,
          app.get('JWT_SECRET')
        );
          console.log(`JWT: ${encodedToken}`);

        setCookie({
          tokenName: app.get('JWT_COOKIE_NAME'),
          token: encodedToken,
          res: context.req.res
        });

        return {
          id: user.id
        };
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },

    async login(parent, args, context) {
      const { email, password } = args.user;
      console.log(email, password);

      try {
        const user = await context.pgResource.getUserAndPasswordForVerification(//load user from dt
          args.user.email
        );
        if (!user) throw 'User not found.';
        const valid = await bcrypt.compare(password, user.password);
        //const valid = user && user.password === password;
        // const valid = false;

        //const valid = await bcrypt.compare(args.user.password, user.password);
        if (!valid || !user) throw 'User or password was not found.';

        const encodedToken = generateToken(
          user,
          app.get('JWT_SECRET')
        );

        setCookie({
          tokenName: app.get('JWT_COOKIE_NAME'),
          token: encodedToken,
          res: context.req.res
        });

        return {
          id: user.id,
          fullname: user.fullname,
          email: user.email
        };
      } catch (e) {
        throw new AuthenticationError(e);
      }
    },

    logout(parent, args, context) {
      context.req.res.clearCookie(app.get('JWT_COOKIE_NAME'));
      return true;
    }
  };
};
