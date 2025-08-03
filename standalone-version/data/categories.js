// Auto-generated from categories.json
window.categories = {
  "dashboard": {
    "title": "Dashboard",
    "intro": "Overview of PostgreSQL knowledge base with metrics and quick access to common issues."
  },
  "glossary": {
    "title": "Glossary",
    "intro": "This section provides definitions for common PostgreSQL terms and concepts.",
    "dataFile": "glossary.json"
  },
  "postgresql-installation-guide": {
    "title": "Installation Guide",
    "intro": "This guide covers the steps for installing PostgreSQL on various operating systems.",
    "dataFile": "installation.json"
  },
  "system-catalog-tables": {
    "title": "System Catalog Tables",
    "intro": "PostgreSQL maintains a set of system catalog tables that store metadata about the database objects (tables, columns, indexes, functions, etc.) and their properties. These tables are crucial for the database's internal operations and can be queried by users to gain insights into the database structure.",
    "dataFile": "catalog.json"
  },
  "architecture": {
    "title": "Architecture",
    "intro": "Understanding PostgreSQL's multi-layered architecture including logical components, physical storage, background processes, and concurrency control mechanisms.",
    "dataFile": "postgresql-architecture.json"
  },
  "acid-properties": {
    "title": "ACID Properties",
    "intro": "ACID (Atomicity, Consistency, Isolation, Durability) properties ensure database transactions are processed reliably. This section explores how PostgreSQL implements ACID compliance and their practical applications in business scenarios.",
    "dataFile": "acid-properties.json"
  },
  "mvcc": {
    "title": "MVCC",
    "intro": "Multi-Version Concurrency Control (MVCC) is PostgreSQL's approach to handling concurrent transactions without locking readers. This section covers what MVCC is, how it works, its benefits for high-concurrency applications, and specific business use cases where MVCC provides significant advantages.",
    "dataFile": "mvcc.json"
  },
  "connection-errors": {
    "title": "Connection & Authentication",
    "intro": "This section addresses common issues related to connecting to PostgreSQL and authentication failures.",
    "dataFile": "connection-errors.json"
  },
  "query-performance": {
    "title": "Query Performance Issues",
    "intro": "Common problems related to slow queries, high CPU usage, and query optimization challenges.",
    "dataFile": "query-performance.json"
  },
  "locks-deadlocks": {
    "title": "Locking & Concurrency",
    "intro": "Issues related to database locking, deadlocks, and transaction conflicts that can block operations.",
    "dataFile": "locks-deadlocks.json"
  },
  "memory-resources": {
    "title": "Memory & Resource Issues",
    "intro": "Problems related to memory allocation, connection limits, and system resource constraints.",
    "dataFile": "memory-resources.json"
  },
  "backup-recovery": {
    "title": "Backup & Recovery",
    "intro": "Common issues encountered during backup operations, WAL archiving, and database recovery procedures.",
    "dataFile": "backup-recovery.json"
  },
  "replication-issues": {
    "title": "Replication Issues",
    "intro": "Problems with streaming replication, standby servers, and replication lag management.",
    "dataFile": "replication-issues.json"
  },
  "configuration-tuning": {
    "title": "Configuration & Tuning",
    "intro": "Issues related to PostgreSQL configuration, parameter tuning, and performance optimization settings.",
    "dataFile": "configuration-tuning.json"
  },
  "permissions-roles": {
    "title": "Permissions & Roles",
    "intro": "Access control problems, role management issues, and permission-related errors.",
    "dataFile": "permissions-roles.json"
  },
  "data-corruption": {
    "title": "Data Corruption & Integrity",
    "intro": "Issues related to data corruption, page errors, and database integrity problems.",
    "dataFile": "data-corruption.json"
  },
  "extension-errors": {
    "title": "Extension Errors",
    "intro": "Problems with PostgreSQL extensions, library loading, and extension management.",
    "dataFile": "extension-errors.json"
  },
  "indexes": {
    "title": "Indexes",
    "intro": "Database indexes are specialized data structures that improve query performance by creating shortcuts to data. In PostgreSQL, indexes are crucial for fast data retrieval, supporting various types including B-tree, Hash, GiST, SP-GiST, GIN, and BRIN. They accelerate SELECT operations, enforce uniqueness constraints, and support foreign key relationships. However, indexes require maintenance overhead during INSERT, UPDATE, and DELETE operations. This section covers index types, their characteristics, use cases, and best practices for different data types and query patterns.",
    "dataFile": "indexes-knowledge.json"
  },
  "joins": {
    "title": "Joins",
    "intro": "JOIN operations are fundamental to relational databases, allowing you to combine data from multiple tables based on related columns. PostgreSQL supports various join types including INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN, CROSS JOIN, and specialized joins like LATERAL and semi/anti-joins. The query planner chooses from different join algorithms (nested loop, hash join, sort-merge join) based on data characteristics and available indexes. This section explains different join types, their behavior, performance characteristics, and when to use each type effectively.",
    "dataFile": "joins-knowledge.json"
  },
  "full-text-search": {
    "title": "Full Text Search",
    "intro": "Full Text Search (FTS) in PostgreSQL provides powerful capabilities for searching text content within your database. Unlike simple pattern matching, FTS offers sophisticated text analysis, ranking, stemming, and relevance scoring. This section covers FTS data types, indexing strategies, query techniques, performance optimization, and real-world business applications including e-commerce search, content management, and knowledge bases.",
    "dataFile": "full-text-search.json"
  },
  "index-errors": {
    "title": "Index Errors",
    "intro": "Issues related to index creation, maintenance, performance, and optimization in PostgreSQL.",
    "dataFile": "indexes.json"
  },
  "join-errors": {
    "title": "Join Errors",
    "intro": "Problems with JOIN operations, query optimization, and performance issues in table relationships.",
    "dataFile": "joins.json"
  }
};
