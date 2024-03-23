const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
  it('should have correct status code and result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function() {
  it('should return correct status code and result when id is a number', function(done) {
    request('http://localhost:7865/cart/123', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return 404 status code when id is not a number', function(done) {
    request('http://localhost:7865/cart/abc', function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      expect(body).to.equal('Not a number');
      done();
    });
  });
});

describe('/available_payments endpoint', function() {
  it('should return correct payment methods', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(JSON.stringify({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }));
      done();
    });
  });
});

describe('/login endpoint', function() {
  it('should return welcome message', function(done) {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: 'John'
      }
    };
    request(options, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome John');
      done();
    });
  });
});
