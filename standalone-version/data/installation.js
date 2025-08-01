// Auto-generated from installation.json
window.installation = [
  {
    "title": "What is PostgreSQL?",
    "overview": "PostgreSQL is a powerful, open-source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
    "key_features": "Open-source and free to use, Object-relational database system, ACID compliant, Extensible and highly customizable, Supports a wide range of data types, Robust and reliable, Strong community support",
    "use_cases": "Web applications, Data warehousing, Geographic information systems (GIS), Financial systems, Scientific applications, Government databases"
  },
  {
    "title": "PostgreSQL Installation on macOS",
    "method": "Homebrew (Recommended)",
    "prerequisites": "macOS 10.14 or later, Command Line Tools for Xcode installed",
    "installation_steps": "brew update\nbrew install postgresql\nbrew services start postgresql\npsql -V",
    "post_installation": "PostgreSQL service will start automatically on system boot. Default superuser is your macOS username. Connect using: psql postgres"
  },
  {
    "title": "PostgreSQL Installation on Windows",
    "method": "EnterpriseDB (EDB) Installer (Recommended)",
    "prerequisites": "Windows 10 or later, Administrator privileges required",
    "installation_steps": "Download installer from https://www.enterprisedb.com/downloads/postgres-postgresql-downloads\nRun installer as Administrator\nSelect components: PostgreSQL Server, pgAdmin 4, Command Line Tools\nSet password for 'postgres' superuser\nChoose data directory (default: C:\\Program Files\\PostgreSQL\\15\\data)\nSelect port number (default: 5432)",
    "post_installation": "PostgreSQL service starts automatically. Access via pgAdmin 4 or command line. Default connection: localhost:5432, user: postgres"
  },
  {
    "title": "PostgreSQL Installation on Linux (Ubuntu/Debian)",
    "method": "APT Package Manager (Recommended)",
    "prerequisites": "Ubuntu 18.04+ or Debian 10+, sudo privileges required",
    "installation_steps": "sudo apt update\nsudo apt install postgresql postgresql-contrib\nsudo systemctl start postgresql\nsudo systemctl enable postgresql\nsudo -u postgres psql",
    "post_installation": "Service runs automatically on boot. Default user is 'postgres'. Switch to postgres user: sudo -u postgres psql"
  }
];
