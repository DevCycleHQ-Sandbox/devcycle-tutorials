import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      authorizationParams: {
        // Could conditionally pass params via req.query auth/login/?screen_hint=signup
        screen_hint: 'signup'
      }
    });
  }
});
