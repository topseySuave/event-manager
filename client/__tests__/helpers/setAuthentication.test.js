import setAuthorizationToken from
  '../../src/components/authentication/setAuthenticationToken';
import * as userMock from '../__mocks__/actions/userMock';

describe('Setting authentication token', () => {
  it('should set token', (done) => {
    setAuthorizationToken(userMock.userState);
    done();
  });

  it('should remove token', (done) => {
    setAuthorizationToken(false);
    done();
  });
});
