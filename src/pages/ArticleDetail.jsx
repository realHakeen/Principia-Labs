import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ParticleBackground from '../components/ParticleBackground';
import { getPostById } from '../utils/posts';

const ArticleDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Scroll to top on mount and fetch post
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const loadPost = async () => {
        setLoading(true);
        const foundPost = await getPostById(id);
        setPost(foundPost);
        setLoading(false);
    };

    loadPost();
  }, [id]);

  if (loading) {
     return (
        <div className="min-h-screen bg-black text-neutral-500 flex items-center justify-center font-mono">
          LOADING_ENCRYPTED_DATA...
        </div>
      );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
        <div className="text-center">
            <h1 className="text-4xl mb-4">404_NOT_FOUND</h1>
            <p className="text-neutral-500 mb-8">The requested block hash does not exist.</p>
            <Link to="/research" className="border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors">
                RETURN TO BASE
            </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-neutral-300 font-sans pt-32 pb-20 selection:bg-green-900 selection:text-white">
      <ParticleBackground />
      
      {/* Progress Bar (Simple) */}
      <div className="fixed top-0 left-0 h-[2px] bg-white/20 w-full z-50">
          <div className="h-full bg-white w-[30%]"></div> 
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Back Nav */}
        <Link to="/research" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white mb-12 transition-colors group">
          <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
          BACK_TO_ARCHIVE
        </Link>

        {/* Header */}
        <header className="mb-16 border-b border-neutral-800 pb-12">
          <div className="flex flex-wrap gap-3 mb-8 text-[10px] font-mono uppercase tracking-widest">
             {post.tags?.map(tag => (
                <span key={tag} className="border border-neutral-800 px-3 py-1 text-neutral-400">
                    {tag}
                </span>
             ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
            {post.title}
          </h1>
          
          {post.subtitle && (
              <p className="text-xl text-neutral-400 font-light mb-8 max-w-2xl">
                  {post.subtitle}
              </p>
          )}

          <div className="flex flex-wrap items-center gap-y-4 gap-x-12 text-xs font-mono text-neutral-500 pt-8 border-t border-neutral-900/50">
            <div>
              <span className="block text-neutral-700 mb-1">AUTHOR</span>
              <span className="text-white">{post.author || 'Principia Research'}</span>
            </div>
            <div>
              <span className="block text-neutral-700 mb-1">PUBLISHED</span>
              <span className="text-white">{post.date}</span>
            </div>
             <div>
              <span className="block text-neutral-700 mb-1">READ TIME</span>
              <span className="text-white flex items-center gap-2">
                  <Clock size={10} /> {post.readTime || '5 MIN'}
              </span>
            </div>
             <div className="ml-auto">
              <button className="flex items-center gap-2 hover:text-white transition-colors border border-transparent hover:border-neutral-800 px-3 py-1">
                <Share2 size={14} /> SHARE
              </button>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-mono prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white
            prose-p:leading-loose prose-p:text-neutral-400
            prose-a:text-white prose-a:underline prose-a:decoration-neutral-700 prose-a:underline-offset-4 hover:prose-a:decoration-white
            prose-blockquote:border-l-2 prose-blockquote:border-white prose-blockquote:pl-6 prose-blockquote:text-white prose-blockquote:font-light prose-blockquote:not-italic
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-green-400 prose-code:bg-neutral-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-mono prose-code:text-sm
            ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

      </div>
    </article>
  );
};

export default ArticleDetail;
