function buildPrompt(transcript, rubric, context) {
  return `
You are an expert psychology assessment assistant helping analyze Fellow performance.

You must analyze the supervisor transcript and return STRICT VALID JSON ONLY.

No markdown.
No explanations.
No extra text.

Context:
${context}

Rubric:
${JSON.stringify(rubric)}

Transcript:
${transcript}

Return JSON in this exact format:

{
  "evidence": [
    {
      "quote": "string",
      "sentiment": "positive | negative | neutral",
      "reason": "why this matters"
    }
  ],
  "rubricScore": {
    "score": 1,
    "justification": "string"
  },
  "kpiMapping": [
    {
      "kpi": "string",
      "reason": "string"
    }
  ],
  "gapAnalysis": [
    "string"
  ],
  "followUpQuestions": [
    "string"
  ]
}
`;
}

module.exports = buildPrompt;