function FollowUpQuestions({ questions }) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border'>
      <h2 className='text-2xl font-semibold mb-4'>
        Follow-Up Questions
      </h2>

      <div className='space-y-4'>
        {questions.map((question, index) => (
          <textarea
            key={index}
            defaultValue={question}
            className='w-full border rounded-xl p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        ))}
      </div>
    </div>
  );
}

export default FollowUpQuestions;