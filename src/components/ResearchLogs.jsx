import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/posts';

const ResearchLogs = ({ limit }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setLogs(allPosts);
      } catch (error) {
        console.error("Failed to load research logs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const displayLogs = limit ? logs.slice(0, limit) : logs;

  if (loading) {
    return (
        <section className="py-24 border-b border-neutral-900">
            <div className="container mx-auto px-6">
                 <div className="font-mono text-xs text-neutral-500 animate-pulse">LOADING_DATA_STREAM...</div>
            </div>
        </section>
    );
  }

  return (
    <section className="py-24 border-b border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
              <h2 className="text-3xl font-mono font-bold mb-2">RESEARCH_LOGS</h2>
              <p className="text-neutral-500 text-sm">Access strictly for authorized personnel.</p>
          </div>
          {limit && (
            <Link to="/research" className="text-xs font-bold border border-neutral-800 px-4 py-2 hover:bg-white hover:text-black transition-colors">
                FULL ARCHIVE
            </Link>
          )}
        </div>

        <div className="space-y-0 border-t border-neutral-800">
          {displayLogs.length > 0 ? (
            displayLogs.map((item) => (
              <Link to={`/research/${item.id}`} key={item.id} className="block">
                <div className="group relative flex flex-col md:flex-row items-baseline border-b border-neutral-800 py-6 hover:bg-neutral-900 transition-colors cursor-pointer px-2">
                  <span className="font-mono text-neutral-600 w-24 text-xs">{item.id}</span>
                  <span className="font-mono text-neutral-400 w-32 text-xs mb-2 md:mb-0">{item.date}</span>
                  <h3 className="text-lg md:text-xl font-medium flex-grow group-hover:translate-x-4 transition-transform duration-300">
                    {item.title}
                  </h3>
                  {item.tags && item.tags.length > 0 && (
                     <span className="mt-2 md:mt-0 text-[10px] border border-neutral-800 px-2 py-1 uppercase tracking-wider text-neutral-500 group-hover:border-white group-hover:text-white transition-colors">
                        {item.tags[0]}
                     </span>
                  )}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-10 text-neutral-500 font-mono text-sm">NO_LOGS_FOUND</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResearchLogs;
