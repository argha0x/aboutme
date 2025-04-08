// Projects data organized with separate snippet and details sections
// Snippet: Shown on the main projects page
// Details: Shown on the individual project page

export const projectsData = [
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
  },
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
    id: 2,
    slug: 'uv-parameterization',
    showInfo: true,
    showLinks: false,
    snippet: {
      title: 'UV Parameterization Transfer for Patient-Specific Meshes',
      description: 'Developed a GPU-accelerated UV parameterization transfer system to adapt a generic, pre-parameterized mesh to a patient-specific model in a surgical simulation environment. Leveraged ray-casting-based nearest-point computation using compute shaders, ensuring high accuracy and real-time performance.',
      technologies: ['C++17', 'OpenGL 4', 'GLSL', 'Compute Shaders', 'Ray Casting'],
      thumbnailImage: '/aboutme/images/projects/torus.png',
    },
    details: {
      fullDescription: 'In patient-specific surgical simulations, generic anatomical models must be adapted to individual patient data while preserving texture mapping and surface details. This project focused on transferring UV parameterization from a generic, pre-mapped mesh to a patient-specific mesh that is topologically and geometrically similar.\n\nThe system employs a GPU-based ray-casting approach to efficiently compute the nearest corresponding point for each vertex in the specific mesh. Instead of using traditional CPU-based spatial searching (e.g., k-d trees or nearest neighbor searches), this method leverages compute shaders to parallelize nearest-point computation, significantly improving speed and scalability. The computed correspondence allows seamless transfer of UV coordinates, ensuring that textures, materials, and annotations align correctly on the patient-specific mesh.\n\nThe implemented approach supports:\n✅ Real-time UV mapping transfer for surgical simulations\n✅ Efficient nearest-neighbor search via ray casting in compute shaders\n✅ Scalability to high-resolution meshes with minimal performance overhead',
      role: 'Graphics & Mesh Processing Engineer',
      completionDate: 'March 2022',
      features: [
        'GPU-accelerated nearest point computation with compute shaders',
        'Automatic transfer of UV coordinates between topologically similar meshes',
        'Support for high-resolution anatomical meshes (>1M vertices)',
        'Real-time performance suitable for surgical simulation workflows',
        'Robust handling of mesh irregularities and variations',
        'Integration with existing surgical simulation platforms'
      ],
      challenges: 'The primary challenge was achieving accurate correspondence between geometrically different meshes while maintaining real-time performance. Traditional CPU-based spatial search algorithms couldn\'t handle the high-resolution meshes required for surgical simulations. I developed a novel GPU-based ray-casting approach that divides the search space into voxels and uses parallel processing to find the nearest points efficiently. Another challenge was handling edge cases where direct correspondence was ambiguous, which I solved by implementing a multi-pass approach with distance-weighted interpolation.',
      outcome: 'The system achieved a 50x speedup compared to traditional CPU-based methods, enabling real-time UV transfer for meshes with over 1 million vertices. This technology has been integrated into a surgical simulation platform, allowing rapid adaptation of pre-textured generic models to patient-specific anatomies, significantly reducing the manual work required for patient-specific simulations.',
      images: [
        {
          src: '/aboutme/images/projects/torus.png',
          alt: 'UV mapping transfer visualization showing before and after'
        },
        {
          src: '/aboutme/images/projects/stacked_4x2_image.png',
          alt: 'GPU-accelerated ray casting for correspondence detection'
        },

      ],
      links: {
        github: 'https://github.com/yourusername/uv-parameterization-transfer',
        documentation: 'https://docs.example.com/uv-transfer-documentation'
      }
    }
  },
  {
    id: 3,
    slug: 'vasculature-generation',
    showInfo: true,
    showLinks: false,
    snippet: {
      title: 'Collision-Free Generation of Physiological Vasculature Structures',
      description: 'Developed a collision-free procedural generation algorithm for vascular structures using Inverse Procedural Modeling (IPM). The project infers L-System grammars from real blood vessel images and uses GPU-based spatial algorithms to generate biologically accurate, collision-free vascular networks for medical visualization and surgical simulation.',
      technologies: ['pytorch', 'python', 'CUDA', 'OpenGL', 'C++', 'L-Systems', 'Machine Learning'],
      thumbnailImage: '/aboutme/images/projects/annotate.png',
    },
    details: {
      fullDescription: 'This project focuses on the realistic procedural generation of blood vessels for medical visualization and surgical training. The primary goal is to generate vascular networks that accurately reflect the branching structure of human blood vessels while ensuring that newly generated vessels do not collide or intersect with existing structures.\n\nThe approach is based on Inverse Procedural Modeling (IPM), where an L-System (Lindenmayer System) is inferred from real patient blood vessel images using Machine Learning. The extracted L-System grammar defines the branching rules and growth patterns of the blood vessels. The system then procedurally generates new vessels using GPU-based algorithms that enforce collision-free growth constraints.\n\nThe algorithm is designed to enhance endoscopic visualizations of the human brain by generating realistic vascular structures, improving both medical training and preoperative planning. The use of compute shaders and spatial hashing ensures real-time performance, making the technique suitable for interactive simulations.',
      role: 'Procedural Generation & Graphics Engineer',
      completionDate: 'July 2021',
      features: [
        'L-System Grammar Inference: Extracts branching structures from real vascular images and converts them into a procedural generation model',
        'Procedural Blood Vessel Growth: Uses inferred growth rules to synthesize new vascular networks in real-time',
        'Collision-Free Generation: Implements GPU-accelerated spatial hashing and Signed Distance Fields (SDFs) to prevent vessel intersections',
        'Realistic Anatomical Constraints: Ensures that generated structures match biological and medical constraints',
        'Optimized for Medical Visualization: Integrated into endoscopic simulations for neurosurgical applications'
      ],
      challenges: 'The key challenge was developing an algorithm that could generate realistic vascular structures while ensuring no collisions between vessels. Traditional collision detection methods were too slow for real-time applications, especially with the complex branching patterns of blood vessels. I developed a GPU-accelerated spatial hashing technique that efficiently partitioned the 3D space, allowing for fast collision queries during vessel growth. Another significant challenge was extracting meaningful L-System grammars from medical images, which required developing custom image processing algorithms to identify and analyze branching patterns in noisy medical scans.',
      outcome: 'The project successfully created a system that generates realistic, collision-free vascular networks for enhanced medical simulations and surgical planning. The technology has been integrated into VR-based surgical training platforms, helping neurosurgeons visualize patient-specific vascular networks for preoperative analysis. Additionally, the data-driven approach has contributed to biomedical research by providing a novel method for studying vascular growth patterns and procedural modeling. The GPU-based implementation achieves real-time performance, generating complex vascular structures with thousands of branches in under a second.',
      images: [
        {
          src: '/aboutme/images/projects/annotate.png',
          alt: 'Annotation'
        },
        {
          src: '/aboutme/images/projects/resultVasculature.png',
          alt: 'L-System Grammer inference with Collision Reduction result'
        },
        {
          src: '/aboutme/images/projects/renderingResult.png',
          alt: 'Procedurally generated vascular network visualization'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/vasculature-generation',
        documentation: 'https://docs.example.com/vasculature-generation'
      }
    }
  },
  {
    id: 4,
    slug: 'realtime-csg-subtraction',
    showInfo: true,
    showLinks: false,
    snippet: {
      title: 'Realtime CSG Subtraction using Image-Space Based Approach',
      description: 'Developed a high-performance image-space Constructive Solid Geometry (CSG) subtraction algorithm using Metal and VisionOS, enabling real-time rendering of complex subtractions for immersive applications.',
      technologies: ['Swift', 'Metal', 'VisionOS', 'MSL'],
      thumbnailImage: '/aboutme/images/projects/cut.png',
    },
    details: {
      fullDescription: 'Traditional object-space CSG operations can be computationally expensive, especially in interactive or immersive environments. To address this, I implemented an image-space based CSG subtraction technique using Metal shaders, achieving real-time performance without compromising accuracy.\n\nThis approach leverages depth buffer comparisons and custom fragment shaders to compute and render subtracted geometry directly in screen space. The project was tailored for VisionOS, enabling rich, interactive 3D visualizations that can run efficiently on Apple\'s spatial computing devices.\n\nThe implementation uses a multi-pass rendering approach where objects are first rendered to separate depth buffers, then a final pass processes these depth values to determine visibility based on CSG subtraction rules. This technique avoids the heavy computational cost of performing boolean operations on meshes in object space, allowing for dynamic, real-time CSG operations even on complex models.',
      role: 'Graphics Engineer',
      completionDate: 'April 2024',
      features: [
        'Realtime CSG Subtraction: Achieved interactive frame rates for subtractive geometry operations',
        'Custom Metal Shaders: Utilized MSL for precise depth and stencil manipulation',
        'Optimized for VisionOS: Integrated seamlessly with Apple\'s spatial runtime for immersive experiences',
        'Minimal GPU Overhead: Avoided heavy boolean mesh operations by shifting computation to screen space',
        'Multi-pass Rendering Pipeline: Efficiently manages depth information across rendering stages',
        'Dynamic CSG Operations: Supports real-time modification of subtraction parameters'
      ],
      challenges: 'The primary challenge was implementing accurate CSG subtraction without the traditional computational overhead. Conventional approaches require complex mesh boolean operations that are too slow for real-time applications. I developed a novel image-space technique that performs these operations in screen space using the GPU. Another challenge was handling edge cases where depth precision issues could cause visual artifacts. I implemented a custom depth peeling approach with epsilon adjustments to ensure clean, accurate subtractions even in complex geometric scenarios.',
      outcome: 'The image-space CSG subtraction technique achieved interactive frame rates (60+ FPS) even for complex models with multiple subtraction operations, making it suitable for real-time immersive applications on VisionOS devices. The algorithm has been integrated into visualization tools for architectural and medical applications, allowing users to dynamically explore interior structures through virtual "cutting" operations without performance penalties.',
      images: [
        {
          src: '/aboutme/images/projects/cut.png',
          alt: 'Real-time CSG subtraction visualization'
        }
      ],
      links: {
        github: 'https://github.com/yourusername/realtime-csg-subtraction',
        documentation: 'https://docs.example.com/csg-subtraction-documentation'
      }
    }
  }
];

export default projectsData; 