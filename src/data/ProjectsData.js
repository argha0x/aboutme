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