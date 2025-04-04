// Projects data organized with separate snippet and details sections
// Snippet: Shown on the main projects page
// Details: Shown on the individual project page

export const projectsData = [
  {
    id: 0,
    slug: 'neurosurgical-simulator',
    showInfo: false,
    snippet: {
      title: 'Neurosurgical Simulator for ETV Procedure',
      description: 'Developed a Virtual Reality-based 3D surgical simulator for Endoscopic Third Ventriculostomy (ETV), enabling neurosurgeons to practice and refine their skills in a risk-free environment. The simulator provides real-time scoring based on precision and technique, enhancing surgical training.',
      technologies: ['C++', 'OpenGL 4', 'GLSL', 'SOFA', 'Blender'],
      thumbnailImage: '/aboutme/images/projects/rendering.png',
    },
    details: {
      fullDescription: 'Endoscopic Third Ventriculostomy (ETV) is a neurosurgical procedure performed to treat hydrocephalus, a condition where cerebrospinal fluid (CSF) accumulates in the brain, causing increased intracranial pressure and head enlargement. In this procedure, a surgeon punctures the skull, navigates to the third ventricle, and creates an opening to restore CSF flow.\n\nThis project involved designing and developing a Virtual Reality-based 3D surgical simulator that replicates the ETV procedure with high precision. The simulator offers an immersive training environment where neurosurgeons can practice navigating the endoscope through the brain, identifying anatomical landmarks, and performing the puncture with accuracy. A real-time scoring system evaluates performance based on factors like tool stability, accuracy of incision, and completion time, providing quantitative feedback for skill improvement.\n\nThe simulator leverages real-time physics simulation, haptic feedback, and high-fidelity rendering techniques to ensure an authentic surgical experience. Advanced OpenGL-based rendering techniques were utilized to create realistic soft tissue deformation and lighting effects, enhancing depth perception within the virtual scene.',
      role: 'Graphics & Simulation Developer',
      completionDate: 'January 2022',
      features: [
        'High-fidelity anatomical modeling of brain structures',
        'Physics-based simulation of tool-tissue interaction',
        'Real-time scoring and performance metrics',
        'Haptic feedback for realistic tactile sensation',
        'Realistic fluid simulation for cerebrospinal fluid',
        'Customizable training scenarios with varying difficulty levels'
      ],
      challenges: 'Creating realistic deformable tissue behavior that could respond naturally to surgical tools while maintaining real-time performance was particularly challenging. I implemented a custom GPU-accelerated physical simulation framework that balanced accuracy with performance. Another challenge was designing an intuitive interface that closely mimicked the ergonomics of actual surgical tools.',
      outcome: 'The simulator is now being used in neurosurgical training programs, allowing residents to practice critical procedures in a safe environment before performing them on patients. Early feedback indicates improved confidence and technical proficiency among trainees who used the simulator.',
      images: [
        {
          src: '/aboutme/images/projects/lab.png',
          alt: 'Neurosurgical Lab Environment'
        },
        {
          src: '/aboutme/images/projects/localThicknessMap.png',
          alt: 'Local Thickness Visualization for Brain Tissue'
        },
        {
          src: '/aboutme/images/projects/rendering.png',
          alt: 'Advanced Rendering of Neurosurgical Simulation'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/neurosurgical-simulator',
        documentation: 'https://etv-simulator-docs.example.com'
      }
    }
  },
  // Legacy projects converted to new format
  {
    id: 1,
    slug: 'ml-framework',
    showInfo: false,
    snippet: {
      title: 'Machine Learning Framework',
      description: 'A comprehensive machine learning framework for rapid prototyping and deployment of models.',
      technologies: ['Python', 'TensorFlow', 'Docker'],
      thumbnailImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: 'This machine learning framework provides a scalable and efficient solution for developing, training, and deploying ML models. It includes data preprocessing utilities, model selection tools, hyperparameter optimization, and deployment pipelines. The framework is containerized using Docker for consistent environments across development and production.',
      role: 'Machine Learning Engineer',
      completionDate: 'January 2023',
      features: [
        'Automated data preprocessing and feature engineering',
        'Model selection and hyperparameter optimization',
        'Containerized deployment with Docker',
        'Distributed training support',
        'Model versioning and lifecycle management'
      ],
      challenges: 'The main challenge was creating a framework flexible enough to handle various types of ML models while maintaining ease of use. I implemented a modular architecture that allows components to be swapped out as needed.',
      outcome: 'The framework reduced model development time by 40% and simplified the deployment process, allowing for more rapid iteration.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Machine Learning Framework Dashboard'
        },
        {
          src: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Data visualization component'
        },
        {
          src: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Model training interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Performance metrics dashboard'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/ml-framework',
        documentation: 'https://ml-framework-docs.example.com'
      }
    }
  },
  {
    id: 2,
    slug: 'ecommerce',
    showInfo: true,
    snippet: {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      thumbnailImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: 'An end-to-end e-commerce platform featuring user authentication, product catalog management, shopping cart functionality, secure payment processing, and order tracking. The application uses React for the frontend, Node.js for the backend API, and MongoDB as the database. Features include real-time inventory updates and an administrative dashboard.',
      role: 'Full Stack Developer',
      completionDate: 'August 2022',
      features: [
        'User authentication and profile management',
        'Product catalog with search and filtering',
        'Shopping cart and checkout process',
        'Payment processing with Stripe',
        'Order tracking and history',
        'Admin dashboard for inventory management'
      ],
      challenges: 'Implementing real-time inventory management that could handle concurrent users without conflicts was challenging. I solved this using optimistic UI updates with server-side validation.',
      outcome: 'The platform increased sales by 35% for the client and reduced cart abandonment by 25% compared to their previous solution.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'E-commerce homepage'
        },
        {
          src: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Product page'
        },
        {
          src: 'https://images.unsplash.com/photo-1544612786-c0f4a3cb6187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Shopping cart interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Mobile shopping experience'
        },
        {
          src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Inventory management dashboard'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/ecommerce-platform',
        live: 'https://ecommerce-example.com'
      }
    }
  },
  {
    id: 3,
    slug: 'data-viz',
    showInfo: true,
    snippet: {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets with customizable charts and filters.',
      technologies: ['D3.js', 'React', 'Firebase'],
      thumbnailImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: 'A sophisticated data visualization dashboard that transforms complex datasets into intuitive, interactive visualizations. Built with D3.js and React, it allows users to create customized charts, graphs, and maps with real-time filtering capabilities. The dashboard supports exporting visualization in multiple formats and integrates with Firebase for data storage and authentication.',
      role: 'Frontend Developer',
      completionDate: 'March 2023',
      features: [
        'Interactive charts and graphs using D3.js',
        'Real-time data updates',
        'Customizable dashboard layouts',
        'Data filtering and searching',
        'Export to PDF, PNG, and CSV formats',
        'User authentication and saved views'
      ],
      challenges: 'Creating smooth animations and transitions with large datasets was difficult. I implemented data sampling and progressive loading techniques to maintain performance.',
      outcome: 'The dashboard is now used by data analysts at several companies to visualize and communicate complex data insights to stakeholders.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Data visualization dashboard'
        },
        {
          src: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Chart customization interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Interactive data filtering'
        },
        {
          src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Financial data visualization'
        },
        {
          src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Data export features'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/data-viz-dashboard',
        live: 'https://dataviz.example.com'
      }
    }
  },
  {
    id: 4,
    slug: 'fitness-app',
    showInfo: false,
    snippet: {
      title: 'Mobile Fitness App',
      description: 'A cross-platform mobile application for tracking fitness goals and workouts.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      thumbnailImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: 'A cross-platform fitness tracking application built with React Native. The app allows users to create custom workout plans, track progress, set goals, and monitor health metrics. Features include workout timers, exercise libraries with video demonstrations, progress graphs, and social sharing capabilities. User data is stored in Firebase with Redux for state management.',
      role: 'Mobile Developer',
      completionDate: 'October 2022',
      features: [
        'Custom workout creation and tracking',
        'Exercise library with video demonstrations',
        'Progress tracking with charts and graphs',
        'Goal setting and achievement rewards',
        'Social sharing and community features',
        'Offline mode for workouts without connectivity'
      ],
      challenges: 'Optimizing performance across different device capabilities and ensuring the app worked well offline were the main challenges. I implemented an efficient offline-first data architecture.',
      outcome: 'The app has over 50,000 downloads and maintains a 4.7-star rating across app stores.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Fitness app home screen'
        },
        {
          src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Workout tracking interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Exercise demonstration screen'
        },
        {
          src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Progress tracking charts'
        },
        {
          src: 'https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Daily workout schedule'
        },
        {
          src: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Nutrition tracking section'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/fitness-app',
        live: 'https://apps.apple.com/example/fitness-app'
      }
    }
  },
  {
    id: 5,
    slug: 'iot-home',
    showInfo: true,
    snippet: {
      title: 'IoT Home Automation',
      description: 'Smart home solution using IoT devices to automate lighting, security, and climate control.',
      technologies: ['Raspberry Pi', 'Python', 'MQTT'],
      thumbnailImage: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: 'An IoT-based home automation system built on Raspberry Pi that integrates various smart devices to create a unified home automation experience. The system controls lighting, climate, security cameras, and door locks through a centralized interface. It uses MQTT protocol for device communication and features voice control integration, scheduling, and smartphone access.',
      role: 'IoT Developer',
      completionDate: 'December 2022',
      features: [
        'Centralized control of smart home devices',
        'Voice control integration with Alexa and Google Home',
        'Automated routines and scheduling',
        'Security system with cameras and sensors',
        'Energy usage monitoring and optimization',
        'Mobile app for remote control'
      ],
      challenges: 'Ensuring reliable communication between diverse IoT devices and providing a unified interface was complex. I implemented a middleware layer to normalize device interactions.',
      outcome: 'The system reduced energy costs by 20% for users and improved convenience through automation of routine tasks.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Smart home control panel'
        },
        {
          src: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'IoT device configuration'
        },
        {
          src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Smart lighting system'
        },
        {
          src: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Voice-controlled home interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Security camera monitoring'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/iot-home',
        documentation: 'https://iot-home-docs.example.com'
      }
    }
  },
  {
    id: 6,
    slug: 'blockchain',
    showInfo: true,
    snippet: {
      title: 'Blockchain Trading Platform',
      description: 'Decentralized trading platform built on blockchain technology with smart contracts.',
      technologies: ['Ethereum', 'Solidity', 'Web3.js'],
      thumbnailImage: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: 'A decentralized trading platform built on Ethereum blockchain that allows secure peer-to-peer transactions without intermediaries. The platform uses smart contracts written in Solidity to execute trades automatically when conditions are met. Features include a digital wallet, transaction history, token swapping, and NFT marketplace capabilities.',
      role: 'Blockchain Developer',
      completionDate: 'July 2023',
      features: [
        'Peer-to-peer trading with smart contracts',
        'Digital wallet integration',
        'Token swapping functionality',
        'NFT marketplace',
        'Transaction history and analytics',
        'Multi-signature security features'
      ],
      challenges: 'Optimizing gas fees for transactions and ensuring smart contract security were the primary challenges. I conducted thorough security audits and implemented gas optimization techniques.',
      outcome: 'The platform processes over $500,000 in monthly trading volume and has grown its user base by 300% since launch.',
      images: [
        {
          src: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Blockchain trading dashboard'
        },
        {
          src: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Smart contract interaction'
        },
        {
          src: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Digital wallet interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1645576402896-9de183dddb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'NFT marketplace'
        },
        {
          src: 'https://images.unsplash.com/photo-1647390748743-a78c96c10a63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Transaction history analytics'
        },
        {
          src: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Security settings dashboard'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/blockchain-trading',
        live: 'https://defi-trading.example.com',
        documentation: 'https://blockchain-docs.example.com'
      }
    }
  },
  // New sample projects
  {
    id: 7,
    slug: 'ai-content-generator',
    showInfo: false,
    snippet: {
      title: 'AI Content Generator',
      description: 'An AI-powered platform for generating marketing content, blog posts, and social media updates.',
      technologies: ['Python', 'OpenAI API', 'React', 'FastAPI'],
      thumbnailImage: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: `This AI content generation platform helps marketers and content creators produce
      high-quality written content at scale. The system uses advanced natural language processing
      to generate content that matches specific brand voices and content requirements.
      
      The platform includes customization options for tone, style, and content structure,
      along with editing tools to refine the AI-generated content before publication.`,
      role: 'Lead Developer',
      completionDate: 'April 2023',
      features: [
        'AI-powered content generation using GPT-4',
        'Brand voice customization and templates',
        'Content calendar and scheduling',
        'SEO optimization suggestions',
        'Analytics to track content performance',
        'Collaborative editing workflow'
      ],
      challenges: `The main challenge was fine-tuning the AI to consistently produce content that
      matched specific brand voices and style guidelines. I implemented a feedback system
      that allowed the model to learn from user edits and improve over time.`,
      outcome: `The platform reduced content creation time by 60% for users and is now used
      by over 200 marketing teams to scale their content production.`,
      images: [
        {
          src: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'AI content generator interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1591376689563-a8a4cdd58da0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Content editing interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Content performance analytics'
        },
        {
          src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Brand voice configuration'
        },
        {
          src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'SEO optimization tools'
        },
        {
          src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Collaborative team workspace'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/ai-content-generator',
        live: 'https://ai-content.example.com',
        blog: 'https://medium.com/yourusername/building-an-ai-content-platform'
      }
    }
  },
  {
    id: 8,
    slug: 'sustainable-supply-chain',
    showInfo: true,
    snippet: {
      title: 'Sustainable Supply Chain Tracker',
      description: 'Blockchain-based supply chain tracking system for verifying ethical and sustainable sourcing.',
      technologies: ['Hyperledger Fabric', 'Node.js', 'React', 'AWS'],
      thumbnailImage: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    details: {
      fullDescription: `This supply chain tracking system provides end-to-end visibility for products,
      allowing companies and consumers to verify ethical sourcing, sustainability practices,
      and carbon footprint across the entire supply chain.
      
      Built on Hyperledger Fabric blockchain, the system ensures data integrity and provides
      immutable records of a product's journey from raw materials to consumer.`,
      role: 'Technical Architect',
      completionDate: 'September 2023',
      features: [
        'Blockchain-based record keeping for supply chain events',
        'QR code scanning for consumer transparency',
        'Carbon footprint calculation and offsetting',
        'Supplier compliance tracking and reporting',
        'Ethical sourcing verification',
        'Real-time alerts for supply chain disruptions'
      ],
      challenges: `Integrating with legacy supply chain systems while maintaining data integrity
      was particularly challenging. I designed a hybrid architecture with secure API gateways
      to bridge traditional databases with the blockchain ledger.`,
      outcome: `The system has been adopted by three multinational companies and has helped
      them achieve 30% higher consumer trust ratings through transparent sourcing information.`,
      images: [
        {
          src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
          alt: 'Supply chain tracking dashboard'
        },
        {
          src: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Consumer transparency app'
        },
        {
          src: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'QR code scanning interface'
        },
        {
          src: 'https://images.unsplash.com/photo-1586528116493-a123ffce5d71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Carbon footprint tracking'
        },
        {
          src: 'https://images.unsplash.com/photo-1565633434584-28d5a3920a9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Supplier compliance dashboard'
        },
        {
          src: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Supply chain alert system'
        },
        {
          src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          alt: 'Blockchain verification process'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/sustainable-supply-chain',
        case_study: 'https://your-portfolio.com/case-studies/supply-chain',
        documentation: 'https://supply-chain-docs.example.com'
      }
    }
  }
];

export default projectsData; 