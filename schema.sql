-- OKR Management System Database Schema

-- OKR Table
CREATE TABLE okr (
  id INTEGER PRIMARY KEY,
  objective TEXT NOT NULL,
  keyreesulttext TEXT NOT NULL,
  keyresultmetric INTEGER NOT NULL,
  unit TEXT NOT NULL,
  targetdate TEXT NOT NULL,
  createdon TEXT NOT NULL,
  modifiedon TEXT NOT NULL,
  modifiedtime TEXT
);

-- Units Table
CREATE TABLE units (
  id INTEGER PRIMARY KEY,
  unitofmeasurement TEXT
);

-- Sample data for units table
INSERT INTO units (id, unitofmeasurement) VALUES 
(1, 'percent'),
(2, 'dollars'),
(3, 'tons'),
(4, 'customers'),
(5, 'stores'),
(6, 'vehicles'),
(7, NULL);
