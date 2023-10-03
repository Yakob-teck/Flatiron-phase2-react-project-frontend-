Project Requirments

1. **Single Page Application (SPA):** You need to create a single-page application using create-react-app. This means you will have only one `index.html` file.

2. **Component Organization:** Your application should use at least three components to keep your code well-organized.
3. **Client-Side Routes:** Implement at least two client-side routes using React Router.

4. **API Integration:** Set up a RESTful API using json-server for your backend. Your application should make at least one GET request and one POST request to the json-server. Use a form to make the POST request, and ensure it's a controlled form/component.

5. **JSON Data:** Keep the data in your json-server simple, avoiding nested data and associations. The primary focus of this project is on the frontend.

6. **State Management:** Upon receiving JSON data from your POST request, update the application state using `setState` or equivalent state management in React. Do not depend on a subsequent action to load new data; the responsibility for re-rendering the page to display the updated list of movies should belong to the `addMovie` function.

**Stretch Goals:**

7. **Additional Components and Routes:** Consider using more components and client-side routes to create a more complex application structure.

8. **Styling:** Add styling to your application. You can write CSS from scratch, use styled components, or utilize CSS frameworks like React Bootstrap, Semantic UI, or Material UI.

9. **External API:** Optionally, incorporate data from an external API. You can explore various public APIs to fetch and display data in your application.

10. **Customization:** Feel free to explore and add additional features or components beyond the basic requirements to enhance your project.

**Deployment:**

11. **Frontend and Backend Repositories:** Set up two separate repositories, one for your frontend and one for your backend. This separation makes it easier to deploy your project later.

12. **Deployment of Frontend and Backend:** After completing your project, you are encouraged to deploy it. Deploy the frontend and backend repositories to their own standalone servers. You can use services like Render for the backend and Netlify for the frontend.

**Environment Variables:**

13. **Environment Variables:** Consider using environment variables for managing different environments (development, test, production). You can create `.env` files for development and production to handle variables like API URLs.

By following these requirements and optional stretch goals, you can create a single-page React application with client-side routing, API integration, and deployment.
