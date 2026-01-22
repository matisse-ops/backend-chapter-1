# backend-chapter-1
# Express.js CRUD Fundamentals

This project is a lightweight demonstration of a **RESTful API** and **Web Server** built using Node.js and Express. It serves as a foundational project for understanding how data flows between a client and a server.

## Features
* **Hybrid Server:** Handles both Website Endpoints (HTML) and API Endpoints (JSON).
* **CRUD Operations:** Implements Create (POST), Read (GET), and Delete (DELETE) functionality.
* **In-Memory Storage:** Demonstrates state management using a JavaScript array (`let data`).
* **REST Testing:** Includes a `.rest` file for testing endpoints without needing a frontend interface.

## Tech Stack
* **Node.js** (v24.13.0+ recommended for native SQLite compatibility)
* **Express.js** (Web Framework)
* **REST Client** (VS Code Extension for testing)

## Project Structure
* `server.js`: The main application entry point containing the server logic, middleware, and routes.
* `test.rest`: A script containing pre-configured HTTP requests to test the API.

## Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   
2. **Start the server:**
   The server will be live at http://localhost:8383
  ```bash
  node server.js
```
## API Endpoints
**Website Routes:**
- 1. Route: "/"
   * Method: GET
   * Description: Returns the homepage with a list of data and a link to the dashboard. 
- 2. Route: "/dashboard"
  * Method:** GET
  * Description: Returns a simple dashboard page with navigation back home.

**Data Endpoints**
- 1. Endpoint: /api/data
   * bMethod: GET
   * Description: Returns the current data array as JSON (Status:777).
- 2. Endpoint: /api/data
   * Method: POST
   * Description: Adds a new entry to the array via the request body (Status:     201). 
- 3. Endpoint: /api/endpoint
  * bMethod: DELETE
   * bDescription: Removes the last element from the data array (Status: 204).

## Key Concepts Learned
* Dependency Management: Using package.json to track the Express framework.
* Middleware: Utilizing express.json() to parse incoming JSON request bodies. 
* Routing: Directing requests to specific blocks of code based on the URL path and HTTP method. 
* Status Codes: Customizing server responses using codes like 201 (Created) and 204 (No Content).






