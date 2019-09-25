const Application = require('spectron').Application;
const assert = require('assert');
const electronPath = require('electron');
const path = require('path');

const app = new Application({
    path: electronPath,
    args: [path.join(__dirname, '..', 'app')],
});

describe('Application launch', function() {
    this.timeout(10000);

    beforeEach(function() {
        return app.start();
    });

    afterEach(function() {
        return app.stop();
    });

    it('shows initial window', function() {
        return app.client.getWindowCount().then(count => {
            assert.equal(count, 1);
        });
    });

    it('has correct title', async () => {
        const expected = 'BASTA 2019 - Testing';
        const actual = await app.client.pause(900).getTitle();
        return assert.equal(actual, expected);
    });
});
