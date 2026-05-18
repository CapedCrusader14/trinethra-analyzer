function KPITags({ kpis }) {
  if (!kpis || kpis.length === 0) return null;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border'>
      <h2 className='text-2xl font-semibold mb-4'>
        KPI Mapping
      </h2>

      <div className='flex flex-wrap gap-3'>
        {kpis.map((item, index) => (
          <div
            key={index}
            className='bg-gray-200 px-4 py-2 rounded-full'
          >
            {item.kpi}
          </div>
        ))}
      </div>

      <div className='mt-4 space-y-3'>
        {kpis.map((item, index) => (
          <div
            key={index}
            className='border rounded-xl p-3 bg-gray-50'
          >
            <div className='font-semibold mb-1'>
              {item.kpi}
            </div>

            <div className='text-gray-700 text-sm'>
              {item.reason}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KPITags;