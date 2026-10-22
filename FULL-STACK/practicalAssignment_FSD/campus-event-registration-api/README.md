
# Campus Event Registration API

This is a backend project made using Node.js, Express, MongoDB Atlas and Mongoose. It manages registrations for college technical events.

## Features
- Add, view, update and delete registrations
- Filter registrations by event type and status
- Validate college email addresses and roll numbers
- Apply CAMPUS50 and EARLYBIRD discount codes
- Restrict AI Workshop registrations to individuals
- Handle duplicate emails and invalid registration IDs

## Requirements
- Node.js and npm
- MongoDB Atlas account
- Postman
- IntelliJ IDEA or another code editor

## Setup

1. Download the project and open the folder in IntelliJ.
2. Open the terminal in the project folder.
3. Install dependencies:

   npm install

4. Create a `.env` file using `.env.example` as a reference.
5. Add your MongoDB Atlas connection URI to `MONGO_URI`.
6. Start the server:

   npm run dev

The server runs on port 5000 by default.

Open http://localhost:5000 to check if the API is running.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /api/registrations | Add a registration |
| GET | /api/registrations | View all registrations |
| GET | /api/registrations/:id | View a registration by ID |
| PUT | /api/registrations/:id | Update a registration |
| DELETE | /api/registrations/:id | Delete a registration |

## Filtering

You can filter registrations using query parameters:

- /api/registrations?eventType=ROBOTICS
- /api/registrations?status=CONFIRMED
- /api/registrations?eventType=ROBOTICS&status=CONFIRMED

## Discount Rules

- CAMPUS50 gives 50% off the ticket price.
- EARLYBIRD deducts 100 from the ticket price.
- The final amount cannot be less than 0.
- Without a discount code, the original ticket price is used.
- Invalid discount codes are rejected.

AI Workshop registrations must have a team size of 1.

## Testing

Use Postman to test the endpoints with valid and invalid inputs, discount calculations, duplicate emails, AI Workshop team size and invalid registration IDs.

## Database

Registration data is stored in MongoDB Atlas using Mongoose.
