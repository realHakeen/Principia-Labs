import matter from 'gray-matter';
import { Buffer } from 'buffer';

// Polyfill Buffer for browser environment (required by gray-matter)
window.Buffer = window.Buffer || Buffer;

/**
 * Loads all markdown posts from src/content/research
 */
export const getAllPosts = async () => {
  // Vite's import.meta.glob to load files
  // eager: false (default) means it returns a function to load the file
  // as: 'raw' means we get the string content
  const modules = import.meta.glob('../content/research/*.md', { query: '?raw', import: 'default' });

  const posts = [];

  for (const path in modules) {
    const rawContent = await modules[path]();
    const { data, content } = matter(rawContent);
    
    // Use the filename or ID from frontmatter as ID
    // If id is not in frontmatter, extract from filename
    const filenameId = path.split('/').pop().replace('.md', '');
    const id = data.id || filenameId;

    posts.push({
      ...data,
      id,
      content, // The raw markdown body
      slug: id, // URL friendly slug
    });
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

/**
 * Get a single post by ID
 */
export const getPostById = async (id) => {
  const posts = await getAllPosts();
  return posts.find(post => post.id === id);
};

