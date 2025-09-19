# OKR Management System

A dedicated Node.js application for managing Objectives and Key Results (OKRs). This application provides a clean, focused interface for creating, editing, and tracking OKRs without the complexity of item management features.

## Features

- **OKR Management**: Create, read, update, and delete OKRs
- **Dynamic Forms**: Automatically generated forms based on database schema
- **Search Functionality**: Search across all OKR fields
- **Unit Management**: Dropdown selection for measurement units
- **Responsive Design**: Bootstrap-based UI that works on all devices
- **Real-time Validation**: Client-side form validation with error handling

## Database Schema

### OKR Table
- `id` (INTEGER PRIMARY KEY): Unique identifier
- `objective` (TEXT): The main objective
- `keyreesulttext` (TEXT): Description of the key result
- `keyresultmetric` (INTEGER): Target metric value
- `unit` (TEXT): Unit of measurement
- `targetdate` (TEXT): Target completion date
- `createdon` (TEXT): Creation date
- `modifiedon` (TEXT): Last modification date
- `modifiedtime` (TEXT): Last modification time

### Units Table
- `id` (INTEGER PRIMARY KEY): Unique identifier
- `unitofmeasurement` (TEXT): Unit name (e.g., "percent", "dollars", "customers")

## Installation

1. Navigate to the project directory:
   ```bash
   cd /home/dev/Documents/kirahi/okr
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:9785
   ```

## API Endpoints

- `GET /api/okr` - Get all OKRs
- `GET /api/okr/:id` - Get specific OKR by ID
- `POST /api/okr` - Create new OKR
- `PUT /api/okr/:id` - Update existing OKR
- `DELETE /api/okr/:id` - Delete OKR
- `GET /api/okr/search/:query` - Search OKRs
- `GET /api/units` - Get all units
- `GET /api/okr/meta` - Get OKR table metadata

## Project Structure

```
okr/
├── assets/                 # Bootstrap and FontAwesome assets
├── css/                   # Custom styles
├── js/                    # JavaScript modules
│   ├── okrmgmtapp.mjs    # Main OKR management application
│   ├── validation.mjs    # Form validation utilities
│   ├── restcallsfordbdata.mjs # API communication
│   └── htmlhelpers.mjs   # HTML generation utilities
├── public/               # Static files
│   ├── index.html       # Main application page
│   └── kirahi-logo.png  # Application logo
├── okr.db               # SQLite database
├── server.js            # Express server
├── package.json         # Node.js dependencies
└── README.md           # This file
```

## Technology Stack

- **Backend**: Node.js with Express.js
- **Database**: SQLite3
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **UI Framework**: Bootstrap 5.3.8
- **Icons**: FontAwesome 6.7.2

## Development

The application uses ES6 modules and modern JavaScript features. All client-side code is organized into reusable modules:

- `okrmgmtapp.mjs`: Main application logic and state management
- `validation.mjs`: Form validation and error handling
- `restcallsfordbdata.mjs`: API communication layer
- `htmlhelpers.mjs`: Dynamic HTML generation and table rendering

## Data Migration

This project was created by extracting OKR-related functionality from a larger application. The database contains:
- 5 sample OKR records
- 7 unit measurement options
- All original data preserved from the source application

## License

ISC License
