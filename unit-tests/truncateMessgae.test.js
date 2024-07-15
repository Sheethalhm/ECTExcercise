// tests/truncateMessgae.test.js

// Import the updateOutput function using require (CommonJS style)
const { updateOutput } = require('../truncate_function/truncateMessage');

describe('Ellipsis Feature', () => {
    let fs, path, html;

    beforeAll(() => {
        fs = require('fs');
        path = require('path');
        html = fs.readFileSync(path.resolve(__dirname, '../web/index.html'), 'utf8');

        // Mock the DOM and load the HTML content
        document.documentElement.innerHTML = html;

        // Load the script file (truncateMessage.js)
        const script = document.createElement('script');
        script.src = '../truncate_function/truncateMessage.js';
        document.head.appendChild(script);

        // Ensure updateOutput is available globally
        window.updateOutput = updateOutput;
    });

    test('Enable ellipsis and set word count', () => {
        // Set initial values and trigger updateOutput manually
        document.getElementById('ellipsis-toggle').checked = true;
        document.getElementById('word-count').value = '5';
        document.getElementById('input-text').value = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

        // Manually trigger updateOutput function
        updateOutput();

        const expectedValue = 'Lorem ipsum dolor sit amet...';
        const actualValue = document.getElementById('output-text').textContent;
        expect(actualValue).toBe(expectedValue);
    });

    test('Disable ellipsis and show full text', () => {
        // Set initial values and trigger updateOutput manually
        document.getElementById('ellipsis-toggle').checked = false;
        document.getElementById('word-count').value = '5';
        document.getElementById('input-text').value = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

        // Manually trigger updateOutput function
        updateOutput();

        const expectedValue = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';
        const actualValue = document.getElementById('output-text').textContent;
        expect(actualValue).toBe(expectedValue);
    });

    test('Enable ellipsis and give invalid value < 0', () => {
        // Set initial values and trigger updateOutput manually
        document.getElementById('ellipsis-toggle').checked = true;
        document.getElementById('word-count').value = '-2';
        document.getElementById('input-text').value = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

        // Manually trigger updateOutput function
        updateOutput();

        const expectedValue = 'Please enter valid word count!!';
        const actualValue = document.getElementById('output-text').textContent;
        expect(actualValue).toBe(expectedValue);
    });

    test('Enable ellipsis and give invalid value > 1003', () => {
        // Set initial values and trigger updateOutput manually
        document.getElementById('ellipsis-toggle').checked = true;
        document.getElementById('word-count').value = 1003;
        document.getElementById('input-text').value = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

        // Manually trigger updateOutput function
        updateOutput();

        const expectedValue = 'Please enter valid word count!!';
        const actualValue = document.getElementById('output-text').textContent;
        expect(actualValue).toBe(expectedValue);
    });

});
