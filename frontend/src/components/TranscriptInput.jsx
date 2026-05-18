function TranscriptInput({
  transcript,
  setTranscript,
  runAnalysis,
  loading,
}) {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border'>
      <h2 className='text-2xl font-semibold mb-4'>
        Transcript Input
      </h2>

      <textarea
        className='w-full border rounded-xl p-4 h-96 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
        placeholder='Paste supervisor transcript here...'
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />

      <button
        onClick={runAnalysis}
        disabled={loading || !transcript}
        className='mt-4 bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 disabled:opacity-50'
      >
        {loading ? 'Analyzing...' : 'Run Analysis'}
      </button>
    </div>
  );
}

export default TranscriptInput;