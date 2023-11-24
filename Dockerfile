# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies for Hardhat and run tests
RUN npm install
RUN npx hardhat test

# Expose port 3000 for the React application
EXPOSE 3000

# Define the command to start the React application
CMD ["npm", "start"]
