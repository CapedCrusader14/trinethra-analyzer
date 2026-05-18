function GapAnalysis({ gaps }) {
  if (!gaps || gaps.length === 0) return null;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border'>
      <h2 className='text-2xl font-semibold mb-4'>
        Gap Analysis
      </h2>

      <ul className='list-disc pl-5 space-y-2'>
        {gaps.map((gap, index) => (
          <li key={index} className='text-gray-700'>
            {gap}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GapAnalysis;