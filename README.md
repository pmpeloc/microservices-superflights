# Microservices with NestJS

## API Gateway:

npx nest new api-gateway
yarn add @nestjs/config
yarn add amqplib amqp-connection-manager @nestjs/microservices class-validator class-transformer
yarn add @nestjs/swagger
yarn add swagger-ui-express

npx nest g mo user
npx nest g co user

npx nest g mo passenger
npx nest g co passenger

npx nest g mo flight
npx nest g co flight

## Microservices:

npx nest new microservice-users
yarn add bcrypt
yarn add mongoose @nestjs/mongoose
yarn add amqplib amqp-connection-manager
yarn add @nestjs/microservices @nestjs/config

npx nest new microservice-passengers
yarn add amqplib amqp-connection-manager @nestjs/microservices @nestjs/config @nestjs/microservices @nestjs/config mongoose @nestjs/mongoose
