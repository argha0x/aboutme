# Portfolio Application

A professional portfolio website built with React, featuring detailed project showcases, education history, work experience, publications, and contact information.

## Project Data Structure

The project data is organized to make it easy to add new projects to your portfolio. All project data is stored in `/src/data/ProjectsData.js`.

### How to Add a New Project

1. Open `/src/data/ProjectsData.js`
2. Add a new project object to the `projectsData` array following this structure:

```javascript
{
  id: 4, // Increment this from the last project
  slug: 'your-project-slug', // URL-friendly name (no spaces, lowercase)
  snippet: {
    title: 'Your Project Title',
    description: 'Brief description of your project (1-2 sentences)',
    technologies: ['Technology1', 'Technology2', 'Technology3'],
    thumbnailImage: '/path/to/thumbnail-image.jpg', // Small image for the card
  },
  details: {
    fullDescription: `Detailed description of your project. 
      You can include multiple paragraphs.
      
      Use backtics for multiline text.`,
    role: 'Your Role (e.g., Lead Developer)',
    completionDate: 'Month Year',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      // Add as many features as needed
    ],
    challenges: `Description of technical challenges and how you solved them.`,
    outcome: `Results and impact of the project.`,
    images: [
      {
        src: '/path/to/main-image.jpg',
        alt: 'Main image description'
      },
      {
        src: '/path/to/additional-image1.jpg',
        alt: 'Additional image 1 description'
      },
      // Add as many images as needed
    ],
    links: {
      github: 'https://github.com/yourusername/project',
      live: 'https://example.com/project',
      documentation: 'https://docs.example.com/project',
      // Optional additional links
      case_study: 'https://example.com/case-studies/project',
      blog: 'https://example.com/blog/project'
    }
  }
}
```

### Data Structure Explanation

The project data is structured in two main parts:

#### Snippet
Contains brief information displayed on the Projects overview page:
- `title`: Project name
- `description`: Short description (1-2 sentences)
- `technologies`: Array of technologies used
- `thumbnailImage`: Image displayed on the project card

#### Details
Contains comprehensive information displayed on the Project detail page:
- `fullDescription`: Detailed multi-paragraph description
- `role`: Your role in the project
- `completionDate`: When the project was completed
- `features`: List of key features
- `challenges`: Description of technical challenges and solutions
- `outcome`: Results and impact of the project
- `images`: Array of images with src and alt text
  - The first image is displayed prominently at the top
  - Additional images are shown in the gallery section
- `links`: Object containing various project links
  - All link properties are optional - only include what's relevant

## Development

### Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Building for Production

```bash
npm run build
```

## Technologies Used

- React
- React Router
- Bootstrap
- React Bootstrap
- Bootstrap Icons

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
