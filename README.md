# Model ID Finder

## User Story
Your task is to make use of the United States National Highway Traffic Safety Administration agencies API https://vpic.nhtsa.dot.gov/api/ to allow users to Filter by Make, Year and Model to determine the Model ID of their car which they can then reference when in contact with the NHTSA.

The NHTSA API is to be called from the backend written in Go and the getMakes (/makes) endpoint has already been implemented as a starter. The Go API that you create is then to be called by the frontend which is written in TypeScript React.

Requirements:
- All dropdown items should be in ascending alphabetical order (includes fixing the getMakes endpoint)
- The user should be able to filter from the years 2010-2023
- The model ID should be presented to the user on the frontend once they have selected their model.

## Getting started
Pre-reqs:
- Have NPM installed
- Have Go installed

Running the backend:
- go run main.go

Running the frontend:
- npm i
- npm start