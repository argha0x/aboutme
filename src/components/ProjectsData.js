const projectsData = [
  {
    id: 1,
    title: 'Machine Learning Framework',
    description: 'A comprehensive machine learning framework for rapid prototyping and deployment of models.',
    technologies: ['Python', 'TensorFlow', 'Docker'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'project/ml-framework',
    longDescription: 'This machine learning framework provides a scalable and efficient solution for developing, training, and deploying ML models. It includes data preprocessing utilities, model selection tools, hyperparameter optimization, and deployment pipelines. The framework is containerized using Docker for consistent environments across development and production.'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'project/ecommerce',
    longDescription: 'An end-to-end e-commerce platform featuring user authentication, product catalog management, shopping cart functionality, secure payment processing, and order tracking. The application uses React for the frontend, Node.js for the backend API, and MongoDB as the database. Features include real-time inventory updates and an administrative dashboard.'
  },
  {
    id: 3,
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for visualizing complex datasets with customizable charts and filters.',
    technologies: ['D3.js', 'React', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'project/data-viz',
    longDescription: 'A sophisticated data visualization dashboard that transforms complex datasets into intuitive, interactive visualizations. Built with D3.js and React, it allows users to create customized charts, graphs, and maps with real-time filtering capabilities. The dashboard supports exporting visualization in multiple formats and integrates with Firebase for data storage and authentication.'
  },
  {
    id: 4,
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile application for tracking fitness goals and workouts.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'project/fitness-app',
    longDescription: 'A cross-platform fitness tracking application built with React Native. The app allows users to create custom workout plans, track progress, set goals, and monitor health metrics. Features include workout timers, exercise libraries with video demonstrations, progress graphs, and social sharing capabilities. User data is stored in Firebase with Redux for state management.'
  },
  {
    id: 5,
    title: 'IoT Home Automation',
    description: 'Smart home solution using IoT devices to automate lighting, security, and climate control.',
    technologies: ['Raspberry Pi', 'Python', 'MQTT'],
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'project/iot-home',
    longDescription: 'An IoT-based home automation system built on Raspberry Pi that integrates various smart devices to create a unified home automation experience. The system controls lighting, climate, security cameras, and door locks through a centralized interface. It uses MQTT protocol for device communication and features voice control integration, scheduling, and smartphone access.'
  },
  {
    id: 6,
    title: 'Blockchain Trading Platform',
    description: 'Decentralized trading platform built on blockchain technology with smart contracts.',
    technologies: ['Ethereum', 'Solidity', 'Web3.js'],
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    link: 'project/blockchain',
    longDescription: 'A decentralized trading platform built on Ethereum blockchain that allows secure peer-to-peer transactions without intermediaries. The platform uses smart contracts written in Solidity to execute trades automatically when conditions are met. Features include a digital wallet, transaction history, token swapping, and NFT marketplace capabilities.'
  }
];

export default projectsData; 