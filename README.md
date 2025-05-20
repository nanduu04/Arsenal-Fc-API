# Arsenal FC Invincibles API

A RESTful API that provides comprehensive data about Arsenal Football Club's legendary 2003-04 "Invincibles" Premier League team. The API returns detailed information about game results, player statistics, and club information in JSON format.

> **Note**: This project was originally created 5 years ago and has been recently updated with improved data validation, consistent field naming, and better error handling.

## Features

- Complete player statistics for the Invincibles squad
- All 38 Premier League games from the unbeaten season
- Detailed team and season information
- Proper data validation and error handling
- RESTful endpoints with consistent response format


## Feel free to suggest new changes
- Open a PR 
  
## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Arsenal-Fc-API.git
cd Arsenal-Fc-API
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB service:
```bash
mongod
```

4. Start the server:
```bash
npm start
```

The server will start on port 3000 by default.

## API Endpoints

### Players

#### Get all players
```http
GET http://localhost:3000/players
```

Example response:
```json
{
  "status": 200,
  "message": "Success",
  "data": {
    "playersCount": 11,
    "players": [
      {
        "fullName": "Thierry Daniel Henry",
        "popularName": "Henry",
        "nationality": "French",
        "age": 25,
        "position": "Striker",
        "goals": 30,
        "assists": 7
        // ... other player details
      }
    ]
  }
}
```

#### Get player by name
```http
GET http://localhost:3000/players/:name
```

Example:
```http
GET http://localhost:3000/players/henry
```

### Game Results

#### Get all results
```http
GET http://localhost:3000/results
```

#### Get results by competition
```http
GET http://localhost:3000/results/:competition
```

Example:
```http
GET http://localhost:3000/results/premier league
```

### Team Information

#### Get general club information
```http
GET http://localhost:3000/general
```

#### Get season information
```http
GET http://localhost:3000/seasons
```

## Data Structure

### Player Fields
- `fullName`: Player's full name
- `popularName`: Player's commonly used name
- `nationality`: Player's nationality
- `age`: Player's age during the 2003-04 season
- `dateOfBirth`: Player's date of birth (MM/DD/YYYY)
- `height`: Player's height in cm
- `weight`: Player's weight in kg
- `jerseyNumber`: Player's squad number
- `position`: Player's position
- `goals`: Number of goals scored
- `assists`: Number of assists
- `penalties`: Number of penalties scored
- `clearances`: Number of clearances
- `recoveries`: Number of ball recoveries

### Game Fields
- `title`: Match title
- `competition`: Competition name
- `opponent`: Opposing team
- `date`: Match date
- `arsenalGoals`: Goals scored by Arsenal
- `oppositionGoals`: Goals scored by opponent
- `topScorer`: Arsenal's top scorer
- `winOrLoss`: Match result (Win/Draw/Loss)
- `leagueStatus`: League position and record

## Recent Updates

- Fixed inconsistent field naming (e.g., `Goals` → `goals`)
- Added proper date format validation
- Standardized player positions
- Improved error handling
- Added data validation for all fields
- Fixed duplicate player entries
- Updated player statistics accuracy

## Author

Nandu Pokhrel

## License

This project is licensed under the MIT License.
