# **Project Blueprint: Lotto Number Generator**

## **Overview**

This project is a web-based application that allows users to generate random lottery numbers. It features a modern and visually appealing interface built with HTML, CSS, and vanilla JavaScript, leveraging Web Components for reusable UI elements.

## **Design and Features**

### **Visual Design**

*   **Aesthetics:** A clean, modern design with a playful and engaging feel.
*   **Color Palette:** A vibrant color palette will be used for the lottery balls, with a contrasting background to make them stand in out.
*   **Typography:** Clear and readable fonts will be used for the title and the numbers.
*   **Layout:** A centered, responsive layout that works well on both desktop and mobile devices.
*   **Effects:**
    *   A subtle noise texture on the background for a premium feel.
    *   Multi-layered drop shadows on the lottery balls to create a sense of depth.
    *   A "glow" effect on the "Generate" button on interaction.

### **Functionality**

*   **Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Display:** The generated numbers are displayed as individual "lotto balls."
*   **Web Components:** A `<lotto-ball>` custom element is used to display each number, encapsulating its structure and style.
*   **Interactivity:** A "Generate Numbers" button triggers the generation of a new set of lottery numbers.

## **Current Plan**

1.  **Update `index.html`:**
    *   Set up the basic structure of the application with a title, a container for the lottery balls, and a "Generate" button.
2.  **Update `style.css`:**
    *   Apply styles to the body, container, title, button, and the lottery balls.
    *   Implement the responsive layout and visual effects described above.
3.  **Update `main.js`:**
    *   Create the `<lotto-ball>` Web Component.
    *   Implement the lottery number generation logic.
    *   Add an event listener to the "Generate" button to trigger the number generation and display.
