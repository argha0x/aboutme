// Projects data organized with separate snippet and details sections
// Snippet: Shown on the main projects page
// Details: Shown on the individual project page

export const projectsData = [
  {
    id: 1,
    slug: 'snaptrude-clipping',
    showInfo: true,
    showLinks: false,
    snippet: {
      title: 'Clipping Functionality for Snaptrude Web App',
      description: 'Developed an advanced clipping functionality in the Snaptrude web application, enabling architects to visualize section planes dynamically. This feature allows precise slicing of 3D models for architectural analysis, improving workflow efficiency and design clarity.',
      technologies: ['Babylon.js', 'WebGL', 'GLSL', 'Node.js', 'Express', 'FastAPI', 'MongoDB'],
      thumbnailImage: '/aboutme/images/projects/clipPlane.png',
    },
    details: {
      fullDescription: 'Architects often require section plane visualization to analyze internal structures, inspect spatial relationships, and communicate design intent effectively. This project involved implementing a real-time clipping functionality in the Snaptrude web app, allowing users to slice through 3D models interactively. The clipping planes can be dynamically adjusted, enabling detailed sectional views for various architectural use cases.\n\nThe clipping effect is efficiently achieved using GPU-accelerated shaders in Babylon.js, ensuring smooth real-time rendering without performance bottlenecks. Custom GLSL shaders were written to discard fragments outside the clipped region, creating sharp, accurate section cuts. The system supports multiple clipping planes, with real-time UI controls for toggling, repositioning, and animating section views.\n\nOn the backend, FastAPI and Node.js with Express were used to manage architectural model data, integrating seamlessly with MongoDB for efficient storage and retrieval of section states. The clipping state can be saved and shared across team members, enabling collaborative architectural reviews.',
      role: 'Graphics Engineer',
      completionDate: 'June 2023',
      features: [
        'GPU-accelerated custom GLSL shaders for real-time clipping plane visualization',
        'Multi-plane clipping support for complex architectural sectioning',
        'Interactive controls for positioning, rotating, and adjusting clipping planes',
        'Persistent storage of clipping states for collaboration',
        'Performance optimization for large architectural models',
        'Cross-platform compatibility across modern browsers'
      ],
      challenges: 'Implementing high-performance clipping functionality for large architectural models presented significant challenges. Complex buildings with millions of polygons required careful optimization to maintain interactive frame rates while rendering section cuts. I developed custom shader solutions that leverage GPU parallelism efficiently, using spatial partitioning techniques to limit the shader calculations to relevant areas of the model. Another challenge was creating intuitive UI controls for manipulating clipping planes in 3D space, which required extensive user testing and iterative refinement to achieve an optimal balance between power and simplicity.',
      outcome: 'The section plane visualization feature has become one of crucial tools in the Snaptrude platform, significantly enhancing architects\' ability to analyze and communicate design concepts.',
      images: [
        {
          src: '/aboutme/images/projects/clipPlane.png',
          alt: 'Building section view showing interior structure'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/snaptrude-clipping',
        documentation: 'https://docs.snaptrude.com/section-planes'
      }
    }
  },
  {
    id: 0,
    slug: 'neurosurgical-simulator',
    showInfo: false,
    showLinks: false,
    snippet: {
      title: 'Neurosurgical Simulator for ETV Procedure',
      description: 'Developed a Virtual Reality-based 3D surgical simulator for Endoscopic Third Ventriculostomy (ETV), enabling neurosurgeons to practice and refine their skills in a risk-free environment. The simulator provides real-time scoring based on precision and technique, enhancing surgical training.',
      technologies: ['C++', 'OpenGL 4', 'GLSL', 'SOFA', 'Blender'],
      thumbnailImage: '/aboutme/images/projects/Rendering.png',
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
          src: '/aboutme/images/projects/Rendering.png',
          alt: 'Advanced Rendering of Neurosurgical Simulation'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/neurosurgical-simulator',
        documentation: 'https://etv-simulator-docs.example.com'
      }
    }
  }
];

export default projectsData; 