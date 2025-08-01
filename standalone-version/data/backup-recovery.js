// Auto-generated from backup-recovery.json
window.backup_recovery = [
  {
    "title": "ERROR: permission denied for database",
    "description": "The pg_dump utility cannot create a backup due to insufficient privileges on the target database, preventing the backup operation from completing.",
    "common_causes": "User lacks CONNECT privilege on database, missing SELECT privileges on tables, pg_hba.conf restricting backup user access, role not granted necessary backup permissions.",
    "resolution": "- Grant database connection: `GRANT CONNECT ON DATABASE dbname TO backup_user;`.\\n- Grant table access: `GRANT SELECT ON ALL TABLES IN SCHEMA public TO backup_user;`.\\n- Check pg_hba.conf for backup user authentication rules.\\n- Use superuser account for full database backups.\\n- Verify role membership: `SELECT * FROM pg_roles WHERE rolname = 'backup_user';`."
  },
  {
    "title": "ERROR: Backup corruption detected during restore 1",
    "description": "Backup file integrity check failed during restoration process (Variation 1)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 1",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 1)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 2",
    "description": "Backup file integrity check failed during restoration process (Variation 2)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 2",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 2)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 3",
    "description": "Backup file integrity check failed during restoration process (Variation 3)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 3",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 3)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 4",
    "description": "Backup file integrity check failed during restoration process (Variation 4)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 4",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 4)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 5",
    "description": "Backup file integrity check failed during restoration process (Variation 5)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 5",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 5)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 6",
    "description": "Backup file integrity check failed during restoration process (Variation 6)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 6",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 6)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 7",
    "description": "Backup file integrity check failed during restoration process (Variation 7)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 7",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 7)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 8",
    "description": "Backup file integrity check failed during restoration process (Variation 8)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 8",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 8)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 9",
    "description": "Backup file integrity check failed during restoration process (Variation 9)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 9",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 9)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 10",
    "description": "Backup file integrity check failed during restoration process (Variation 10)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 10",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 10)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 11",
    "description": "Backup file integrity check failed during restoration process (Variation 11)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 11",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 11)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 12",
    "description": "Backup file integrity check failed during restoration process (Variation 12)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 12",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 12)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 13",
    "description": "Backup file integrity check failed during restoration process (Variation 13)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 13",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 13)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 14",
    "description": "Backup file integrity check failed during restoration process (Variation 14)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 14",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 14)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 15",
    "description": "Backup file integrity check failed during restoration process (Variation 15)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 15",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 15)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 16",
    "description": "Backup file integrity check failed during restoration process (Variation 16)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 16",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 16)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 17",
    "description": "Backup file integrity check failed during restoration process (Variation 17)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 17",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 17)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 18",
    "description": "Backup file integrity check failed during restoration process (Variation 18)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 18",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 18)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 19",
    "description": "Backup file integrity check failed during restoration process (Variation 19)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 19",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 19)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 20",
    "description": "Backup file integrity check failed during restoration process (Variation 20)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 20",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 20)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 21",
    "description": "Backup file integrity check failed during restoration process (Variation 21)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 21",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 21)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 22",
    "description": "Backup file integrity check failed during restoration process (Variation 22)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 22",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 22)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 23",
    "description": "Backup file integrity check failed during restoration process (Variation 23)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 23",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 23)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 24",
    "description": "Backup file integrity check failed during restoration process (Variation 24)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 24",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 24)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 25",
    "description": "Backup file integrity check failed during restoration process (Variation 25)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 25",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 25)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 26",
    "description": "Backup file integrity check failed during restoration process (Variation 26)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 26",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 26)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 27",
    "description": "Backup file integrity check failed during restoration process (Variation 27)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 27",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 27)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 28",
    "description": "Backup file integrity check failed during restoration process (Variation 28)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 28",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 28)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 29",
    "description": "Backup file integrity check failed during restoration process (Variation 29)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 29",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 29)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 30",
    "description": "Backup file integrity check failed during restoration process (Variation 30)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 30",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 30)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 31",
    "description": "Backup file integrity check failed during restoration process (Variation 31)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 31",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 31)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 32",
    "description": "Backup file integrity check failed during restoration process (Variation 32)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 32",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 32)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 33",
    "description": "Backup file integrity check failed during restoration process (Variation 33)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 33",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 33)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 34",
    "description": "Backup file integrity check failed during restoration process (Variation 34)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 34",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 34)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 35",
    "description": "Backup file integrity check failed during restoration process (Variation 35)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 35",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 35)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 36",
    "description": "Backup file integrity check failed during restoration process (Variation 36)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 36",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 36)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 37",
    "description": "Backup file integrity check failed during restoration process (Variation 37)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 37",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 37)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 38",
    "description": "Backup file integrity check failed during restoration process (Variation 38)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 38",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 38)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 39",
    "description": "Backup file integrity check failed during restoration process (Variation 39)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 39",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 39)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 40",
    "description": "Backup file integrity check failed during restoration process (Variation 40)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 40",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 40)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 41",
    "description": "Backup file integrity check failed during restoration process (Variation 41)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 41",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 41)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 42",
    "description": "Backup file integrity check failed during restoration process (Variation 42)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 42",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 42)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 43",
    "description": "Backup file integrity check failed during restoration process (Variation 43)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 43",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 43)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 44",
    "description": "Backup file integrity check failed during restoration process (Variation 44)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 44",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 44)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 45",
    "description": "Backup file integrity check failed during restoration process (Variation 45)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 45",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 45)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 46",
    "description": "Backup file integrity check failed during restoration process (Variation 46)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 46",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 46)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 47",
    "description": "Backup file integrity check failed during restoration process (Variation 47)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 47",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 47)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 48",
    "description": "Backup file integrity check failed during restoration process (Variation 48)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 48",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 48)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 49",
    "description": "Backup file integrity check failed during restoration process (Variation 49)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 49",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 49)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 50",
    "description": "Backup file integrity check failed during restoration process (Variation 50)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 50",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 50)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 51",
    "description": "Backup file integrity check failed during restoration process (Variation 51)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 51",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 51)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 52",
    "description": "Backup file integrity check failed during restoration process (Variation 52)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 52",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 52)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 53",
    "description": "Backup file integrity check failed during restoration process (Variation 53)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 53",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 53)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 54",
    "description": "Backup file integrity check failed during restoration process (Variation 54)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 54",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 54)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 55",
    "description": "Backup file integrity check failed during restoration process (Variation 55)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 55",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 55)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 56",
    "description": "Backup file integrity check failed during restoration process (Variation 56)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 56",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 56)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 57",
    "description": "Backup file integrity check failed during restoration process (Variation 57)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 57",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 57)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 58",
    "description": "Backup file integrity check failed during restoration process (Variation 58)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 58",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 58)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 59",
    "description": "Backup file integrity check failed during restoration process (Variation 59)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 59",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 59)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 60",
    "description": "Backup file integrity check failed during restoration process (Variation 60)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 60",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 60)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 61",
    "description": "Backup file integrity check failed during restoration process (Variation 61)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 61",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 61)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 62",
    "description": "Backup file integrity check failed during restoration process (Variation 62)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 62",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 62)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 63",
    "description": "Backup file integrity check failed during restoration process (Variation 63)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 63",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 63)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 64",
    "description": "Backup file integrity check failed during restoration process (Variation 64)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 64",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 64)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 65",
    "description": "Backup file integrity check failed during restoration process (Variation 65)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 65",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 65)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 66",
    "description": "Backup file integrity check failed during restoration process (Variation 66)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 66",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 66)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 67",
    "description": "Backup file integrity check failed during restoration process (Variation 67)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 67",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 67)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 68",
    "description": "Backup file integrity check failed during restoration process (Variation 68)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 68",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 68)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 69",
    "description": "Backup file integrity check failed during restoration process (Variation 69)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 69",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 69)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 70",
    "description": "Backup file integrity check failed during restoration process (Variation 70)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 70",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 70)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 71",
    "description": "Backup file integrity check failed during restoration process (Variation 71)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 71",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 71)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 72",
    "description": "Backup file integrity check failed during restoration process (Variation 72)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 72",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 72)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 73",
    "description": "Backup file integrity check failed during restoration process (Variation 73)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 73",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 73)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 74",
    "description": "Backup file integrity check failed during restoration process (Variation 74)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 74",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 74)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 75",
    "description": "Backup file integrity check failed during restoration process (Variation 75)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 75",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 75)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 76",
    "description": "Backup file integrity check failed during restoration process (Variation 76)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 76",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 76)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 77",
    "description": "Backup file integrity check failed during restoration process (Variation 77)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 77",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 77)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 78",
    "description": "Backup file integrity check failed during restoration process (Variation 78)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 78",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 78)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 79",
    "description": "Backup file integrity check failed during restoration process (Variation 79)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 79",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 79)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 80",
    "description": "Backup file integrity check failed during restoration process (Variation 80)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 80",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 80)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 81",
    "description": "Backup file integrity check failed during restoration process (Variation 81)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 81",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 81)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 82",
    "description": "Backup file integrity check failed during restoration process (Variation 82)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 82",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 82)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 83",
    "description": "Backup file integrity check failed during restoration process (Variation 83)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 83",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 83)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 84",
    "description": "Backup file integrity check failed during restoration process (Variation 84)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 84",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 84)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 85",
    "description": "Backup file integrity check failed during restoration process (Variation 85)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 85",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 85)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 86",
    "description": "Backup file integrity check failed during restoration process (Variation 86)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 86",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 86)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 87",
    "description": "Backup file integrity check failed during restoration process (Variation 87)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 87",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 87)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 88",
    "description": "Backup file integrity check failed during restoration process (Variation 88)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 88",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 88)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 89",
    "description": "Backup file integrity check failed during restoration process (Variation 89)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 89",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 89)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 90",
    "description": "Backup file integrity check failed during restoration process (Variation 90)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 90",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 90)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 91",
    "description": "Backup file integrity check failed during restoration process (Variation 91)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 91",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 91)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 92",
    "description": "Backup file integrity check failed during restoration process (Variation 92)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 92",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 92)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 93",
    "description": "Backup file integrity check failed during restoration process (Variation 93)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 93",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 93)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 94",
    "description": "Backup file integrity check failed during restoration process (Variation 94)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 94",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 94)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 95",
    "description": "Backup file integrity check failed during restoration process (Variation 95)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 95",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 95)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 96",
    "description": "Backup file integrity check failed during restoration process (Variation 96)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 96",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 96)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 97",
    "description": "Backup file integrity check failed during restoration process (Variation 97)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 97",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 97)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 98",
    "description": "Backup file integrity check failed during restoration process (Variation 98)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 98",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 98)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 99",
    "description": "Backup file integrity check failed during restoration process (Variation 99)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  },
  {
    "title": "WARNING: WAL archive lag detected 99",
    "description": "Write-Ahead Log archiving is falling behind potentially causing data loss risk (Variation 99)",
    "common_causes": "Slow archive destination, network issues, high WAL generation rate, archive command failures",
    "resolution": "Optimize archive destination, improve network connectivity, tune WAL settings, fix archive commands"
  },
  {
    "title": "ERROR: Backup corruption detected during restore 100",
    "description": "Backup file integrity check failed during restoration process (Variation 100)",
    "common_causes": "Storage corruption, incomplete backup, network transfer errors, hardware failures",
    "resolution": "Verify backup integrity, use checksums, implement redundant backups, test restore procedures regularly"
  }
];
