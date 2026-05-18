function EvidenceList({ evidence }) {
  if (!evidence || evidence.length === 0) return null;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border'>
      <h2 className='text-2xl font-semibold mb-4'>
        Evidence Extraction
      </h2>

      <div className='space-y-4'>
        {evidence.map((item, index) => (
          <div
            key={index}
            className='border rounded-xl p-4 bg-gray-50'
          >
            <div className='flex justify-between items-center mb-3'>
              <span className='font-semibold'>Quote</span>

              <span className='text-sm bg-black text-white px-3 py-1 rounded-full'>
                {item.sentiment}
              </span>
            </div>

            <p className='italic text-gray-800 mb-3'>
              "{item.quote}"
            </p>

            <p className='text-gray-700'>
              {item.reason}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EvidenceList;