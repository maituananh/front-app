# Use an official Node.js runtime as a parent image
FROM node:23-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files trước để tận dụng cache
COPY package*.json ./

# Cài dependencies (dùng npm hoặc yarn)
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Build project (sẽ tạo thư mục dist/)
RUN npm run build


# ----- Stage 2: Serve with Nginx -----
FROM nginx:1.28.0-alpine

# Copy file build từ stage trước sang nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy file cấu hình nginx tùy chỉnh (nếu có)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Khởi động nginx
CMD ["nginx", "-g", "daemon off;"]