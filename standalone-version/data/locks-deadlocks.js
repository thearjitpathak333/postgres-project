// Auto-generated from locks-deadlocks.json
window.locks_deadlocks = [
  {
    "title": "ERROR: deadlock detected",
    "description": "This error occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency that can never be resolved without intervention. PostgreSQL's lock manager automatically detects this situation, aborts one of the transactions, and returns this error.",
    "common_causes": "Two transactions updating the same set of rows but in a different order. Explicitly locking multiple tables (e.g., with `LOCK TABLE`) in an inconsistent order across different application functions. Concurrent updates to parent/child tables that involve foreign key constraints.",
    "resolution": "Ensure that all application code that accesses multiple resources does so in a consistent, well-defined order. Use explicit locking (`SELECT ... FOR UPDATE`) early in the transaction to claim rows. Consider using advisory locks for more complex, application-level locking logic. Analyze the detailed log entry, which specifies which transactions and locks were involved."
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 1",
    "description": "Transaction waited too long to acquire lock on database object (Variation 1)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 1",
    "description": "High contention on advisory locks causing performance degradation (Variation 1)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 2",
    "description": "Transaction waited too long to acquire lock on database object (Variation 2)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 2",
    "description": "High contention on advisory locks causing performance degradation (Variation 2)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 3",
    "description": "Transaction waited too long to acquire lock on database object (Variation 3)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 3",
    "description": "High contention on advisory locks causing performance degradation (Variation 3)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 4",
    "description": "Transaction waited too long to acquire lock on database object (Variation 4)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 4",
    "description": "High contention on advisory locks causing performance degradation (Variation 4)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 5",
    "description": "Transaction waited too long to acquire lock on database object (Variation 5)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 5",
    "description": "High contention on advisory locks causing performance degradation (Variation 5)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 6",
    "description": "Transaction waited too long to acquire lock on database object (Variation 6)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 6",
    "description": "High contention on advisory locks causing performance degradation (Variation 6)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 7",
    "description": "Transaction waited too long to acquire lock on database object (Variation 7)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 7",
    "description": "High contention on advisory locks causing performance degradation (Variation 7)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 8",
    "description": "Transaction waited too long to acquire lock on database object (Variation 8)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 8",
    "description": "High contention on advisory locks causing performance degradation (Variation 8)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 9",
    "description": "Transaction waited too long to acquire lock on database object (Variation 9)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 9",
    "description": "High contention on advisory locks causing performance degradation (Variation 9)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 10",
    "description": "Transaction waited too long to acquire lock on database object (Variation 10)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 10",
    "description": "High contention on advisory locks causing performance degradation (Variation 10)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 11",
    "description": "Transaction waited too long to acquire lock on database object (Variation 11)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 11",
    "description": "High contention on advisory locks causing performance degradation (Variation 11)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 12",
    "description": "Transaction waited too long to acquire lock on database object (Variation 12)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 12",
    "description": "High contention on advisory locks causing performance degradation (Variation 12)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 13",
    "description": "Transaction waited too long to acquire lock on database object (Variation 13)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 13",
    "description": "High contention on advisory locks causing performance degradation (Variation 13)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 14",
    "description": "Transaction waited too long to acquire lock on database object (Variation 14)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 14",
    "description": "High contention on advisory locks causing performance degradation (Variation 14)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 15",
    "description": "Transaction waited too long to acquire lock on database object (Variation 15)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 15",
    "description": "High contention on advisory locks causing performance degradation (Variation 15)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 16",
    "description": "Transaction waited too long to acquire lock on database object (Variation 16)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 16",
    "description": "High contention on advisory locks causing performance degradation (Variation 16)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 17",
    "description": "Transaction waited too long to acquire lock on database object (Variation 17)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 17",
    "description": "High contention on advisory locks causing performance degradation (Variation 17)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 18",
    "description": "Transaction waited too long to acquire lock on database object (Variation 18)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 18",
    "description": "High contention on advisory locks causing performance degradation (Variation 18)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 19",
    "description": "Transaction waited too long to acquire lock on database object (Variation 19)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 19",
    "description": "High contention on advisory locks causing performance degradation (Variation 19)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 20",
    "description": "Transaction waited too long to acquire lock on database object (Variation 20)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 20",
    "description": "High contention on advisory locks causing performance degradation (Variation 20)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 21",
    "description": "Transaction waited too long to acquire lock on database object (Variation 21)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 21",
    "description": "High contention on advisory locks causing performance degradation (Variation 21)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 22",
    "description": "Transaction waited too long to acquire lock on database object (Variation 22)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 22",
    "description": "High contention on advisory locks causing performance degradation (Variation 22)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 23",
    "description": "Transaction waited too long to acquire lock on database object (Variation 23)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 23",
    "description": "High contention on advisory locks causing performance degradation (Variation 23)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 24",
    "description": "Transaction waited too long to acquire lock on database object (Variation 24)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 24",
    "description": "High contention on advisory locks causing performance degradation (Variation 24)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 25",
    "description": "Transaction waited too long to acquire lock on database object (Variation 25)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 25",
    "description": "High contention on advisory locks causing performance degradation (Variation 25)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 26",
    "description": "Transaction waited too long to acquire lock on database object (Variation 26)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 26",
    "description": "High contention on advisory locks causing performance degradation (Variation 26)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 27",
    "description": "Transaction waited too long to acquire lock on database object (Variation 27)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 27",
    "description": "High contention on advisory locks causing performance degradation (Variation 27)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 28",
    "description": "Transaction waited too long to acquire lock on database object (Variation 28)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 28",
    "description": "High contention on advisory locks causing performance degradation (Variation 28)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 29",
    "description": "Transaction waited too long to acquire lock on database object (Variation 29)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 29",
    "description": "High contention on advisory locks causing performance degradation (Variation 29)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 30",
    "description": "Transaction waited too long to acquire lock on database object (Variation 30)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 30",
    "description": "High contention on advisory locks causing performance degradation (Variation 30)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 31",
    "description": "Transaction waited too long to acquire lock on database object (Variation 31)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 31",
    "description": "High contention on advisory locks causing performance degradation (Variation 31)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 32",
    "description": "Transaction waited too long to acquire lock on database object (Variation 32)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 32",
    "description": "High contention on advisory locks causing performance degradation (Variation 32)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 33",
    "description": "Transaction waited too long to acquire lock on database object (Variation 33)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 33",
    "description": "High contention on advisory locks causing performance degradation (Variation 33)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 34",
    "description": "Transaction waited too long to acquire lock on database object (Variation 34)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 34",
    "description": "High contention on advisory locks causing performance degradation (Variation 34)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 35",
    "description": "Transaction waited too long to acquire lock on database object (Variation 35)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 35",
    "description": "High contention on advisory locks causing performance degradation (Variation 35)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 36",
    "description": "Transaction waited too long to acquire lock on database object (Variation 36)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 36",
    "description": "High contention on advisory locks causing performance degradation (Variation 36)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 37",
    "description": "Transaction waited too long to acquire lock on database object (Variation 37)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 37",
    "description": "High contention on advisory locks causing performance degradation (Variation 37)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 38",
    "description": "Transaction waited too long to acquire lock on database object (Variation 38)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 38",
    "description": "High contention on advisory locks causing performance degradation (Variation 38)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 39",
    "description": "Transaction waited too long to acquire lock on database object (Variation 39)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 39",
    "description": "High contention on advisory locks causing performance degradation (Variation 39)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 40",
    "description": "Transaction waited too long to acquire lock on database object (Variation 40)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 40",
    "description": "High contention on advisory locks causing performance degradation (Variation 40)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 41",
    "description": "Transaction waited too long to acquire lock on database object (Variation 41)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 41",
    "description": "High contention on advisory locks causing performance degradation (Variation 41)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 42",
    "description": "Transaction waited too long to acquire lock on database object (Variation 42)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 42",
    "description": "High contention on advisory locks causing performance degradation (Variation 42)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 43",
    "description": "Transaction waited too long to acquire lock on database object (Variation 43)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 43",
    "description": "High contention on advisory locks causing performance degradation (Variation 43)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 44",
    "description": "Transaction waited too long to acquire lock on database object (Variation 44)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 44",
    "description": "High contention on advisory locks causing performance degradation (Variation 44)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 45",
    "description": "Transaction waited too long to acquire lock on database object (Variation 45)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 45",
    "description": "High contention on advisory locks causing performance degradation (Variation 45)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 46",
    "description": "Transaction waited too long to acquire lock on database object (Variation 46)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 46",
    "description": "High contention on advisory locks causing performance degradation (Variation 46)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 47",
    "description": "Transaction waited too long to acquire lock on database object (Variation 47)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 47",
    "description": "High contention on advisory locks causing performance degradation (Variation 47)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 48",
    "description": "Transaction waited too long to acquire lock on database object (Variation 48)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 48",
    "description": "High contention on advisory locks causing performance degradation (Variation 48)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 49",
    "description": "Transaction waited too long to acquire lock on database object (Variation 49)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 49",
    "description": "High contention on advisory locks causing performance degradation (Variation 49)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 50",
    "description": "Transaction waited too long to acquire lock on database object (Variation 50)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 50",
    "description": "High contention on advisory locks causing performance degradation (Variation 50)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 51",
    "description": "Transaction waited too long to acquire lock on database object (Variation 51)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 51",
    "description": "High contention on advisory locks causing performance degradation (Variation 51)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 52",
    "description": "Transaction waited too long to acquire lock on database object (Variation 52)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 52",
    "description": "High contention on advisory locks causing performance degradation (Variation 52)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 53",
    "description": "Transaction waited too long to acquire lock on database object (Variation 53)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 53",
    "description": "High contention on advisory locks causing performance degradation (Variation 53)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 54",
    "description": "Transaction waited too long to acquire lock on database object (Variation 54)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 54",
    "description": "High contention on advisory locks causing performance degradation (Variation 54)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 55",
    "description": "Transaction waited too long to acquire lock on database object (Variation 55)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 55",
    "description": "High contention on advisory locks causing performance degradation (Variation 55)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 56",
    "description": "Transaction waited too long to acquire lock on database object (Variation 56)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 56",
    "description": "High contention on advisory locks causing performance degradation (Variation 56)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 57",
    "description": "Transaction waited too long to acquire lock on database object (Variation 57)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 57",
    "description": "High contention on advisory locks causing performance degradation (Variation 57)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 58",
    "description": "Transaction waited too long to acquire lock on database object (Variation 58)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 58",
    "description": "High contention on advisory locks causing performance degradation (Variation 58)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 59",
    "description": "Transaction waited too long to acquire lock on database object (Variation 59)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 59",
    "description": "High contention on advisory locks causing performance degradation (Variation 59)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 60",
    "description": "Transaction waited too long to acquire lock on database object (Variation 60)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 60",
    "description": "High contention on advisory locks causing performance degradation (Variation 60)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 61",
    "description": "Transaction waited too long to acquire lock on database object (Variation 61)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 61",
    "description": "High contention on advisory locks causing performance degradation (Variation 61)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 62",
    "description": "Transaction waited too long to acquire lock on database object (Variation 62)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 62",
    "description": "High contention on advisory locks causing performance degradation (Variation 62)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 63",
    "description": "Transaction waited too long to acquire lock on database object (Variation 63)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 63",
    "description": "High contention on advisory locks causing performance degradation (Variation 63)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 64",
    "description": "Transaction waited too long to acquire lock on database object (Variation 64)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 64",
    "description": "High contention on advisory locks causing performance degradation (Variation 64)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 65",
    "description": "Transaction waited too long to acquire lock on database object (Variation 65)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 65",
    "description": "High contention on advisory locks causing performance degradation (Variation 65)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 66",
    "description": "Transaction waited too long to acquire lock on database object (Variation 66)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 66",
    "description": "High contention on advisory locks causing performance degradation (Variation 66)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 67",
    "description": "Transaction waited too long to acquire lock on database object (Variation 67)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 67",
    "description": "High contention on advisory locks causing performance degradation (Variation 67)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 68",
    "description": "Transaction waited too long to acquire lock on database object (Variation 68)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 68",
    "description": "High contention on advisory locks causing performance degradation (Variation 68)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 69",
    "description": "Transaction waited too long to acquire lock on database object (Variation 69)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 69",
    "description": "High contention on advisory locks causing performance degradation (Variation 69)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 70",
    "description": "Transaction waited too long to acquire lock on database object (Variation 70)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 70",
    "description": "High contention on advisory locks causing performance degradation (Variation 70)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 71",
    "description": "Transaction waited too long to acquire lock on database object (Variation 71)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 71",
    "description": "High contention on advisory locks causing performance degradation (Variation 71)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 72",
    "description": "Transaction waited too long to acquire lock on database object (Variation 72)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 72",
    "description": "High contention on advisory locks causing performance degradation (Variation 72)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 73",
    "description": "Transaction waited too long to acquire lock on database object (Variation 73)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 73",
    "description": "High contention on advisory locks causing performance degradation (Variation 73)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 74",
    "description": "Transaction waited too long to acquire lock on database object (Variation 74)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 74",
    "description": "High contention on advisory locks causing performance degradation (Variation 74)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 75",
    "description": "Transaction waited too long to acquire lock on database object (Variation 75)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 75",
    "description": "High contention on advisory locks causing performance degradation (Variation 75)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 76",
    "description": "Transaction waited too long to acquire lock on database object (Variation 76)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 76",
    "description": "High contention on advisory locks causing performance degradation (Variation 76)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 77",
    "description": "Transaction waited too long to acquire lock on database object (Variation 77)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 77",
    "description": "High contention on advisory locks causing performance degradation (Variation 77)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 78",
    "description": "Transaction waited too long to acquire lock on database object (Variation 78)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 78",
    "description": "High contention on advisory locks causing performance degradation (Variation 78)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 79",
    "description": "Transaction waited too long to acquire lock on database object (Variation 79)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 79",
    "description": "High contention on advisory locks causing performance degradation (Variation 79)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 80",
    "description": "Transaction waited too long to acquire lock on database object (Variation 80)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 80",
    "description": "High contention on advisory locks causing performance degradation (Variation 80)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 81",
    "description": "Transaction waited too long to acquire lock on database object (Variation 81)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 81",
    "description": "High contention on advisory locks causing performance degradation (Variation 81)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 82",
    "description": "Transaction waited too long to acquire lock on database object (Variation 82)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 82",
    "description": "High contention on advisory locks causing performance degradation (Variation 82)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 83",
    "description": "Transaction waited too long to acquire lock on database object (Variation 83)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 83",
    "description": "High contention on advisory locks causing performance degradation (Variation 83)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 84",
    "description": "Transaction waited too long to acquire lock on database object (Variation 84)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 84",
    "description": "High contention on advisory locks causing performance degradation (Variation 84)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 85",
    "description": "Transaction waited too long to acquire lock on database object (Variation 85)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 85",
    "description": "High contention on advisory locks causing performance degradation (Variation 85)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 86",
    "description": "Transaction waited too long to acquire lock on database object (Variation 86)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 86",
    "description": "High contention on advisory locks causing performance degradation (Variation 86)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 87",
    "description": "Transaction waited too long to acquire lock on database object (Variation 87)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 87",
    "description": "High contention on advisory locks causing performance degradation (Variation 87)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 88",
    "description": "Transaction waited too long to acquire lock on database object (Variation 88)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 88",
    "description": "High contention on advisory locks causing performance degradation (Variation 88)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 89",
    "description": "Transaction waited too long to acquire lock on database object (Variation 89)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 89",
    "description": "High contention on advisory locks causing performance degradation (Variation 89)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 90",
    "description": "Transaction waited too long to acquire lock on database object (Variation 90)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 90",
    "description": "High contention on advisory locks causing performance degradation (Variation 90)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 91",
    "description": "Transaction waited too long to acquire lock on database object (Variation 91)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 91",
    "description": "High contention on advisory locks causing performance degradation (Variation 91)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 92",
    "description": "Transaction waited too long to acquire lock on database object (Variation 92)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 92",
    "description": "High contention on advisory locks causing performance degradation (Variation 92)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 93",
    "description": "Transaction waited too long to acquire lock on database object (Variation 93)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 93",
    "description": "High contention on advisory locks causing performance degradation (Variation 93)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 94",
    "description": "Transaction waited too long to acquire lock on database object (Variation 94)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 94",
    "description": "High contention on advisory locks causing performance degradation (Variation 94)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 95",
    "description": "Transaction waited too long to acquire lock on database object (Variation 95)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 95",
    "description": "High contention on advisory locks causing performance degradation (Variation 95)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 96",
    "description": "Transaction waited too long to acquire lock on database object (Variation 96)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 96",
    "description": "High contention on advisory locks causing performance degradation (Variation 96)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 97",
    "description": "Transaction waited too long to acquire lock on database object (Variation 97)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 97",
    "description": "High contention on advisory locks causing performance degradation (Variation 97)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 98",
    "description": "Transaction waited too long to acquire lock on database object (Variation 98)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 98",
    "description": "High contention on advisory locks causing performance degradation (Variation 98)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 99",
    "description": "Transaction waited too long to acquire lock on database object (Variation 99)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  },
  {
    "title": "WARNING: Advisory lock contention detected 99",
    "description": "High contention on advisory locks causing performance degradation (Variation 99)",
    "common_causes": "Inefficient advisory lock usage, high concurrency on shared resources, lock granularity issues",
    "resolution": "Optimize advisory lock usage, reduce lock duration, improve lock granularity, implement lock queuing"
  },
  {
    "title": "ERROR: Lock wait timeout exceeded for table 100",
    "description": "Transaction waited too long to acquire lock on database object (Variation 100)",
    "common_causes": "Long-running transactions, high concurrency, inefficient locking patterns, lock escalation",
    "resolution": "Optimize transaction duration, reduce lock scope, implement proper locking order, use lock timeouts"
  }
];
