# Web Components Assignment: HTML Custom Elements

## Overview

In this assignment, you will learn about web components and how to create reusable [HTML Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements). Web components allow you to encapsulate functionality and styles, making it easier to create modular and maintainable code. By using web components, you will have more control over the development of isolated, reusable UI components, enhancing both productivity and code quality.

This assignment will walk you through the process of understanding web components, creating a custom element, and integrating it into a web application, while also exploring how web components fit into modern web development trends.

## Goals

- Understand the concept of web components and their benefits in modern web development.
- Learn how to create and use HTML Custom Elements, leveraging Shadow DOM for encapsulation.
- Explore practical applications of web components in real-world projects.
- Apply best practices for accessibility, browser compatibility, and encapsulation.

## Getting Started

1. **Research Web Components**:
   - Investigate the definition, purpose, and [structure of web components](https://javascript.info/web-components) (Custom Elements, Shadow DOM, and HTML Templates).
   - [Read about the advantages of using web components](https://www.sencha.com/blog/what-is-web-component-and-why-you-should-be-using-them/) in web development, such as encapsulation, reusability, and interoperability with other frameworks.
   - [Explore how web components compare to modern frameworks](https://www.uxpin.com/studio/blog/react-vs-web-components/#:~:text=Web%20Components%20are%20ideal%20for,to%20build%20scalable%2C%20maintainable%20applications.) like React, Angular, and Vue.

2. **Explore Real-World Use Cases**:
   - [Review practical applications of web components in real-world projects](https://nolanlawson.com/2023/08/23/use-web-components-for-what-theyre-good-at/). Examples include:
     - Custom form elements (e.g., date pickers, password toggles).
     - Reusable UI components (e.g., buttons, cards, modals).
     - Complex widgets (e.g., data tables, charts, sliders).
     - Theming components for consistent styles across a web application.

## Assignment Challenges

### 1. **Create Your Own HTML Custom Element**
   - Choose a custom element to create based on the real-world applications discussed.
   - Implement the following:
     - **Encapsulation**: Use the Shadow DOM to encapsulate your component's styles and functionality.
     - **Attributes**: Allow customization of your component through attributes. Think of ways your component can be customized by users or developers (e.g., passing in data or changing styles dynamically). Its important to understand that attributes can be used by a web component to expose it's internal state. This is how other parts of your app can access state/data held by a web component. 
     - **Events**: Implement custom events to enable interaction with your component (e.g., a button click, form input validation, or a custom behavior triggered by user action).

   > **Hint**: Start with a basic component. You can create something simple, like a reusable button, and then gradually add complexity such as attributes for customization or event handling.

### 2. **Styling Your Custom Element**
   - Use CSS to style your custom element, ensuring that styles are encapsulated to avoid conflicts with global styles in the application. Leverage the Shadow DOM to achieve this encapsulation.
   - Ensure that your component is visually appealing and fits within a consistent design theme.
   - Follow best practices for accessibility (e.g., using ARIA attributes).
   - NOTE! The Shadow DOM can be an [anti pattern](https://en.wikipedia.org/wiki/Anti-pattern). Building yout component without the shadow DOM is okay and makes somethings easier, at the risk of allowing the component to be affected by external styles.   

   > **Advanced Challenge**: [Implement a slot](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots) within your component to allow dynamic content insertion (e.g., for a modal component that can display various content types).

### 3. **Integration into a Web Application**
   - Integrate your custom element into a simple web application, or modify an existing one, to demonstrate its functionality.
   - Consider how your component improves the usability and maintainability of the application. Does it streamline repetitive code, provide enhanced functionality, or offer better user interaction?

   > **Advanced Challenge**: Use multiple custom elements that interact with one another to showcase a more complex application.

### 4. **Testing and Compatibility**
   - Test your custom element in different browsers (e.g., Chrome, Firefox, Safari). Document any compatibility issues or required polyfills.
   - Ensure that your component behaves well under edge cases, such as missing attributes or incorrect input.

### 5. **Reflection on the Design Process**
   - After completing your component, write a brief report that reflects on your design process. Consider the following:
     - What challenges did you face when encapsulating functionality and styles using the Shadow DOM?
     - How did you ensure your component’s API is intuitive for developers using it?
     - How does your component improve the maintainability or performance of the web application?

## Practical Applications

Here are some practical examples of how web components can be utilized:

- **Rating Component**: Create a component that displays a rating as a number of stars. Set the rating value and maximum number of stars as attributes. Advanced: Allow the type of icon, stars, hearts or other, with an attribute. 
-- **Progress bar**: Create a component that displays a progress bar. The value the bar displays should be set with an attribute, changing the attribute should update the component. Get creative, your progress "bar" could look like anything. 
- **Create a custom Counter**: The Custom counter has a + and - buttons that increase value displayed by the component. Expose the value in an attribute. 
- **Count down timer**: Build a component that counts down to a date/time. When it reaches 0 it should display a message. 
- **Accordion Component**: Build an [accrodion](https://blog.hubspot.com/website/accordion-design#:~:text=In%20web%20design%2C%20an%20accordion,reveal%20or%20hide%20associated%20content.) in a web component. 
- **Tab Component**: Create a web component that displays as [tabs](https://usabilitygeek.com/14-guidelines-for-web-site-tabs-usability/).  
- **Custom Carousel**: Build a web component that creates a [carousel](https://www.vev.design/blog/web-carousel-design/). Allow the images or other content to easily added to the carousel in markup. 
- **Todo list component:** Create a todolist, as a web component. We should be able to add, remove, and mark todo items as complete. 
- **Custom Form Elements**: Build a password input field with a toggle to show or hide the password. Add real-time validation for password strength or format.
- **Reusable UI Libraries**: Create a customizable button component that supports various styles (e.g., size, color, icon). Ensure accessibility and ARIA support.
- **Weather widget**: Create a web component that uses a public API to display the weather data. The API key probably needs to be set as an attribute. The component can display simple weather data. It might include an input that accepts a zip code or use the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API).
- **Data Visualization**: Develop a custom chart component that renders a bar chart or line graph based on dynamic data passed through attributes.
- **Dynamic Modals**: Implement a modal component that supports custom content using slots and can be triggered by user actions or events.

## Submission Requirements

- Submit your HTML Custom Element code along with any necessary CSS and JavaScript.
- Provide a demonstration of your custom element within a simple web application.
- Include a brief report reflecting on your design choices, the challenges you faced, and how you overcame them.
- Optional: Include test results from multiple browsers (with or without polyfills) and any compatibility issues encountered.

## Resources

- **MDN Web Docs**: [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) - Comprehensive guide on web components and custom elements.
- **Web Components.org**: [Web Components](https://www.webcomponents.org/) - A community resource for web components, including libraries and tutorials.
- **Custom Elements Everywhere**: [Custom Elements](https://custom-elements-everywhere.com/) - A resource for understanding how custom elements can be used across different frameworks.
- **Polymer Project**: [Web Component Libraries](https://www.polymer-project.org/) - Explore libraries that help with web component development.

---

### **Web Components Assignment Rubric**

| **Criteria**                            | **Does Not Meet**                            | **Meets Expectations**                         | **Exceeds Expectations**                      | **Points** |
|------------------------------------------|----------------------------------------------|-----------------------------------------------|------------------------------------------------|------------|
| **Originality of Component**            | The custom element lacks originality or closely resembles existing components. | The custom element demonstrates some originality and provides practical functionality. | The custom element is highly original, showcasing creativity and unique features that enhance functionality. | /10        |
| **Adherence to Requirements**            | Many requirements are not met, with missing functionality or incorrect implementation. | Most requirements are met, including encapsulation, attributes, and events. | All requirements are fully met, with clear attention to detail and understanding of project goals. | /10        |
| **Functionality and Interactivity**     | The component does not function as intended, with minimal interaction. | The component functions correctly and responds to events and attributes as expected. | The component is highly interactive and provides robust functionality, with well-implemented custom events. | /10        |
| **Encapsulation with Shadow DOM**       | Shadow DOM is not used effectively, leading to style conflicts with global styles. | Shadow DOM is used adequately to encapsulate styles, with minor conflicts. | Shadow DOM is expertly used to fully encapsulate styles and prevent any conflicts. | /10        |
| **Code Quality and Documentation**      | The code is disorganized and lacks sufficient documentation. | The code is organized with some comments/documentation provided for understanding. | The code is clean, well-organized, and thoroughly documented, making it easy to understand. | /10        |
| **Integration into a Web Application**   | The custom element is poorly integrated into an application or not demonstrated properly. | The custom element is adequately integrated into a simple web application, showcasing its functionality. | The custom element is seamlessly integrated into a web application, enhancing functionality and user experience. | /10        |
| **Reflection on Design Process**         | The reflection lacks detail about challenges faced and how they were overcome. | The reflection offers some insights into the design process and challenges faced. | The reflection is thorough, offering deep insights into the design process and thoughtful solutions to challenges. | /10        |

### **Total Points: /70**
