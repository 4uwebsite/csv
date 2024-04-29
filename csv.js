// csv.js - [MODULE] - Version 1.0.0
// A JS module containing CSV related functions.



// csvConverter - [function]
// Converts an objects accray into a CSV string and returns the string.
// Example usage:
// const data = [
//     { name: "John Doe", age: 30, city: "New York" },
//     { name: "Jane Smith", age: 25, city: "Los Angeles" },
//     { name: "Bob Johnson", age: 40, city: "Chicago" }
// ]
// 
// const csvString = CSVConverter.arrayToCSV(data)
// console.log(csvString)
const CSVConverter = (function() {

    // Function to convert array of objects to CSV string
    function arrayToCSV(data) {
        // Extract headers from the first object in the array
        const headers = Object.keys(data[0]);

        // Convert each object into a CSV row
        const rows = data.map(obj =>
            headers.map(header =>
                // Escape double quotes and add double quotes if the value contains a comma
                `"${String(obj[header]).replace(/"/g, '""')}"`)
            .join(',')
        );

        // Join the headers and rows, and return the CSV string
        return [headers.join(','), ...rows].join('\n');
    }

    // Expose the arrayToCSV function publicly
    return {
        arrayToCSV: arrayToCSV
    };

})(); // CSVConverter



// csvDownloader - [function]
// Prepares CSV for download. Pass the CSV String and Filename.
// Example usage:
// const csvData = "Name,Age,City\nJohn Doe,30,New York\nJane Smith,25,Los Angeles";
// CSVDownloader.downloadCSV(csvData, 'example.csv');
const CSVDownloader = (function() {

    function downloadCSV(csvString, filename = 'data.csv') {
        // Create a Blob object from the CSV string
        const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

        // Create a link element
        const link = document.createElement('a');

        // Set the link's attributes
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename);

        // Append the link to the body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Remove the link from the DOM
        document.body.removeChild(link);
    }

    // Expose the downloadCSV function publicly
    return {
        downloadCSV: downloadCSV
    };

})(); // CSVDownloader



export { CSVConverter as csvConverter }
export { CSVDownloader as csvDownloader }
