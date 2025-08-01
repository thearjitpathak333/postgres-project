// Auto-generated from query-performance.json
window.query_performance = [
  {
    "title": "ERROR: canceling statement due to statement timeout",
    "description": "A query was automatically terminated because it exceeded the configured statement_timeout limit, preventing long-running operations from completing.",
    "common_causes": "statement_timeout set too low for complex queries, inefficient query execution plans, missing indexes causing full table scans, insufficient work_mem for sorting operations.",
    "resolution": "- Increase statement_timeout: `SET statement_timeout = '10min';` or in postgresql.conf.\\n- Optimize the query using EXPLAIN ANALYZE to identify bottlenecks.\\n- Add missing indexes: `CREATE INDEX ON table_name (column_name);`.\\n- Increase work_mem for complex queries: `SET work_mem = '256MB';`."
  },
  {
    "title": "WARNING: Slow query execution detected on table 1",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 1)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 1",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 1)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 1",
    "description": "Query performing full table scan on large table impacting performance (Variation 1)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 2",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 2)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 2",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 2)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 2",
    "description": "Query performing full table scan on large table impacting performance (Variation 2)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 3",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 3)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 3",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 3)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 3",
    "description": "Query performing full table scan on large table impacting performance (Variation 3)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 4",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 4)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 4",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 4)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 4",
    "description": "Query performing full table scan on large table impacting performance (Variation 4)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 5",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 5)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 5",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 5)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 5",
    "description": "Query performing full table scan on large table impacting performance (Variation 5)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 6",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 6)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 6",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 6)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 6",
    "description": "Query performing full table scan on large table impacting performance (Variation 6)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 7",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 7)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 7",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 7)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 7",
    "description": "Query performing full table scan on large table impacting performance (Variation 7)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 8",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 8)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 8",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 8)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 8",
    "description": "Query performing full table scan on large table impacting performance (Variation 8)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 9",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 9)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 9",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 9)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 9",
    "description": "Query performing full table scan on large table impacting performance (Variation 9)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 10",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 10)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 10",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 10)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 10",
    "description": "Query performing full table scan on large table impacting performance (Variation 10)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 11",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 11)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 11",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 11)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 11",
    "description": "Query performing full table scan on large table impacting performance (Variation 11)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 12",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 12)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 12",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 12)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 12",
    "description": "Query performing full table scan on large table impacting performance (Variation 12)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 13",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 13)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 13",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 13)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 13",
    "description": "Query performing full table scan on large table impacting performance (Variation 13)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 14",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 14)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 14",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 14)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 14",
    "description": "Query performing full table scan on large table impacting performance (Variation 14)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 15",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 15)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 15",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 15)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 15",
    "description": "Query performing full table scan on large table impacting performance (Variation 15)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 16",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 16)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 16",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 16)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 16",
    "description": "Query performing full table scan on large table impacting performance (Variation 16)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 17",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 17)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 17",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 17)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 17",
    "description": "Query performing full table scan on large table impacting performance (Variation 17)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 18",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 18)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 18",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 18)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 18",
    "description": "Query performing full table scan on large table impacting performance (Variation 18)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 19",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 19)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 19",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 19)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 19",
    "description": "Query performing full table scan on large table impacting performance (Variation 19)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 20",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 20)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 20",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 20)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 20",
    "description": "Query performing full table scan on large table impacting performance (Variation 20)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 21",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 21)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 21",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 21)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 21",
    "description": "Query performing full table scan on large table impacting performance (Variation 21)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 22",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 22)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 22",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 22)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 22",
    "description": "Query performing full table scan on large table impacting performance (Variation 22)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 23",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 23)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 23",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 23)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 23",
    "description": "Query performing full table scan on large table impacting performance (Variation 23)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 24",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 24)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 24",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 24)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 24",
    "description": "Query performing full table scan on large table impacting performance (Variation 24)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 25",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 25)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 25",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 25)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 25",
    "description": "Query performing full table scan on large table impacting performance (Variation 25)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 26",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 26)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 26",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 26)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 26",
    "description": "Query performing full table scan on large table impacting performance (Variation 26)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 27",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 27)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 27",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 27)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 27",
    "description": "Query performing full table scan on large table impacting performance (Variation 27)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 28",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 28)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 28",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 28)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 28",
    "description": "Query performing full table scan on large table impacting performance (Variation 28)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 29",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 29)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 29",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 29)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 29",
    "description": "Query performing full table scan on large table impacting performance (Variation 29)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 30",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 30)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 30",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 30)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 30",
    "description": "Query performing full table scan on large table impacting performance (Variation 30)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 31",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 31)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 31",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 31)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 31",
    "description": "Query performing full table scan on large table impacting performance (Variation 31)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 32",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 32)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 32",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 32)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 32",
    "description": "Query performing full table scan on large table impacting performance (Variation 32)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 33",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 33)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 33",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 33)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 33",
    "description": "Query performing full table scan on large table impacting performance (Variation 33)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 34",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 34)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 34",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 34)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 34",
    "description": "Query performing full table scan on large table impacting performance (Variation 34)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 35",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 35)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 35",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 35)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 35",
    "description": "Query performing full table scan on large table impacting performance (Variation 35)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 36",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 36)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 36",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 36)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 36",
    "description": "Query performing full table scan on large table impacting performance (Variation 36)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 37",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 37)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 37",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 37)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 37",
    "description": "Query performing full table scan on large table impacting performance (Variation 37)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 38",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 38)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 38",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 38)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 38",
    "description": "Query performing full table scan on large table impacting performance (Variation 38)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 39",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 39)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 39",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 39)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 39",
    "description": "Query performing full table scan on large table impacting performance (Variation 39)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 40",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 40)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 40",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 40)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 40",
    "description": "Query performing full table scan on large table impacting performance (Variation 40)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 41",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 41)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 41",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 41)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 41",
    "description": "Query performing full table scan on large table impacting performance (Variation 41)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 42",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 42)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 42",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 42)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 42",
    "description": "Query performing full table scan on large table impacting performance (Variation 42)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 43",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 43)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 43",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 43)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 43",
    "description": "Query performing full table scan on large table impacting performance (Variation 43)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 44",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 44)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 44",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 44)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 44",
    "description": "Query performing full table scan on large table impacting performance (Variation 44)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 45",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 45)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 45",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 45)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 45",
    "description": "Query performing full table scan on large table impacting performance (Variation 45)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 46",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 46)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 46",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 46)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 46",
    "description": "Query performing full table scan on large table impacting performance (Variation 46)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 47",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 47)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 47",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 47)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 47",
    "description": "Query performing full table scan on large table impacting performance (Variation 47)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 48",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 48)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 48",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 48)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 48",
    "description": "Query performing full table scan on large table impacting performance (Variation 48)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 49",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 49)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 49",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 49)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 49",
    "description": "Query performing full table scan on large table impacting performance (Variation 49)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 50",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 50)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 50",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 50)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 50",
    "description": "Query performing full table scan on large table impacting performance (Variation 50)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 51",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 51)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 51",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 51)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 51",
    "description": "Query performing full table scan on large table impacting performance (Variation 51)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 52",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 52)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 52",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 52)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 52",
    "description": "Query performing full table scan on large table impacting performance (Variation 52)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 53",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 53)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 53",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 53)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 53",
    "description": "Query performing full table scan on large table impacting performance (Variation 53)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 54",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 54)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 54",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 54)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 54",
    "description": "Query performing full table scan on large table impacting performance (Variation 54)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 55",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 55)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 55",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 55)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 55",
    "description": "Query performing full table scan on large table impacting performance (Variation 55)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 56",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 56)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 56",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 56)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 56",
    "description": "Query performing full table scan on large table impacting performance (Variation 56)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 57",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 57)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 57",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 57)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 57",
    "description": "Query performing full table scan on large table impacting performance (Variation 57)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 58",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 58)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 58",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 58)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 58",
    "description": "Query performing full table scan on large table impacting performance (Variation 58)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 59",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 59)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 59",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 59)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 59",
    "description": "Query performing full table scan on large table impacting performance (Variation 59)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 60",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 60)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 60",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 60)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 60",
    "description": "Query performing full table scan on large table impacting performance (Variation 60)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 61",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 61)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 61",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 61)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 61",
    "description": "Query performing full table scan on large table impacting performance (Variation 61)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 62",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 62)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 62",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 62)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 62",
    "description": "Query performing full table scan on large table impacting performance (Variation 62)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 63",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 63)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 63",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 63)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 63",
    "description": "Query performing full table scan on large table impacting performance (Variation 63)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 64",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 64)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 64",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 64)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 64",
    "description": "Query performing full table scan on large table impacting performance (Variation 64)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 65",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 65)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 65",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 65)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 65",
    "description": "Query performing full table scan on large table impacting performance (Variation 65)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 66",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 66)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  },
  {
    "title": "ERROR: Memory exhaustion during sort operation 66",
    "description": "Sorting operation exceeded available memory causing query failure (Variation 66)",
    "common_causes": "work_mem too small, large sort operations, multiple concurrent sorts, inefficient sort algorithms",
    "resolution": "Increase work_mem, optimize sort operations, reduce concurrency, improve sort efficiency"
  },
  {
    "title": "NOTICE: Sequential scan detected on large table 66",
    "description": "Query performing full table scan on large table impacting performance (Variation 66)",
    "common_causes": "Missing indexes, ineffective WHERE clauses, outdated statistics, query structure issues",
    "resolution": "Create appropriate indexes, optimize WHERE clauses, update statistics, restructure queries"
  },
  {
    "title": "WARNING: Slow query execution detected on table 67",
    "description": "Query execution time exceeds performance thresholds indicating optimization needed (Variation 67)",
    "common_causes": "Missing indexes, inefficient joins, large result sets, suboptimal query structure, outdated statistics",
    "resolution": "Add appropriate indexes, optimize joins, limit result sets, restructure queries, update table statistics"
  }
];
