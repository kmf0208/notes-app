const NotesClient = require('./notesClient')

require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
    test('calls fetch and loads repo info', (done) => {
      const client = new NotesClient();
      fetch.mockResponseOnce(JSON.stringify("This note is coming from the server just check"));
  
      client.loadNotes((repoInfo) => {
        expect(repoInfo).toBe("This note is coming from the server just check");
        done();
      });
    });
  });