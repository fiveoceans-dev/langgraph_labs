const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to run LangGraph experiment
app.get('/run-experiment', async (req, res) => {
    try {
        const result = await runExperiment();
        res.json({ success: true, result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

