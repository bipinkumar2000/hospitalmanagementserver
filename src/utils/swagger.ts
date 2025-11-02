import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Relay Server API",
      version: "1.0.0",
      description: "REST API documentation for Relay Server",
      contact: {
        name: "Jen Thomas James",
      },
    },
    servers: [
      {
        url: "http://localhost:8080/relay/api/v1",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        HttpResponse: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: "success",
              description: "Always success",
            },
            data: {
              type: "object",
              nullable: true,
              description: "Main payload for the endpoint",
            },
            message: {
              type: "string",
              example: "Request successfull",
              description: "Any message from the server to the client",
            },
          },
        },
        HttpError: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: "error",
              description: "Always error",
            },
            error: {
              type: "object",
              description: "Error payload for the response",
              properties: {
                message: {
                  type: "string",
                  example: "Invalid email received",
                  description: "The error message for the response",
                },
                code: {
                  type: "string",
                  example: "500",
                  nullable: true,
                  description: "The HTTP status code for the error response",
                },
                details: {
                  type: "string",
                  example:
                    "The received email is malformed and does not match the expected pattern",
                  description: "The actual error messsage",
                },
              },
            },
            message: {
              type: "string",
              example: "Request successfull",
              description: "Any message from the server to the client",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"], // <-- files containing annotations
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
