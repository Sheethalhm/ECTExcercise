// Define the updateOutput function without exporting it initially
function updateOutput() {
    const enableEllipsis = document.getElementById('ellipsis-toggle').checked;
    const wordCount = parseInt(document.getElementById('word-count').value);
    const text = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    if (enableEllipsis && (wordCount >= 0 && wordCount <= 1000)) {
        const words = text.split(' ').slice(0, wordCount);
        if(wordCount == 0){
            outputText.textContent = words.join(' ');
        }else{
            outputText.textContent = words.join(' ') + '...';
        }
    } else if(enableEllipsis && (wordCount < 0 || wordCount > 1000)) {
        outputText.textContent = 'Please enter valid word count!!';
    } else {
        outputText.textContent = text;
    }
}

// Export the updateOutput function only if running in Node.js (CommonJS environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateOutput };
} else {
    // If not in Node.js, assume we're in a browser environment
    // Attach event listeners for DOMContentLoaded and input changes
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('ellipsis-toggle').addEventListener('change', updateOutput);
        document.getElementById('word-count').addEventListener('input', updateOutput);
        document.getElementById('input-text').addEventListener('input', updateOutput);

        // Initial update on page load
        updateOutput();
    });
}
