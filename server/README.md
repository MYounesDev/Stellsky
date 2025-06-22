# Stellsky Server

Backend server for the Stellsky Web3 application, providing authentication and post management functionality using crypto wallet (Stellar) authentication.

## Features

- Wallet-based authentication (Stellar wallets)
- User management
- Post creation, retrieval, and deletion
- API documentation with Swagger

## Setup

### Prerequisites

- Node.js (v16+)
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Stellsky.git
cd Stellsky/server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following content:
```
# Server configuration
PORT=5000
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:3000

# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/stellsky

# JWT Secret
JWT_SECRET=your-secret-key-should-be-very-long-and-random
```

4. Start the server:
```bash
npm run dev
```

The server will be running at http://localhost:5000.

## API Documentation

API documentation is available at http://localhost:5000/api-docs when the server is running.

## Authentication Flow

1. Frontend gets the wallet address from the user (via the Stellar wallet)
2. Frontend sends the wallet address to the server
3. Server validates the wallet address and creates/gets the user
4. Server generates a JWT token and sends it back to the frontend
5. Frontend stores the token in localStorage for subsequent requests

## Endpoints

### Authentication

- `POST /api/auth/login` - Login with wallet address
- `GET /api/auth/isAuthenticated` - Check if user is authenticated

### Posts

- `POST /api/posts` - Create a new post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a post by ID
- `DELETE /api/posts/:id` - Delete a post
- `GET /api/posts/user/:walletAddress` - Get posts by a specific user 