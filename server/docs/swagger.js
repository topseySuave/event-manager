module.export = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Boots Events Manager",
    "description": "Event registration platform for all of your online and on-site event management needs and handles the entire event lifecycle from start to finish"
  },
  "schemes": [
    "https"
  ],
  "host": "localhost:8000",
  "basePath": "/api/v1",
  "paths": {
    "/centers/:id": {
      "get": {
        "summary": "Gets a Center",
        "description": "Center object to be added in the store",
        "responses": {
          "200": {
            "description": "A single Center",
            "schema": {
              "type": "object",
              "items": {
                "properties": {
                  "firstName": {
                    "type": "string"
                  },
                  "lastName": {
                    "type": "string"
                  },
                  "email": {
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
