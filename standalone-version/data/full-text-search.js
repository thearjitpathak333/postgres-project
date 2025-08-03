// Auto-generated from full-text-search.json
window.full_text_search = [
  {
    "title": "What is Full Text Search?",
    "overview": "Full Text Search (FTS) in PostgreSQL is a powerful feature that allows you to search for words and phrases within text documents stored in your database. Unlike simple pattern matching with LIKE, FTS provides sophisticated text analysis, ranking, and relevance scoring.",
    "key_features": "PostgreSQL FTS includes text preprocessing, stemming, stop word removal, ranking algorithms, phrase searching, boolean operators, and support for multiple languages. It can handle complex queries with AND, OR, NOT operations and provides relevance scoring.",
    "use_cases": "Ideal for content management systems, e-commerce product searches, documentation systems, blog platforms, knowledge bases, customer support systems, and any application requiring sophisticated text search capabilities."
  },
  {
    "title": "Text Search Data Types",
    "definition": "PostgreSQL provides specialized data types for full text search: tsvector for storing preprocessed documents and tsquery for representing search queries.",
    "key_concepts": "tsvector contains lexemes (normalized words) with positional information. tsquery represents search conditions using lexemes and operators (&, |, !, <>). These types enable efficient text search operations and ranking.",
    "performance_impact": "Using proper text search data types dramatically improves search performance compared to LIKE operations. GIN indexes on tsvector columns provide fast search capabilities even on large datasets.",
    "example_queries": [
      {
        "description": "Convert text to tsvector",
        "query": "SELECT to_tsvector('english', 'The quick brown fox jumps over the lazy dog');"
      },
      {
        "description": "Create a search query",
        "query": "SELECT to_tsquery('english', 'quick & fox');"
      },
      {
        "description": "Test if tsvector matches tsquery",
        "query": "SELECT to_tsvector('english', 'The quick brown fox') @@ to_tsquery('english', 'quick & fox');"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/datatype-textsearch.html"
  },
  {
    "title": "Creating Full Text Search Indexes",
    "definition": "GIN (Generalized Inverted Index) indexes are the preferred method for indexing tsvector columns, providing fast full text search capabilities.",
    "key_concepts": "GIN indexes store each lexeme separately with references to documents containing it. This inverted index structure enables rapid text searches across large document collections.",
    "performance_impact": "GIN indexes on tsvector columns can make text searches thousands of times faster than LIKE operations. Index creation time increases with document size but search performance remains consistently fast.",
    "example_queries": [
      {
        "description": "Create a GIN index on a tsvector column",
        "query": "CREATE INDEX idx_documents_search ON documents USING GIN (search_vector);"
      },
      {
        "description": "Create an index on a text column with automatic tsvector conversion",
        "query": "CREATE INDEX idx_articles_content ON articles USING GIN (to_tsvector('english', content));"
      },
      {
        "description": "Create a multicolumn text search index",
        "query": "CREATE INDEX idx_products_search ON products USING GIN (to_tsvector('english', name || ' ' || description));"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch-indexes.html"
  },
  {
    "title": "Basic Text Search Queries",
    "definition": "PostgreSQL provides various operators and functions for performing text searches, from simple word matching to complex boolean queries.",
    "key_concepts": "The @@ operator tests if a tsvector matches a tsquery. Functions like plainto_tsquery() and phraseto_tsquery() help create queries from plain text. Ranking functions provide relevance scoring.",
    "performance_impact": "Proper use of text search operators with GIN indexes provides excellent performance. Avoid converting text to tsvector in WHERE clauses without indexes.",
    "example_queries": [
      {
        "description": "Simple text search using plainto_tsquery",
        "query": "SELECT title, content FROM articles WHERE to_tsvector('english', content) @@ plainto_tsquery('english', 'postgresql database');"
      },
      {
        "description": "Boolean search with AND/OR operators",
        "query": "SELECT * FROM products WHERE to_tsvector('english', name || ' ' || description) @@ to_tsquery('english', 'laptop & (gaming | business)');"
      },
      {
        "description": "Phrase search",
        "query": "SELECT * FROM documents WHERE search_vector @@ phraseto_tsquery('english', 'machine learning algorithms');"
      },
      {
        "description": "Search with ranking",
        "query": "SELECT title, ts_rank(search_vector, query) AS rank FROM articles, plainto_tsquery('english', 'postgresql') query WHERE search_vector @@ query ORDER BY rank DESC;"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch-controls.html"
  },
  {
    "title": "Advanced Search Features",
    "definition": "PostgreSQL FTS supports advanced features like proximity searches, weight-based ranking, highlighting, and custom text search configurations.",
    "key_concepts": "Proximity operators (<N>) find words within N positions. Weight categories (A, B, C, D) allow different importance levels. ts_headline() highlights search terms in results. Custom configurations support different languages and stemming rules.",
    "performance_impact": "Advanced features may impact performance but provide much better search relevance and user experience. Proper indexing and query optimization remain crucial.",
    "example_queries": [
      {
        "description": "Proximity search - words within 3 positions",
        "query": "SELECT * FROM articles WHERE search_vector @@ to_tsquery('english', 'database <3> performance');"
      },
      {
        "description": "Weighted search with different importance levels",
        "query": "SELECT title, ts_rank_cd('{0.1, 0.2, 0.4, 1.0}', search_vector, query) AS rank FROM articles, to_tsquery('english', 'postgresql') query WHERE search_vector @@ query ORDER BY rank DESC;"
      },
      {
        "description": "Highlight search terms in results",
        "query": "SELECT title, ts_headline('english', content, plainto_tsquery('english', 'postgresql database'), 'MaxWords=20, MinWords=5') FROM articles WHERE to_tsvector('english', content) @@ plainto_tsquery('english', 'postgresql database');"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch-features.html"
  },
  {
    "title": "Implementing Search in Applications",
    "definition": "Best practices for implementing full text search in real-world applications, including schema design, indexing strategies, and query optimization.",
    "key_concepts": "Use dedicated tsvector columns for better performance, implement proper indexing strategies, handle multiple languages, and optimize for your specific search patterns. Consider using triggers to maintain search vectors automatically.",
    "performance_impact": "Well-designed FTS implementations can handle millions of documents with sub-second search times. Proper schema design and indexing are crucial for scalability.",
    "business_use_cases": "E-commerce product search, content management systems, customer support knowledge bases, document management systems, job boards, real estate listings, and any application requiring sophisticated text search.",
    "example_queries": [
      {
        "description": "Create a table with dedicated search vector column",
        "query": "CREATE TABLE articles (\n  id SERIAL PRIMARY KEY,\n  title TEXT NOT NULL,\n  content TEXT NOT NULL,\n  search_vector tsvector\n);"
      },
      {
        "description": "Create trigger to automatically update search vector",
        "query": "CREATE OR REPLACE FUNCTION update_search_vector() RETURNS trigger AS $$\nBEGIN\n  NEW.search_vector := setweight(to_tsvector('english', COALESCE(NEW.title, '')), 'A') ||\n                       setweight(to_tsvector('english', COALESCE(NEW.content, '')), 'B');\n  RETURN NEW;\nEND;\n$$ LANGUAGE plpgsql;\n\nCRETE TRIGGER articles_search_update\n  BEFORE INSERT OR UPDATE ON articles\n  FOR EACH ROW EXECUTE FUNCTION update_search_vector();"
      },
      {
        "description": "Complex search with multiple criteria and ranking",
        "query": "SELECT \n  id, title,\n  ts_rank_cd(search_vector, query, 32) AS rank,\n  ts_headline('english', content, query, 'MaxWords=30') AS snippet\nFROM articles, plainto_tsquery('english', 'postgresql performance tuning') query\nWHERE search_vector @@ query\nORDER BY rank DESC\nLIMIT 10;"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch-tables.html"
  },
  {
    "title": "Business Use Cases for Full Text Search",
    "overview": "Full Text Search provides significant business value across various industries and applications by enabling users to quickly find relevant information.",
    "key_features": "Improves user experience, reduces support costs, increases content discoverability, enables self-service capabilities, and provides competitive advantages in content-heavy applications.",
    "use_cases": "E-commerce platforms use FTS for product discovery, increasing sales conversion. Knowledge bases reduce support ticket volume. Content platforms improve user engagement. Document management systems enable efficient information retrieval.",
    "business_use_cases": "E-commerce: Product search with filters, autocomplete, and recommendations. Healthcare: Medical record search, drug interaction lookup. Legal: Case law research, document discovery. Education: Course content search, research databases. Media: Article archives, video transcription search."
  },
  {
    "title": "Performance Optimization",
    "definition": "Strategies and techniques for optimizing full text search performance in production environments.",
    "key_concepts": "Use appropriate GIN index configurations, optimize tsvector storage, implement proper caching strategies, and tune search queries for your specific use case. Consider partitioning for very large datasets.",
    "performance_impact": "Proper optimization can improve search performance by orders of magnitude. Regular maintenance and monitoring are essential for sustained performance.",
    "example_queries": [
      {
        "description": "Create optimized GIN index with custom parameters",
        "query": "CREATE INDEX idx_documents_search ON documents USING GIN (search_vector) WITH (fastupdate = off, gin_pending_list_limit = 4096);"
      },
      {
        "description": "Analyze search performance",
        "query": "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM articles WHERE search_vector @@ plainto_tsquery('english', 'postgresql database');"
      },
      {
        "description": "Monitor index usage",
        "query": "SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read, idx_tup_fetch FROM pg_stat_user_indexes WHERE indexname LIKE '%search%';"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch-debugging.html"
  },
  {
    "title": "Multi-language Support",
    "definition": "PostgreSQL FTS supports multiple languages with different text search configurations for proper stemming, stop words, and text processing rules.",
    "key_concepts": "Each language has its own text search configuration with specific stemming rules and stop words. You can create custom configurations or use built-in ones for major languages.",
    "performance_impact": "Language-specific configurations improve search relevance and accuracy. Multiple language support may require additional storage and indexing considerations.",
    "example_queries": [
      {
        "description": "List available text search configurations",
        "query": "SELECT cfgname, cfgowner::regrole, cfgparser::regproc FROM pg_ts_config;"
      },
      {
        "description": "Search with specific language configuration",
        "query": "SELECT * FROM articles WHERE to_tsvector('spanish', content) @@ plainto_tsquery('spanish', 'base de datos');"
      },
      {
        "description": "Create multilingual search",
        "query": "SELECT * FROM articles WHERE \n  to_tsvector('english', content) @@ plainto_tsquery('english', 'database') OR\n  to_tsvector('spanish', content) @@ plainto_tsquery('spanish', 'base de datos');"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch-configuration.html"
  },
  {
    "title": "Common FTS Patterns and Best Practices",
    "definition": "Proven patterns and best practices for implementing robust and scalable full text search solutions.",
    "key_concepts": "Separate search vectors from content, use appropriate weights, implement autocomplete functionality, handle typos and fuzzy matching, and provide search analytics and monitoring.",
    "performance_impact": "Following best practices ensures optimal performance, maintainability, and user experience. Proper implementation can handle enterprise-scale search requirements.",
    "business_use_cases": "Autocomplete reduces user effort and improves conversion. Search analytics provide insights into user behavior. Typo tolerance improves user satisfaction. Faceted search enables better content discovery.",
    "example_queries": [
      {
        "description": "Implement autocomplete functionality",
        "query": "SELECT DISTINCT word FROM ts_stat('SELECT search_vector FROM articles') WHERE word ILIKE 'postgre%' ORDER BY word LIMIT 10;"
      },
      {
        "description": "Search with typo tolerance using similarity",
        "query": "SELECT title, similarity(title, 'postgresql') AS sim FROM articles WHERE similarity(title, 'postgresql') > 0.3 ORDER BY sim DESC;"
      },
      {
        "description": "Faceted search with aggregation",
        "query": "SELECT category, COUNT(*) as count FROM articles WHERE search_vector @@ plainto_tsquery('english', 'database') GROUP BY category ORDER BY count DESC;"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/textsearch.html"
  }
];