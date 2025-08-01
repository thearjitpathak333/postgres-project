// Auto-generated from indexes-knowledge.json
window.indexes_knowledge = [
  {
    "title": "What are Database Indexes?",
    "overview": "Database indexes are specialized data structures that improve query performance by creating shortcuts to data. They work like an index in a book, allowing the database to quickly locate specific rows without scanning the entire table.",
    "key_features": "Indexes support fast data retrieval, enforce uniqueness constraints, accelerate JOIN operations, and enable efficient sorting and filtering. They are automatically maintained by PostgreSQL when data changes.",
    "use_cases": "Use indexes for frequently queried columns, foreign key columns, columns used in WHERE clauses, ORDER BY clauses, and JOIN conditions. They are essential for large tables and high-performance applications."
  },
  {
    "title": "B-tree Indexes",
    "definition": "B-tree indexes are the default and most commonly used index type in PostgreSQL, suitable for equality and range queries.",
    "key_concepts": "B-tree indexes maintain sorted data in a balanced tree structure, supporting operations like =, <, <=, >, >=, BETWEEN, IN, and pattern matching with LIKE when the pattern is anchored at the beginning.",
    "performance_impact": "Excellent for range queries and sorting operations. Provides O(log n) lookup time and is highly efficient for most common query patterns.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-BTREE"
  },
  {
    "title": "Hash Indexes",
    "definition": "Hash indexes are optimized for equality comparisons and can be faster than B-tree indexes for simple equality lookups.",
    "key_concepts": "Hash indexes use a hash function to map values to bucket locations. They only support equality operators (=) and cannot be used for range queries or sorting.",
    "performance_impact": "Faster than B-tree for equality lookups but limited to equality operations only. Not replicated to standby servers in older PostgreSQL versions.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-HASH"
  },
  {
    "title": "GiST Indexes (Generalized Search Tree)",
    "definition": "GiST indexes are a framework for implementing various indexing strategies, commonly used for geometric data types and full-text search.",
    "key_concepts": "GiST provides a template for creating custom index types. Built-in implementations support geometric types, text search, and range types. Extensible for custom data types.",
    "performance_impact": "Performance varies by implementation. Excellent for geometric queries, text search, and specialized data types that don't fit well with B-tree indexes.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-GIST"
  },
  {
    "title": "SP-GiST Indexes (Space-Partitioned GiST)",
    "definition": "SP-GiST indexes support partitioned search trees for data that can be naturally partitioned into non-overlapping regions.",
    "key_concepts": "Designed for data structures like quadtrees, k-d trees, and radix trees. Particularly effective for text data, IP addresses, and geometric data with natural partitioning.",
    "performance_impact": "Highly efficient for specific data types and query patterns. Can outperform other index types for text prefix searches and certain geometric operations.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-SPGIST"
  },
  {
    "title": "GIN Indexes (Generalized Inverted Index)",
    "definition": "GIN indexes are inverted indexes suitable for data values that contain multiple component values, such as arrays, JSONB, and full-text search.",
    "key_concepts": "GIN indexes store a separate entry for each component value, making them ideal for containment queries, array operations, and full-text search. Support operators like @>, <@, &&, and @@.",
    "performance_impact": "Excellent for complex data types and containment queries. Larger storage overhead but very fast for supported operations on arrays, JSONB, and text search.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-GIN"
  },
  {
    "title": "BRIN Indexes (Block Range Index)",
    "definition": "BRIN indexes store summary information about ranges of table blocks, making them very compact and suitable for large, naturally ordered datasets.",
    "key_concepts": "BRIN indexes store min/max values for each range of blocks. Most effective when data has natural ordering (like timestamps). Very small storage footprint compared to other index types.",
    "performance_impact": "Minimal storage overhead and maintenance cost. Best for very large tables with natural ordering. Less precise than other indexes but extremely space-efficient.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-types.html#INDEXES-TYPES-BRIN"
  },
  {
    "title": "Unique Indexes",
    "definition": "Unique indexes enforce uniqueness constraints while providing the performance benefits of regular indexes.",
    "key_concepts": "Automatically created for PRIMARY KEY and UNIQUE constraints. Prevent duplicate values and can be used for query optimization. Support partial uniqueness with WHERE clauses.",
    "performance_impact": "Same performance characteristics as regular indexes with additional uniqueness enforcement. Essential for maintaining data integrity.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-unique.html"
  },
  {
    "title": "Partial Indexes",
    "definition": "Partial indexes are built on a subset of table rows, defined by a WHERE clause, making them smaller and more efficient for specific query patterns.",
    "key_concepts": "Include only rows that satisfy a specific condition. Reduce index size and maintenance overhead while providing fast access to frequently queried subsets of data.",
    "performance_impact": "Smaller size means faster scans and less maintenance overhead. Highly effective when queries consistently filter on the same conditions.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-partial.html"
  },
  {
    "title": "Expression Indexes",
    "definition": "Expression indexes are built on the result of expressions or functions rather than simple column values.",
    "key_concepts": "Allow indexing of computed values, function results, or complex expressions. Enable efficient queries on transformed data without storing computed columns.",
    "performance_impact": "Enable fast queries on expressions that would otherwise require full table scans. Maintenance overhead increases as expressions must be evaluated for each row change.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-expressional.html"
  },
  {
    "title": "Multicolumn Indexes",
    "definition": "Multicolumn indexes span multiple columns and can optimize queries that filter or sort on multiple columns simultaneously.",
    "key_concepts": "Column order matters significantly. Most selective columns should typically come first. Can satisfy queries on leading columns but not trailing columns alone.",
    "performance_impact": "Very effective for queries using multiple columns in WHERE clauses or ORDER BY. Larger than single-column indexes but can eliminate the need for multiple separate indexes.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-multicolumn.html"
  },
  {
    "title": "Index-Only Scans",
    "definition": "Index-only scans retrieve all required data directly from the index without accessing the table, providing significant performance improvements.",
    "key_concepts": "Possible when all columns needed by a query are included in the index. Requires the visibility map to be up-to-date. Can use covering indexes with INCLUDE clause.",
    "performance_impact": "Dramatically faster than regular index scans as they avoid table access. Most effective with proper VACUUM maintenance to keep visibility maps current.",
    "reference_link": "https://www.postgresql.org/docs/current/indexes-index-only-scans.html"
  },
  {
    "title": "Creating Basic Indexes",
    "definition": "Learn how to create different types of indexes with practical SQL examples.",
    "key_concepts": "Basic index creation syntax and common patterns for improving query performance.",
    "performance_impact": "Proper index creation can dramatically improve query performance, especially for large tables.",
    "example_queries": [
      {
        "description": "Create a basic B-tree index on a single column",
        "query": "CREATE INDEX idx_users_email ON users (email);"
      },
      {
        "description": "Create a unique index",
        "query": "CREATE UNIQUE INDEX idx_products_sku ON products (sku);"
      },
      {
        "description": "Create a multicolumn index",
        "query": "CREATE INDEX idx_orders_customer_date ON orders (customer_id, order_date);"
      },
      {
        "description": "Create a partial index",
        "query": "CREATE INDEX idx_orders_active ON orders (customer_id) WHERE status = 'active';"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/sql-createindex.html"
  },
  {
    "title": "Advanced Index Examples",
    "definition": "Advanced indexing techniques for specialized use cases and data types.",
    "key_concepts": "Expression indexes, GIN indexes for arrays and JSONB, and specialized index types.",
    "performance_impact": "Advanced indexes can provide significant performance improvements for complex queries and specialized data types.",
    "example_queries": [
      {
        "description": "Create an expression index for case-insensitive searches",
        "query": "CREATE INDEX idx_users_email_lower ON users (LOWER(email));"
      },
      {
        "description": "Create a GIN index for JSONB data",
        "query": "CREATE INDEX idx_products_attributes ON products USING GIN (attributes);"
      },
      {
        "description": "Create a GIN index for array data",
        "query": "CREATE INDEX idx_posts_tags ON posts USING GIN (tags);"
      },
      {
        "description": "Create a covering index with INCLUDE clause",
        "query": "CREATE INDEX idx_orders_customer_covering ON orders (customer_id) INCLUDE (order_date, total_amount);"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/indexes-expressional.html"
  }
];
