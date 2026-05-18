const express = require('express');
const fs = require('fs');
const path = require('path');

const generateAnalysis = require('../services/ollamaService');
const buildPrompt = require('../prompts/analysisPrompt');
const extractJSON = require('../utils/extractJSON');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { transcript } = req.body;

    const rubric = JSON.parse(
      fs.readFileSync(path.join(__dirname, '../data/rubric.json'))
    );

    const context = fs.readFileSync(
      path.join(__dirname, '../data/context.md'),
      'utf-8'
    );

    const prompt = buildPrompt(transcript, rubric, context);

    const rawOutput = await generateAnalysis(prompt);

    const parsed = extractJSON(rawOutput);

    res.json(parsed);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: 'Analysis failed'
    });
  }
});

module.exports = router;