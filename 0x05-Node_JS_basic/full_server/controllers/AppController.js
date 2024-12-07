/**
 * 'AppController' class that returns the homepage.
 */
class AppController {
  // Static method that returns the home page.
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
