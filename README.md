# csv
 A JS module containing CSV related functions.

# Version 1.0.0

# Functions

## CSVConverter
  Converts an objects accray into a CSV string and returns the string.
  ### Example Usage
    const data = [
        { name: "John Doe", age: 30, city: "New York" },
        { name: "Jane Smith", age: 25, city: "Los Angeles" },
        { name: "Bob Johnson", age: 40, city: "Chicago" }
    ]
    
    const csvString = CSVConverter.arrayToCSV(data)
    console.log(csvString)

## CSVDownloader
  Prepares CSV for download. Pass the CSV String and Filename.
  ### Example Usage
    const csvData = "Name,Age,City\nJohn Doe,30,New York\nJane Smith,25,Los Angeles"
    CSVDownloader.downloadCSV(csvData, 'example.csv')

