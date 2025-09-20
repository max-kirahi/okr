// ES Module for Reports - Read-only table display for various tables
// This module provides read-only functionality for displaying tables without modals
// Used by units-report.html and owners-report.html

import { 
    handleError
} from './validation.mjs';
import {
    fetchAllRows,
    fetchFilteredRows
} from './restcallsfordbdata.mjs';
import {
    displaytable
} from './htmlhelpers.mjs';

// Global state for reports
let currentRows = [];

/**
 * Displays all rows from the specified table in a read-only data table
 * @param {string} [tableName] - Name of the table to display rows from
 * @throws {Error} If fetching or displaying rows fails
 */
async function displayallitems (tableName = null) {
    try {
        // Get table name from global variable set by the HTML page
        const reportTable = tableName || window.currentReportTable;
        
        if (!reportTable) {
            throw new Error('No table specified for report');
        }
        
        console.log('Displaying report for table:', reportTable);
        
        // Use the generic CRUD function from restcallsfordbdata.mjs
        const allRowsJson = await fetchAllRows(reportTable);

        console.log('All rows JSON from DB:', allRowsJson?.length || 0, 'rows');

        if (!Array.isArray(allRowsJson) || allRowsJson.length === 0) {
            console.log('No data returned from database');
            currentRows = [];
            displaytable([]);
            return;
        }
        currentRows = allRowsJson;
        
        // Display table without edit/delete functionality (read-only)
        displaytable(allRowsJson, null, null, () => displayallitems(reportTable));
    } catch (error) {
        console.error('Error displaying all rows:', error);
        handleError(error, { scope: 'page' });
    }
}

/**
 * Displays filtered rows from the specified table based on search criteria
 * @param {string} [tableName] - Name of the table to search in
 * @throws {Error} If searching or displaying filtered rows fails
 */
async function displayfiltereditems (tableName = null) {
    try {
        // Get table name from global variable set by the HTML page
        const reportTable = tableName || window.currentReportTable;
        
        if (!reportTable) {
            throw new Error('No table specified for report');
        }
        
        const searchtextentered = document.getElementById('searchtext');
        if (!searchtextentered) {
            throw new Error('Search input element not found');
        }
        
        const searchValue = searchtextentered.value.trim();
        if (!searchValue) {
            // If no search term, just display all rows
            displayallitems(reportTable);
            return;
        }
        
        console.log('Searching in table:', reportTable, 'for:', searchValue);
        
        // Use the generic search function from restcallsfordbdata.mjs
        const filteredRowsJson = await fetchFilteredRows(reportTable, searchValue);

        console.log('Filtered JSON from DB:', filteredRowsJson?.length || 0, 'rows');

        if (!Array.isArray(filteredRowsJson) || filteredRowsJson.length === 0) {
            console.log('No matching results found');
            currentRows = [];
            displaytable([]);
            return;
        }
        currentRows = filteredRowsJson;
        console.log('Filtered data converted to JSON Successfully');
        
        // Display table without edit/delete functionality (read-only)
        displaytable(filteredRowsJson, null, null, () => displayallitems(reportTable));

    } catch (error) {
        console.error('Error displaying filtered rows:', error);
        handleError(error, { scope: 'page' });
    }
}

// --------END OF FUNCTION DEFINITIONS -----------

// Export functions for use in other modules
export {
    displayallitems,
    displayfiltereditems
};
