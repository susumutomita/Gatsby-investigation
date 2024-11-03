// src/auth/cognito.js
export const cognitoAuth = {
  domain: process.env.GATSBY_COGNITO_DOMAIN,
  clientId: process.env.GATSBY_COGNITO_CLIENT_ID,
  redirectUri: process.env.GATSBY_REDIRECT_URI,

  redirectToSignIn() {
    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
    });

    window.location.href = `https://${this.domain}/login?${params}`;
  },

  async fetchTokens(authCode) {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: this.clientId,
      code: authCode,
      redirect_uri: this.redirectUri,
    });

    const response = await fetch(`https://${this.domain}/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params,
    });

    return response.json();
  },

  // トークンの検証と保存
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
    window.location.href = `https://${this.domain}/logout`;
  }
};
