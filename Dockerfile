FROM node:21.5-bullseye-slim

WORKDIR /app

ENV NEXT_PUBLIC_API_BASE_URL=https://mysteryshopper.connectifie.com/api/v1.0/
ENV NEXT_PUBLIC_SECRET_KEY="LoremXYZ"

COPY . .

# INSTALL OPEN TELEMETRY REQUIRED LIBRARIES
RUN npm install @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-http express --force

RUN npm install  --force  
RUN npm run build
    

CMD npm run start

##
