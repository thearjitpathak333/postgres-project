// Auto-generated from joins-knowledge.json
window.joins_knowledge = [
  {
    "title": "What are JOIN Operations?",
    "overview": "JOIN operations combine data from multiple tables based on related columns, forming the foundation of relational database queries. They allow you to retrieve related information stored across different tables in a normalized database design.",
    "key_features": "JOINs support various relationship types (one-to-one, one-to-many, many-to-many), enable complex data retrieval, maintain referential integrity, and provide flexible query capabilities for relational data.",
    "use_cases": "Use JOINs to combine customer and order data, link products with categories, merge user profiles with activity logs, aggregate data across related tables, and create comprehensive reports from normalized data structures."
  },
  {
    "title": "INNER JOIN",
    "definition": "INNER JOIN returns only rows that have matching values in both tables being joined, excluding any rows that don't have a match.",
    "key_concepts": "Most restrictive join type. Only includes rows where the join condition is satisfied in both tables. Commonly used for retrieving related data that must exist in both tables.",
    "performance_impact": "Generally the fastest join type as it produces the smallest result set. Benefits greatly from indexes on join columns. Query planner can optimize effectively.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "LEFT OUTER JOIN (LEFT JOIN)",
    "definition": "LEFT JOIN returns all rows from the left table and matching rows from the right table. When no match exists, NULL values are returned for right table columns.",
    "key_concepts": "Preserves all rows from the left table regardless of matches. Useful for finding records that may or may not have related data. NULL values indicate missing relationships.",
    "performance_impact": "Can produce larger result sets than INNER JOIN. Performance depends on the size of the left table and selectivity of join conditions. Proper indexing is crucial.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "RIGHT OUTER JOIN (RIGHT JOIN)",
    "definition": "RIGHT JOIN returns all rows from the right table and matching rows from the left table. When no match exists, NULL values are returned for left table columns.",
    "key_concepts": "Less commonly used than LEFT JOIN. Preserves all rows from the right table. Can be rewritten as LEFT JOIN by switching table order, which is often preferred for readability.",
    "performance_impact": "Similar performance characteristics to LEFT JOIN. Query planners often convert RIGHT JOINs to LEFT JOINs internally for optimization.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "FULL OUTER JOIN (FULL JOIN)",
    "definition": "FULL JOIN returns all rows from both tables, with NULL values where no match exists on either side. It combines the results of both LEFT and RIGHT JOINs.",
    "key_concepts": "Most inclusive join type. Shows all data from both tables regardless of matches. Useful for comprehensive data analysis and identifying missing relationships in either direction.",
    "performance_impact": "Can produce the largest result sets and may require more memory and processing time. Often requires sort-merge join algorithm for optimal performance.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "CROSS JOIN",
    "definition": "CROSS JOIN produces the Cartesian product of two tables, returning every combination of rows from both tables without any join condition.",
    "key_concepts": "No join condition specified. Result set size equals the product of both table sizes. Rarely used in practice except for specific analytical or mathematical operations.",
    "performance_impact": "Can produce extremely large result sets quickly. Should be used with caution as it can consume significant memory and processing resources.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "NATURAL JOIN",
    "definition": "NATURAL JOIN automatically joins tables based on columns with the same name and compatible data types, without explicitly specifying join conditions.",
    "key_concepts": "Implicit join condition based on column name matching. Can be convenient but potentially dangerous if table schemas change. Generally discouraged in production code.",
    "performance_impact": "Performance similar to equivalent explicit INNER JOIN. However, schema changes can unexpectedly alter query behavior and performance.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "LATERAL JOIN",
    "definition": "LATERAL JOIN allows subqueries in the FROM clause to reference columns from preceding tables, enabling correlated subqueries in the FROM clause.",
    "key_concepts": "Enables advanced query patterns like top-N per group queries. The right side can reference columns from the left side. Often used with functions or complex subqueries.",
    "performance_impact": "Can be expensive as the right side is evaluated for each row from the left side. Proper indexing and query structure are essential for good performance.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL"
  },
  {
    "title": "Semi-Join (EXISTS)",
    "definition": "Semi-join returns rows from the left table where a matching row exists in the right table, but doesn't include columns from the right table in the result.",
    "key_concepts": "Implemented using EXISTS or IN clauses. Tests for existence rather than retrieving data. Stops searching after finding the first match, making it efficient for existence checks.",
    "performance_impact": "Often more efficient than INNER JOIN when you only need to test for existence. Can short-circuit evaluation after finding the first match.",
    "reference_link": "https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-EXISTS"
  },
  {
    "title": "Anti-Join (NOT EXISTS)",
    "definition": "Anti-join returns rows from the left table where no matching row exists in the right table, effectively finding records without relationships.",
    "key_concepts": "Implemented using NOT EXISTS or NOT IN clauses. Useful for finding orphaned records or missing relationships. NOT IN requires careful NULL handling.",
    "performance_impact": "Can be expensive for large datasets. NOT EXISTS is generally preferred over NOT IN when NULLs might be present. Proper indexing is crucial.",
    "reference_link": "https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-EXISTS"
  },
  {
    "title": "Self-Join",
    "definition": "Self-join is a join operation where a table is joined with itself, typically using table aliases to distinguish between the different instances.",
    "key_concepts": "Useful for hierarchical data, comparing rows within the same table, or finding relationships between records in the same table. Requires table aliases for clarity.",
    "performance_impact": "Performance depends on join conditions and indexes. Can be expensive for large tables without proper indexing on join columns.",
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "Join Algorithms: Nested Loop Join",
    "definition": "Nested Loop Join examines each row in the outer table and searches for matching rows in the inner table, similar to nested loops in programming.",
    "key_concepts": "Simple algorithm that works well when the outer table is small or when there's an efficient index on the inner table's join column. Default choice for small datasets.",
    "performance_impact": "Efficient for small outer tables or when inner table has excellent index selectivity. Can be slow for large tables without proper indexing.",
    "reference_link": "https://www.postgresql.org/docs/current/runtime-config-query.html#GUC-ENABLE-NESTLOOP"
  },
  {
    "title": "Join Algorithms: Hash Join",
    "definition": "Hash Join builds a hash table from the smaller table and probes it with rows from the larger table, providing efficient joins for large datasets.",
    "key_concepts": "Builds hash table in memory from the smaller relation. Most efficient for equi-joins when both tables are large. Requires sufficient memory for the hash table.",
    "performance_impact": "Very efficient for large tables with equi-join conditions. Performance degrades if hash table doesn't fit in memory and spills to disk.",
    "reference_link": "https://www.postgresql.org/docs/current/runtime-config-query.html#GUC-ENABLE-HASHJOIN"
  },
  {
    "title": "Join Algorithms: Sort-Merge Join",
    "definition": "Sort-Merge Join sorts both tables on the join columns and then merges them together, efficient for large datasets that are already sorted or can be sorted efficiently.",
    "key_concepts": "Sorts both inputs on join columns then merges them. Efficient when data is already sorted or when indexes provide sorted access. Good for range joins and inequality conditions.",
    "performance_impact": "Efficient for large datasets, especially when data is pre-sorted or when indexes provide sorted access. Can handle non-equi-joins effectively.",
    "reference_link": "https://www.postgresql.org/docs/current/runtime-config-query.html#GUC-ENABLE-MERGEJOIN"
  },
  {
    "title": "Basic JOIN Examples",
    "definition": "Essential JOIN patterns for combining data from multiple tables.",
    "key_concepts": "Common JOIN syntax and patterns used in everyday database operations.",
    "performance_impact": "Proper JOIN usage with appropriate indexes can significantly improve query performance.",
    "example_queries": [
      {
        "description": "INNER JOIN to get customers with their orders",
        "query": "SELECT c.name, o.order_date, o.total\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id;"
      },
      {
        "description": "LEFT JOIN to get all customers, including those without orders",
        "query": "SELECT c.name, o.order_date, o.total\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id;"
      },
      {
        "description": "Multiple JOINs to combine customers, orders, and products",
        "query": "SELECT c.name, o.order_date, p.product_name, oi.quantity\nFROM customers c\nINNER JOIN orders o ON c.customer_id = o.customer_id\nINNER JOIN order_items oi ON o.order_id = oi.order_id\nINNER JOIN products p ON oi.product_id = p.product_id;"
      },
      {
        "description": "Self-join to find employees and their managers",
        "query": "SELECT e.name AS employee, m.name AS manager\nFROM employees e\nLEFT JOIN employees m ON e.manager_id = m.employee_id;"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-JOIN"
  },
  {
    "title": "Advanced JOIN Techniques",
    "definition": "Advanced JOIN patterns for complex data relationships and analytical queries.",
    "key_concepts": "LATERAL JOINs, anti-joins, semi-joins, and complex analytical patterns.",
    "performance_impact": "Advanced JOIN techniques can solve complex problems efficiently when used appropriately.",
    "example_queries": [
      {
        "description": "LATERAL JOIN to get top 3 orders per customer",
        "query": "SELECT c.name, recent_orders.order_date, recent_orders.total\nFROM customers c\nLATERAL (\n  SELECT order_date, total\n  FROM orders o\n  WHERE o.customer_id = c.customer_id\n  ORDER BY order_date DESC\n  LIMIT 3\n) recent_orders;"
      },
      {
        "description": "Anti-join to find customers without orders",
        "query": "SELECT c.name\nFROM customers c\nWHERE NOT EXISTS (\n  SELECT 1 FROM orders o\n  WHERE o.customer_id = c.customer_id\n);"
      },
      {
        "description": "Semi-join to find customers who have placed orders",
        "query": "SELECT c.name\nFROM customers c\nWHERE EXISTS (\n  SELECT 1 FROM orders o\n  WHERE o.customer_id = c.customer_id\n);"
      },
      {
        "description": "FULL OUTER JOIN to compare two datasets",
        "query": "SELECT COALESCE(a.id, b.id) AS id, a.value AS old_value, b.value AS new_value\nFROM old_data a\nFULL OUTER JOIN new_data b ON a.id = b.id\nWHERE a.value IS DISTINCT FROM b.value;"
      }
    ],
    "reference_link": "https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-LATERAL"
  }
];
