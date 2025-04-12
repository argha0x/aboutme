export const publicationsData = [
  {
    id: 1,
    title: 'A review of virtual reality simulators for neuroendoscopy',
    authors: 'Baby, B., Singh, R., Suri, A., Dhanakshirur, R. R., Chakraborty, A., Kumar, S., Kalra, P. K., & Banerjee, S.',
    venue: 'Neurosurgical Review',
    year: '2019',
    links: [
      {
        type: 'DOI',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31444716/'
      }
    ]
  },
  {
    id: 2,
    title: 'Towards Generalised Position Based Dynamics: Theoretical and Empirical Analysis',
    authors: 'Chakraborty, A., Narain, R. (Guide)',
    venue: "Master's Thesis, Indian Institute of Technology Delhi",
    year: '2024',
    description: "This work explores algorithmic deformation of soft bodies in real-time. The thesis introduces Generalised Position Based Dynamics (GPBD), proving its equivalence to Extended Position Based Dynamics (XPBD) while overcoming limitations for non-linear energy forces. It demonstrates the algorithm's flexibility, stability, and accuracy for both linear and non-linear interaction models."
  },
  {
    id: 3,
    title: "Towards Generalized Position Based Dynamics",
    authors: "Manas Chaudhary*, Chandradeep Pokhariya*, Abhay Pratap Singh Rathore, Argha Chakraborty, Rahul Narain",
    venue: "SIGGRAPH 2024 (Rejected)",
    year: "2024",
    description: "The position-based dynamics (PBD) algorithm is a popular and versatile technique for real-time simulation of deformable bodies, but is only applicable to forces that can be expressed as linearly compliant constraints. In this work, we explore a generalization of PBD that is applicable to arbitrary nonlinear force models. We do this through a force-centric reformulation of implicit time integration, to which applying Gauss-Seidel iterations naturally leads to a PBD-type algorithm. We further show how the basic algorithm can be extended to enable robust handling of inverted elements, and exploit rigid invariance to reduce the computational cost. As we demonstrate, our method allows interactive simulation of various material models that cannot be represented by existing variations of position-based dynamics, such as neo-Hookean elasticity with an inversion barrier, and homogenized yarn-level cloth.",
    keywords: ["Position Based Dynamics", "Physics Simulation", "Deformable Bodies", "Nonlinear Force Models", "Implicit Time Integration", "Gauss-Seidel", "Neo-Hookean Elasticity", "Cloth Simulation"]
  },
  {
    id: 4,
    title: "Position-Based Simulation of Homogenized Yarn-Level Cloth",
    authors: "Manas Chaudhary*, Chandradeep Pokhariya*, Abhay Pratap Singh Rathore, Argha Chakraborty, Rahul Narain",
    venue: "SIGGRAPH 2025 (Rejected)",
    year: "2025",
    description: "The position-based dynamics (PBD) algorithm is a popular and versatile technique for real-time simulation of deformable bodies, but is only applicable to forces that can be expressed as linearly compliant constraints. In this work, we explore a generalization of PBD that is applicable to arbitrary nonlinear force models. We do this by reformulating the implicit time integration equations in terms of the individual forces in the system, to which applying Gauss-Seidel iterations naturally leads to a PBD-type algorithm. As we demonstrate, our method allows simulation of homogenized yarn-level cloth that cannot be represented by existing variations of position-based dynamics. We also show significant performance improvements over the ARCSim implementation by sperl2020hylc for high mesh resolutions.",
    keywords: ["Position Based Dynamics", "Cloth Simulation", "Yarn-Level Simulation", "Nonlinear Force Models", "Implicit Time Integration", "Gauss-Seidel", "Performance Optimization", "ARCSim"]
  }
]; 