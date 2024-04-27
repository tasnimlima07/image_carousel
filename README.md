# Image Carousel

This is a simple image carousel built using HTML, CSS, and JavaScript. It allows users to view a collection of images in a carousel format with navigation buttons to move between images.

## Demo

You can see a live demo of the image carousel [here](https://tasnimlima07.github.io/image_carousel/).

## Features

- **Responsive Design**: The image carousel is responsive and works well on various screen sizes.
- **Navigation Buttons**: Users can navigate between images using the next and previous buttons.
- **Auto-Play**: The carousel can automatically cycle through images at a predefined interval.
- **Keyboard Navigation**: Users can use keyboard arrow keys to navigate between images.
- **Customizable**: Easily customizable through CSS to fit different styles and themes.

## Usage

To use the image carousel in your project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/tasnimlima07/image_carousel.git
    ```

2. Navigate into the project directory:

    ```bash
    cd image_carousel
    ```

3. Include the necessary files in your HTML:

    ```html
    <!-- Link to the CSS file -->
    <link rel="stylesheet" href="css/style.css">

    <!-- Include the JavaScript file -->
    <script src="js/script.js"></script>
    ```

4. Structure your HTML:

    ```html
    <!-- HTML structure for the image carousel -->
    <div class="carousel-container">
        <div class="carousel-slide">
            <img src="image1.jpg" alt="Image 1">
            <img src="image2.jpg" alt="Image 2">
            <img src="image3.jpg" alt="Image 3">
            <!-- Add more images as needed -->
        </div>
        <button class="prev-btn">Prev</button>
        <button class="next-btn">Next</button>
    </div>
    ```

5. Customize the CSS:

    Modify the `style.css` file to change the appearance and layout of the image carousel according to your preferences.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/my-feature`).
6. Create a new pull request.

