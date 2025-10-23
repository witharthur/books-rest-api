## 1. What is REST?

A design style for APIs that use HTTP methods to access and manipulate resources (like data) via URLs.

## 2. What are HTTP methods and their use?

- **GET** – read data
- **POST** – create data
- **PUT** – update data
- **DELETE** – remove data

## 3. How do you handle routes in Express?

Using methods like `app.get()`, `app.post()`, `app.put()`, `app.delete()` to define endpoints.

## 4. What is middleware in Express?

Functions that run between request and response — used for logging, auth, parsing, error handling, etc.

## 5. How do you parse JSON in Express?

Use built-in middleware:
```javascript
app.use(express.json());
```

## 6. What status codes do you use for CRUD?

- **200** OK
- **201** Created
- **400** Bad Request
- **404** Not Found
- **500** Server Error

## 7. How would you handle errors in Express?

Use error-handling middleware:
```javascript
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
```

## 8. What is CORS?

Cross-Origin Resource Sharing — allows APIs to be accessed from different domains.

## 9. Explain request and response objects in Express

- **req** → holds incoming data (params, body, headers)
- **res** → used to send a response (JSON, status, etc.)

## 10. How do you test API endpoints?

Using tools like Postman, Insomnia, or curl to send requests and verify responses.
