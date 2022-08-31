import decode from 'jwt-decode';

const jwtToken = 'token';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // If there is a token and it's not expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      localStorage.removeItem(jwtToken);
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem(jwtToken);
  }

  login(idToken) {
    localStorage.setItem(jwtToken, idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem(jwtToken);
    window.location.reload();
  }
}

export default new AuthService();
