FROM node:18-alpine
WORKDIR /app

# Set environment variables to reduce memory usage
ENV NODE_OPTIONS="--max-old-space-size=512"
ENV UV_THREADPOOL_SIZE=4

COPY package.json .
COPY package-lock.json .

# Use npm install instead of npm ci for better compatibility on low-resource VPS
# Clean cache after install to reduce image size
RUN npm install --production=false && npm cache clean --force

COPY . .

# Build with reduced memory
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
