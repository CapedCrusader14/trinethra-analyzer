function ScoreCard({ rubricScore }) {
  if (!rubricScore) return null;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border'>
      <h2 className='text-2xl font-semibold mb-4'>
        Rubric Score
      </h2>

      <div className='text-5xl font-bold mb-4'>
        {rubricScore.score}/5
      </div>

      <p className='text-gray-700 leading-relaxed'>
        {rubricScore.justification}
      </p>
    </div>
  );
}

export default ScoreCard;