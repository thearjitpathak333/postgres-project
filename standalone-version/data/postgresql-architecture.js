// Auto-generated from postgresql-architecture.json
window.postgresql_architecture = [
  {
    "title": "PostgreSQL Architecture Overview",
    "overview": "PostgreSQL follows a multi-process architecture with distinct layers handling different aspects of database operations.",
    "key_features": "Process-based architecture, shared memory, background processes, and MVCC concurrency control",
    "use_cases": "Understanding system internals, performance tuning, troubleshooting, and monitoring"
  },
  {
    "title": "Logical Architecture",
    "layer": "Logical Architecture",
    "content": "Query lifecycle: Parser → Planner → Executor",
    "description": "The logical architecture defines how PostgreSQL processes queries through a three-stage pipeline",
    "components": [
      {
        "name": "Parser",
        "description": "Converts SQL text into parse tree, performs syntax checking"
      },
      {
        "name": "Planner",
        "description": "Creates execution plan, performs query optimization"
      },
      {
        "name": "Executor",
        "description": "Executes the plan, returns results"
      }
    ],
    "diagram": "<svg viewBox='0 0 600 120' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrowhead' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#374151'/></marker></defs><rect x='10' y='40' width='80' height='40' rx='5' fill='#E5E7EB' stroke='#374151' stroke-width='2'/><text x='50' y='65' text-anchor='middle' font-family='Arial' font-size='12' fill='#374151'>SQL Query</text><rect x='130' y='40' width='80' height='40' rx='5' fill='#DBEAFE' stroke='#3B82F6' stroke-width='2'/><text x='170' y='65' text-anchor='middle' font-family='Arial' font-size='12' fill='#1E40AF'>Parser</text><rect x='250' y='40' width='80' height='40' rx='5' fill='#DCFCE7' stroke='#10B981' stroke-width='2'/><text x='290' y='65' text-anchor='middle' font-family='Arial' font-size='12' fill='#047857'>Planner</text><rect x='370' y='40' width='80' height='40' rx='5' fill='#FEF3C7' stroke='#F59E0B' stroke-width='2'/><text x='410' y='65' text-anchor='middle' font-family='Arial' font-size='12' fill='#92400E'>Executor</text><rect x='490' y='40' width='80' height='40' rx='5' fill='#F3E8FF' stroke='#8B5CF6' stroke-width='2'/><text x='530' y='65' text-anchor='middle' font-family='Arial' font-size='12' fill='#6B21A8'>Results</text><line x1='90' y1='60' x2='130' y2='60' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead)'/><line x1='210' y1='60' x2='250' y2='60' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead)'/><line x1='330' y1='60' x2='370' y2='60' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead)'/><line x1='450' y1='60' x2='490' y2='60' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead)'/></svg>",
    "example_query": "EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM users WHERE age > 25;"
  },
  {
    "title": "Physical Storage",
    "layer": "Physical Storage",
    "content": "Data directory, pg_wal, heap files, visibility map",
    "description": "Physical storage layer manages how data is stored on disk and in memory",
    "components": [
      {
        "name": "Data Directory",
        "description": "Main directory containing all database files and subdirectories"
      },
      {
        "name": "pg_wal",
        "description": "Write-Ahead Log directory for transaction durability"
      },
      {
        "name": "Heap Files",
        "description": "Table data files storing actual row data"
      },
      {
        "name": "Visibility Map",
        "description": "Tracks which pages contain only visible tuples for vacuum optimization"
      }
    ],
    "diagram": "<svg viewBox='0 0 400 300' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrowhead2' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#374151'/></marker></defs><rect x='150' y='20' width='100' height='40' rx='5' fill='#FEE2E2' stroke='#EF4444' stroke-width='2'/><text x='200' y='45' text-anchor='middle' font-family='Arial' font-size='12' fill='#991B1B'>Data Directory</text><rect x='50' y='100' width='80' height='30' rx='5' fill='#DBEAFE' stroke='#3B82F6' stroke-width='2'/><text x='90' y='120' text-anchor='middle' font-family='Arial' font-size='11' fill='#1E40AF'>Base</text><rect x='160' y='100' width='80' height='30' rx='5' fill='#DCFCE7' stroke='#10B981' stroke-width='2'/><text x='200' y='120' text-anchor='middle' font-family='Arial' font-size='11' fill='#047857'>pg_wal</text><rect x='270' y='100' width='80' height='30' rx='5' fill='#FEF3C7' stroke='#F59E0B' stroke-width='2'/><text x='310' y='120' text-anchor='middle' font-family='Arial' font-size='11' fill='#92400E'>pg_stat</text><rect x='20' y='170' width='100' height='30' rx='5' fill='#F3E8FF' stroke='#8B5CF6' stroke-width='2'/><text x='70' y='190' text-anchor='middle' font-family='Arial' font-size='10' fill='#6B21A8'>Database OID dirs</text><rect x='10' y='230' width='80' height='25' rx='3' fill='#FDF2F8' stroke='#EC4899' stroke-width='1'/><text x='50' y='247' text-anchor='middle' font-family='Arial' font-size='9' fill='#BE185D'>Table Files</text><rect x='100' y='230' width='80' height='25' rx='3' fill='#F0FDF4' stroke='#22C55E' stroke-width='1'/><text x='140' y='247' text-anchor='middle' font-family='Arial' font-size='9' fill='#15803D'>Index Files</text><rect x='200' y='170' width='90' height='30' rx='5' fill='#FFF7ED' stroke='#F97316' stroke-width='2'/><text x='245' y='190' text-anchor='middle' font-family='Arial' font-size='10' fill='#C2410C'>WAL Segments</text><line x1='180' y1='60' x2='90' y2='100' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/><line x1='200' y1='60' x2='200' y2='100' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/><line x1='220' y1='60' x2='310' y2='100' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/><line x1='70' y1='130' x2='70' y2='170' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/><line x1='50' y1='200' x2='50' y2='230' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/><line x1='90' y1='200' x2='140' y2='230' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/><line x1='220' y1='130' x2='245' y2='170' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead2)'/></svg>",
    "example_query": "SELECT name, setting FROM pg_settings WHERE name LIKE '%data_directory%';"
  },
  {
    "title": "Background Processes",
    "layer": "Background Processes",
    "content": "Checkpointer, WAL Writer, Autovacuum, Archiver",
    "description": "Background processes handle maintenance tasks and ensure database consistency",
    "components": [
      {
        "name": "Checkpointer",
        "description": "Writes dirty buffers to disk at checkpoint intervals"
      },
      {
        "name": "WAL Writer",
        "description": "Writes WAL buffers to disk periodically"
      },
      {
        "name": "Autovacuum",
        "description": "Automatically runs VACUUM and ANALYZE operations"
      },
      {
        "name": "Archiver",
        "description": "Archives completed WAL files for backup and recovery"
      }
    ],
    "diagram": "<svg viewBox='0 0 500 350' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrowhead3' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#374151'/></marker></defs><rect x='180' y='20' width='140' height='40' rx='5' fill='#FEE2E2' stroke='#EF4444' stroke-width='2'/><text x='250' y='45' text-anchor='middle' font-family='Arial' font-size='12' fill='#991B1B'>PostgreSQL Instance</text><rect x='50' y='100' width='100' height='30' rx='5' fill='#DBEAFE' stroke='#3B82F6' stroke-width='2'/><text x='100' y='120' text-anchor='middle' font-family='Arial' font-size='11' fill='#1E40AF'>Checkpointer</text><rect x='200' y='100' width='100' height='30' rx='5' fill='#DCFCE7' stroke='#10B981' stroke-width='2'/><text x='250' y='120' text-anchor='middle' font-family='Arial' font-size='11' fill='#047857'>WAL Writer</text><rect x='350' y='100' width='120' height='30' rx='5' fill='#FEF3C7' stroke='#F59E0B' stroke-width='2'/><text x='410' y='120' text-anchor='middle' font-family='Arial' font-size='11' fill='#92400E'>Autovacuum Launcher</text><rect x='50' y='180' width='80' height='30' rx='5' fill='#F3E8FF' stroke='#8B5CF6' stroke-width='2'/><text x='90' y='200' text-anchor='middle' font-family='Arial' font-size='11' fill='#6B21A8'>Archiver</text><rect x='350' y='180' width='120' height='30' rx='5' fill='#FDF2F8' stroke='#EC4899' stroke-width='2'/><text x='410' y='200' text-anchor='middle' font-family='Arial' font-size='11' fill='#BE185D'>Autovacuum Workers</text><rect x='50' y='260' width='100' height='30' rx='5' fill='#F0FDF4' stroke='#22C55E' stroke-width='2'/><text x='100' y='280' text-anchor='middle' font-family='Arial' font-size='11' fill='#15803D'>Shared Buffers</text><rect x='200' y='260' width='100' height='30' rx='5' fill='#FFF7ED' stroke='#F97316' stroke-width='2'/><text x='250' y='280' text-anchor='middle' font-family='Arial' font-size='11' fill='#C2410C'>WAL Buffers</text><line x1='220' y1='60' x2='100' y2='100' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/><line x1='250' y1='60' x2='250' y2='100' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/><line x1='280' y1='60' x2='410' y2='100' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/><line x1='200' y1='60' x2='90' y2='180' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/><line x1='410' y1='130' x2='410' y2='180' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/><line x1='100' y1='130' x2='100' y2='260' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/><line x1='250' y1='130' x2='250' y2='260' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead3)'/></svg>",
    "example_query": "SELECT pid, backend_type, state FROM pg_stat_activity WHERE backend_type IN ('checkpointer', 'walwriter', 'autovacuum launcher', 'archiver');"
  },
  {
    "title": "Concurrency Control",
    "layer": "Concurrency",
    "content": "MVCC, row locking, shared buffers",
    "description": "PostgreSQL uses Multi-Version Concurrency Control (MVCC) to handle concurrent transactions",
    "components": [
      {
        "name": "MVCC",
        "description": "Multi-Version Concurrency Control allows readers and writers to work without blocking each other"
      },
      {
        "name": "Row Locking",
        "description": "Fine-grained locking at the row level for concurrent updates"
      },
      {
        "name": "Shared Buffers",
        "description": "Shared memory area for caching frequently accessed data pages"
      }
    ],
    "diagram": "<svg viewBox='0 0 600 200' xmlns='http://www.w3.org/2000/svg'><defs><marker id='arrowhead4' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'><polygon points='0 0, 10 3.5, 0 7' fill='#374151'/></marker></defs><rect x='20' y='40' width='100' height='30' rx='5' fill='#DBEAFE' stroke='#3B82F6' stroke-width='2'/><text x='70' y='60' text-anchor='middle' font-family='Arial' font-size='11' fill='#1E40AF'>Transaction 1</text><rect x='20' y='120' width='100' height='30' rx='5' fill='#DCFCE7' stroke='#10B981' stroke-width='2'/><text x='70' y='140' text-anchor='middle' font-family='Arial' font-size='11' fill='#047857'>Transaction 2</text><rect x='200' y='80' width='100' height='40' rx='5' fill='#FEE2E2' stroke='#EF4444' stroke-width='2'/><text x='250' y='105' text-anchor='middle' font-family='Arial' font-size='12' fill='#991B1B'>MVCC Engine</text><rect x='380' y='40' width='100' height='30' rx='5' fill='#FEF3C7' stroke='#F59E0B' stroke-width='2'/><text x='430' y='60' text-anchor='middle' font-family='Arial' font-size='11' fill='#92400E'>Row Versions</text><rect x='380' y='90' width='100' height='30' rx='5' fill='#F3E8FF' stroke='#8B5CF6' stroke-width='2'/><text x='430' y='110' text-anchor='middle' font-family='Arial' font-size='11' fill='#6B21A8'>Lock Manager</text><rect x='500' y='140' width='100' height='30' rx='5' fill='#FDF2F8' stroke='#EC4899' stroke-width='2'/><text x='550' y='160' text-anchor='middle' font-family='Arial' font-size='11' fill='#BE185D'>Shared Buffers</text><line x1='120' y1='55' x2='200' y2='90' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead4)'/><line x1='120' y1='135' x2='200' y2='110' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead4)'/><line x1='300' y1='90' x2='380' y2='55' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead4)'/><line x1='300' y1='110' x2='380' y2='105' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead4)'/><line x1='480' y1='105' x2='520' y2='140' stroke='#374151' stroke-width='2' marker-end='url(#arrowhead4)'/></svg>",
    "example_query": "SELECT mode, locktype, relation::regclass, pid FROM pg_locks WHERE NOT granted;"
  }
];
