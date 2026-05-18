import { useState } from 'react';

import TranscriptInput from './components/TranscriptInput';
import ScoreCard from './components/ScoreCard';
import EvidenceList from './components/EvidenceList';
import KPITags from './components/KPITags';
import GapAnalysis from './components/GapAnalysis';
import FollowUpQuestions from './components/FollowUpQuestions';

function App() {
  const [transcript, setTranscript] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const runAnalysis = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'http://localhost:5000/api/analyze',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ transcript }),
        }
      );

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();

      setAnalysis(data);
    } catch (err) {
      console.error(err);
      setError('Failed to analyze transcript');
    } finally {
      setLoading(false);
    }
   };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-fuchsia-700 p-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-6'>
          <h1 className='text-4xl font-bold mb-2'>
            Trinethra Analyzer
          </h1>

          <p className='text-gray-600'>
            AI-assisted Fellow performance analysis system.
          </p>
        </div>

        <div className='bg-yellow-100 border border-yellow-300 text-yellow-900 p-4 rounded-xl mb-6'>
          Made By- Siddharth Pandey :copyright: 2024
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <TranscriptInput
              transcript={transcript}
              setTranscript={setTranscript}
              runAnalysis={runAnalysis}
              loading={loading}
            />

            {error && (
              <div className='mt-4 bg-red-100 text-red-700 p-3 rounded-xl'>
                {error}
              </div>
            )}
          </div>

          <div className='space-y-6'>
            {analysis && (
              <>
                <ScoreCard rubricScore={analysis.rubricScore} />

                <EvidenceList evidence={analysis.evidence} />

                <KPITags kpis={analysis.kpiMapping} />

                <GapAnalysis gaps={analysis.gapAnalysis} />

                <FollowUpQuestions
                  questions={analysis.followUpQuestions}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;