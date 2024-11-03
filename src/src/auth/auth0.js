// src/auth/auth0.js
export const auth0Auth = {
  domain: process.env.GATSBY_AUTH0_DOMAIN,
  clientId: process.env.GATSBY_AUTH0_CLIENT_ID,
  redirectUri: process.env.GATSBY_REDIRECT_URI,

  redirectToSignIn() {
    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      scope: 'openid profile email',
    });

    window.location.href = `https://${this.domain}/authorize?${params}`;
  },

  async fetchTokens(authCode) {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: this.clientId,
      code: authCode,
      redirect_uri: this.redirectUri,
    });

    const response = await fetch(`https://${this.domain}/oauth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    return response.json();
  },

  async handleAuthentication() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      const tokens = await this.fetchTokens(code);
      sessionStorage.setItem('tokens', JSON.stringify(tokens));
      return tokens;
    }
    return null;
  },

  isAuthenticated() {
    return !!sessionStorage.getItem('tokens');
  },

  logout() {
    sessionStorage.removeItem('tokens');
    window.location.href = `https://${this.domain}/v2/logout?client_id=${this.clientId}&returnTo=${encodeURIComponent(this.redirectUri)}`;
  }
};
