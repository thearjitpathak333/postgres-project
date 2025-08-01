// Auto-generated from replication-issues.json
window.replication_issues = [
  {
    "title": "ERROR: requested WAL segment has already been removed",
    "description": "A standby server or recovery process cannot access required WAL files because they have been removed from the primary server due to retention policies.",
    "common_causes": "wal_keep_segments set too low, replication slot not configured, standby server offline too long, high WAL generation rate exceeding retention.",
    "resolution": "- Configure replication slots: `SELECT pg_create_physical_replication_slot('standby_slot');`.\\n- Increase wal_keep_segments in postgresql.conf.\\n- Set max_slot_wal_keep_size to retain WAL for slots.\\n- Take fresh base backup for standby server.\\n- Monitor WAL generation rate: `SELECT * FROM pg_stat_replication;`."
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 1",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 1)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 1",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 1)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 2",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 2)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 2",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 2)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 3",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 3)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 3",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 3)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 4",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 4)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 4",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 4)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 5",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 5)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 5",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 5)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 6",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 6)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 6",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 6)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 7",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 7)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 7",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 7)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 8",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 8)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 8",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 8)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 9",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 9)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 9",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 9)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 10",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 10)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 10",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 10)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 11",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 11)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 11",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 11)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 12",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 12)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 12",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 12)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 13",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 13)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 13",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 13)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 14",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 14)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 14",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 14)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 15",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 15)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 15",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 15)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 16",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 16)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 16",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 16)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 17",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 17)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 17",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 17)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 18",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 18)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 18",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 18)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 19",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 19)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 19",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 19)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 20",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 20)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 20",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 20)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 21",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 21)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 21",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 21)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 22",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 22)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 22",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 22)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 23",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 23)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 23",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 23)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 24",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 24)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 24",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 24)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 25",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 25)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 25",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 25)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 26",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 26)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 26",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 26)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 27",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 27)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 27",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 27)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 28",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 28)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 28",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 28)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 29",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 29)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 29",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 29)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 30",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 30)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 30",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 30)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 31",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 31)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 31",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 31)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 32",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 32)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 32",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 32)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 33",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 33)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 33",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 33)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 34",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 34)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 34",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 34)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 35",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 35)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 35",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 35)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 36",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 36)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 36",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 36)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 37",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 37)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 37",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 37)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 38",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 38)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 38",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 38)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 39",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 39)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 39",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 39)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 40",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 40)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 40",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 40)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 41",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 41)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 41",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 41)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 42",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 42)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 42",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 42)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 43",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 43)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 43",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 43)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 44",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 44)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 44",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 44)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 45",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 45)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 45",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 45)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 46",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 46)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 46",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 46)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 47",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 47)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 47",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 47)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 48",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 48)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 48",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 48)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 49",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 49)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 49",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 49)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 50",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 50)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 50",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 50)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 51",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 51)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 51",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 51)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 52",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 52)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 52",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 52)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 53",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 53)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 53",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 53)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 54",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 54)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 54",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 54)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 55",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 55)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 55",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 55)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 56",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 56)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 56",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 56)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 57",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 57)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 57",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 57)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 58",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 58)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 58",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 58)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 59",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 59)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 59",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 59)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 60",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 60)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 60",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 60)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 61",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 61)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 61",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 61)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 62",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 62)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 62",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 62)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 63",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 63)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 63",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 63)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 64",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 64)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 64",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 64)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 65",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 65)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 65",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 65)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 66",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 66)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 66",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 66)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 67",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 67)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 67",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 67)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 68",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 68)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 68",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 68)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 69",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 69)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 69",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 69)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 70",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 70)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 70",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 70)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 71",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 71)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 71",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 71)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 72",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 72)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 72",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 72)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 73",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 73)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 73",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 73)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 74",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 74)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 74",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 74)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 75",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 75)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 75",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 75)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 76",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 76)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 76",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 76)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 77",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 77)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 77",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 77)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 78",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 78)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 78",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 78)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 79",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 79)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 79",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 79)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 80",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 80)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 80",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 80)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 81",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 81)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 81",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 81)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 82",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 82)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 82",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 82)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 83",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 83)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 83",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 83)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 84",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 84)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 84",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 84)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 85",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 85)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 85",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 85)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 86",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 86)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 86",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 86)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 87",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 87)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 87",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 87)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 88",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 88)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 88",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 88)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 89",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 89)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 89",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 89)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 90",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 90)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 90",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 90)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 91",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 91)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 91",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 91)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 92",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 92)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 92",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 92)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 93",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 93)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 93",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 93)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 94",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 94)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 94",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 94)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 95",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 95)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 95",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 95)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 96",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 96)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 96",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 96)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 97",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 97)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 97",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 97)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 98",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 98)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 98",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 98)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 99",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 99)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  },
  {
    "title": "WARNING: Replication slot disk usage high 99",
    "description": "Replication slot consuming excessive disk space due to WAL retention (Variation 99)",
    "common_causes": "Inactive replication slots, slow standby servers, high WAL generation, slot configuration issues",
    "resolution": "Remove inactive slots, optimize standby performance, tune WAL settings, review slot configuration"
  },
  {
    "title": "ERROR: Replication lag threshold exceeded 100",
    "description": "Standby server replication lag has exceeded acceptable thresholds (Variation 100)",
    "common_causes": "Network latency, standby server overload, large transactions, insufficient resources",
    "resolution": "Optimize network connectivity, upgrade standby hardware, optimize large transactions, increase resources"
  }
];
