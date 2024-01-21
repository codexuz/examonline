import React, { useState, useEffect } from 'react';

const EssayList = () => {
  const [essays, setEssays] = useState([]);
  const [displayedEssays, setDisplayedEssays] = useState(5);

  useEffect(() => {
    // Fetch essays from the JSON file or API endpoint
    fetch('http://examonline-rouge.vercel.app/uploads/essay.json')
      .then(response => response.json())
      .then(data => setEssays(data))
      .catch(error => console.error('Error fetching essays:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleLoadMore = () => {
    setDisplayedEssays(displayedEssays + 5);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {essays.slice(0, displayedEssays).map((essay, index) => (
          <a key={index} className="group focus:outline-none no-underline" href={`/courses/task-2/essay/${essay.slug}/`}>
            <div className="mt-2">
              <h3 className="text-xl font-semibold text-blue-600">{essay.question}</h3>
              <p className="mt-3 text-gray-200">{`${essay.paragraph.slice(0, 280)}...`}</p>
              <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
                Batafsil
                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </p>
            </div>
          </a>
        ))}
      </div>
      {displayedEssays < essays.length && (
        <button className="mt-8 mx-auto bg-transparent border border-blue-600 rounded-2xl text-md px-5 py-[5px] text-blue-600 hover:bg-blue-600 hover:text-white" onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
};

export default EssayList;
