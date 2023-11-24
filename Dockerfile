# Use a Node.js image as the base
FROM node:18.16

# Set the working directory
WORKDIR /usr/src/app

# Copy 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install


# Copy all project files into the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port used by your application (usually 3000 for Next.js)
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
