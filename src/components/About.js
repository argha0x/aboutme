import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const headGroupRef = useRef(null);
  const [showCanvas, setShowCanvas] = useState(false);
  
  // Add Calendly popup handler
  useEffect(() => {
    // Load Calendly widget script and styles
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly
    window.Calendly = window.Calendly || {};
    window.Calendly.initInlineWidget = function(element) {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/rghchaks73',
          parentElement: element,
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8f9fa);
    sceneRef.current = scene;
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    // Renderer setup
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      antialias: true,
      alpha: true
    });
    
    // Set size based on container size
    const containerSize = canvas.parentElement.clientWidth;
    renderer.setSize(containerSize, containerSize);
    
    // Add controls but disable autoRotate
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 8;
    controls.autoRotate = false;
    controls.enableZoom = false;
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);
    
    // Add a softer fill light
    const fillLight = new THREE.DirectionalLight(0xf5e8d5, 0.4);
    fillLight.position.set(-1, 0, 1);
    scene.add(fillLight);
    
    // Create a face model directly with Three.js primitives
    const headGroup = new THREE.Group();
    headGroupRef.current = headGroup;
    
    // Head
    const headGeometry = new THREE.SphereGeometry(1.2, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf2d2bd, // Skin tone
      shininess: 10, // Reduced from 30 to 20 for less shine
      specular: 0x333333 // Darker specular for less harsh highlights
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    headGroup.add(head);
    
    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const eyeWhiteMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 100
    });
    
    // Left eye
    const leftEye = new THREE.Group();
    const leftEyeWhite = new THREE.Mesh(eyeGeometry, eyeWhiteMaterial);
    leftEye.position.set(-0.5, 0.3, 1);
    leftEyeWhite.scale.set(1, 1, 0.5);
    leftEye.add(leftEyeWhite);
    
    // Iris/pupil for left eye - more detailed with gradient texture
    const irisSize = 0.12;
    const leftIrisGeometry = new THREE.SphereGeometry(irisSize, 32, 32);
    
    // Create iris texture with radial gradient
    const irisCanvas = document.createElement('canvas');
    irisCanvas.width = 256; // Higher resolution
    irisCanvas.height = 256;
    const irisCtx = irisCanvas.getContext('2d');
    
    // Background fill
    irisCtx.fillStyle = '#224422';
    irisCtx.fillRect(0, 0, 256, 256);
    
    // Main iris gradient
    const gradient = irisCtx.createRadialGradient(128, 128, 20, 128, 128, 128);
    gradient.addColorStop(0, '#000000'); // Pupil center
    gradient.addColorStop(0.2, '#113322'); // Inner iris - more natural green-brown
    gradient.addColorStop(0.7, '#336644'); // Mid iris
    gradient.addColorStop(1, '#224422'); // Outer iris
    irisCtx.fillStyle = gradient;
    irisCtx.beginPath();
    irisCtx.arc(128, 128, 128, 0, Math.PI * 2);
    irisCtx.fill();
    
    // Add radial lines for iris texture
    irisCtx.strokeStyle = 'rgba(0, 40, 20, 0.3)';
    irisCtx.lineWidth = 1;
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2;
      irisCtx.beginPath();
      irisCtx.moveTo(128, 128);
      irisCtx.lineTo(128 + Math.cos(angle) * 128, 128 + Math.sin(angle) * 128);
      irisCtx.stroke();
    }
    
    // Add pupil
    irisCtx.fillStyle = '#000000';
    irisCtx.beginPath();
    irisCtx.arc(128, 128, 40, 0, Math.PI * 2);
    irisCtx.fill();
    
    // Add highlight/reflection
    irisCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    irisCtx.beginPath();
    irisCtx.arc(158, 98, 20, 0, Math.PI * 2); // Top-right highlight
    irisCtx.fill();
    
    irisCtx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    irisCtx.beginPath();
    irisCtx.arc(98, 158, 10, 0, Math.PI * 2); // Bottom-left smaller highlight
    irisCtx.fill();
    
    const irisTexture = new THREE.CanvasTexture(irisCanvas);
    const irisMaterial = new THREE.MeshPhongMaterial({ 
      map: irisTexture,
      shininess: 90,
      transparent: true
    });
    
    const leftIris = new THREE.Mesh(leftIrisGeometry, irisMaterial);
    leftIris.position.set(0, 0, 0.15);
    leftEye.add(leftIris);
    leftEyeRef.current = leftIris;
    
    // Right eye
    const rightEye = new THREE.Group();
    const rightEyeWhite = new THREE.Mesh(eyeGeometry, eyeWhiteMaterial);
    rightEye.position.set(0.5, 0.3, 1);
    rightEyeWhite.scale.set(1, 1, 0.5);
    rightEye.add(rightEyeWhite);
    
    // Iris/pupil for right eye
    const rightIris = new THREE.Mesh(leftIrisGeometry, irisMaterial);
    rightIris.position.set(0, 0, 0.15);
    rightEye.add(rightIris);
    rightEyeRef.current = rightIris;
    
    // Add eyes to head
    headGroup.add(leftEye);
    headGroup.add(rightEye);
    
    // Nose
    const noseGeometry = new THREE.ConeGeometry(0.2, 0.5, 32);
    const noseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf2d2bd,
    });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 0, 1.1);
    nose.rotation.x = -Math.PI / 2;
    headGroup.add(nose);
    
    // Mouth - modified to be a happy smile
    const mouthCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(-0.5, -0.5, 1),
      new THREE.Vector3(-0.25, -0.7, 1.1),
      new THREE.Vector3(0.25, -0.7, 1.1),
      new THREE.Vector3(0.5, -0.5, 1)
    );
    
    const mouthPoints = mouthCurve.getPoints(40);
    const mouthGeometry = new THREE.BufferGeometry().setFromPoints(mouthPoints);
    const mouthMaterial = new THREE.LineBasicMaterial({ 
      color: 0x993333,
      linewidth: 20
    });
    const mouth = new THREE.Line(mouthGeometry, mouthMaterial);
    headGroup.add(mouth); // Add mouth to head
    

    
    // Add hair strands for more detail
    // Create a curve for the first hair strand
    const hairStrand1Points = [
      new THREE.Vector3(0.3, 0.8, 0.5), 
      new THREE.Vector3(0.5, 1.2, 0.3),
      new THREE.Vector3(0.7, 1.0, 0),
      new THREE.Vector3(0.9, 0.7, -0.3)
    ];
    const hairStrand1Curve = new THREE.CatmullRomCurve3(hairStrand1Points);
    const hairStrand1Geometry = new THREE.TubeGeometry(hairStrand1Curve, 32, 0.05, 8, false);
    const hairMaterial = new THREE.MeshPhongMaterial({
      color: 0x2a1a0a, // Dark brown hair color
      shininess: 30
    });
    const hairStrand1 = new THREE.Mesh(hairStrand1Geometry, hairMaterial);
    headGroup.add(hairStrand1);
    
    // Create a curve for the second hair strand
    const hairStrand2Points = [
      new THREE.Vector3(-0.3, 0.8, 0.5),
      new THREE.Vector3(-0.4, 1.1, 0.3),
      new THREE.Vector3(-0.6, 1.2, 0),
      new THREE.Vector3(-0.7, 0.9, -0.3)
    ];
    const hairStrand2Curve = new THREE.CatmullRomCurve3(hairStrand2Points);
    const hairStrand2Geometry = new THREE.TubeGeometry(hairStrand2Curve, 32, 0.05, 8, false);
    const hairStrand2 = new THREE.Mesh(hairStrand2Geometry, hairMaterial);
    headGroup.add(hairStrand2);
    
    // Add the head group to the scene
    scene.add(headGroup);
    
    // Handle mouse movement for eye tracking - more responsive now
    const handleMouseMove = (event) => {
      if (!leftEyeRef.current || !rightEyeRef.current || !headGroupRef.current) return;
      
      // Get canvas position
      const rect = canvas.getBoundingClientRect();
      const canvasCenterX = rect.left + rect.width / 2;
      const canvasCenterY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to canvas center
      const mouseX = event.clientX - canvasCenterX;
      const mouseY = event.clientY - canvasCenterY;
      
      // Calculate normalized direction vector
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
      
      // Direction vector for eyes to follow cursor
      // NOTE: For eye tracking, we need positive X (not negative) to look in the correct direction
      // When the mouse is on the right, eyes should look to the right
      const dirX = mouseX / (distance + 100); // Positive for correct left-right tracking
      const dirY = -mouseY / (distance + 100); // Negative to reverse up-down direction
      
      // Increase eye movement range for more dramatic effect
      const maxEyeOffset = 0.12; // Doubled for more dramatic eye movement
      const eyeOffsetX = dirX * maxEyeOffset;
      const eyeOffsetY = dirY * maxEyeOffset;
      
      // Apply to irises with smooth animation
      const currentXLeft = leftEyeRef.current.position.x;
      const currentYLeft = leftEyeRef.current.position.y;
      const currentXRight = rightEyeRef.current.position.x;
      const currentYRight = rightEyeRef.current.position.y;
      
      // Smooth interpolation (easing)
      const easeFactor = 0.15; // Slightly faster for more responsive movement
      const newXLeft = currentXLeft + (eyeOffsetX - currentXLeft) * easeFactor;
      const newYLeft = currentYLeft + (eyeOffsetY - currentYLeft) * easeFactor;
      const newXRight = currentXRight + (eyeOffsetX - currentXRight) * easeFactor;
      const newYRight = currentYRight + (eyeOffsetY - currentYRight) * easeFactor;
      
      // Apply to both eyes with slight variation for more natural look
      leftEyeRef.current.position.x = newXLeft;
      leftEyeRef.current.position.y = newYLeft;
      
      rightEyeRef.current.position.x = newXRight;
      rightEyeRef.current.position.y = newYRight;
      
      // Add subtle head movement to follow cursor
      if (headGroupRef.current) {
        // Calculate head rotation from mouse position
        // Reduce rotation amount for subtle effect
        const headRotationY = dirX * 0.15; // Horizontal rotation
        const headRotationX = -dirY * 0.1; // Vertical rotation (inverted)
        
        // Apply smooth interpolation to head rotation
        const currentHeadRotationX = headGroupRef.current.rotation.x;
        const currentHeadRotationY = headGroupRef.current.rotation.y;
        
        headGroupRef.current.rotation.y = currentHeadRotationY + (headRotationY - currentHeadRotationY) * 0.05;
        headGroupRef.current.rotation.x = currentHeadRotationX + (headRotationX - currentHeadRotationX) * 0.05;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    function handleResize() {
      const newSize = canvas.parentElement.clientWidth;
      camera.aspect = 1; // Keep square aspect ratio
      camera.updateProjectionMatrix();
      renderer.setSize(newSize, newSize);
    }
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Clean up Three.js resources
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material.map) object.material.map.dispose();
          object.material.dispose();
        }
      });
      
      renderer.dispose();
      controls.dispose();
    };
  }, [showCanvas]);
  
  return (
    <Container id="about" className="py-5">
      <Row className="align-items-center">
        <Col md={4} className="mb-4 mb-md-0 text-center">
          <div style={{ 
            width: '100%',
            maxWidth: '300px',
            aspectRatio: '1/1',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {!showCanvas ? (
              <img 
                src="/aboutme/images/argha.jpeg" 
                alt="Profile" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '4px',
                  cursor: 'pointer' 
                }}
                onDoubleClick={() => setShowCanvas(true)}
              />
            ) : (
              <canvas 
                ref={canvasRef} 
                style={{ 
                  borderRadius: '4px',
                  width: '100%',
                  height: '100%'
                }}
                onDoubleClick={() => setShowCanvas(false)}
              />
            )}
          </div>
        </Col>
        <Col md={8}>
          <h2 className="mb-3">Argha Chakraborty</h2>
          <div className="mb-3" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            background: '#a1a1a1', 
            padding: '4px 12px',
            borderRadius: '20px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <i className="bi bi-envelope-fill me-2" style={{ color: 'white' }}></i>
            <a href="mailto:rghchaks73@gmail.com" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              fontWeight: '500', 
              letterSpacing: '0.5px' 
            }}>
              rghchaks73@gmail.com
            </a>
          </div>
          <p className="lead">
          Shaders | 3D Rendering | Physics Based Animation | Image & Mesh Processing | Vision</p>
          <p>
              I operate at the crossroads of <span className="fw-bold text-primary">engineering</span> and <span className="fw-bold text-primary">research</span> to push the boundaries of visual computing combining expertise in 
              3D rendering, physics-based animation, and image processing. Whether it's accelerating 
              real-time graphics performance or driving innovation in machine learning-driven image analysis, I'm passionate about 
              transforming cutting-edge theory into impactful, real-world solutions.
          </p>
          <p>
              As a <span className="fw-bold text-primary">graphics engineer</span> with a strong affinity for research, I have extensive experience in standalone or
              web integrations and development, bridging the gap between backend systems and advanced visualization techniques.
          </p>
          <p>
              I'm also eager to pursue further research in machine learning within the fields of <span className="fw-bold text-primary">graphics</span> and the <span className="fw-bold text-primary">medical domain</span>, exploring new frontiers where AI can revolutionize visual computing and healthcare.
          </p>
          <p>
              Outside the lab, you'll find me indulging my creative passions—playing classical guitar, practicing piano, or honing my fine-art skills. 
              These artistic pursuits keep me curious and imaginative, fueling my enthusiasm for the latest developments in computer graphics, computer vision, and AI. 
              I avidly follow top-tier conferences like SIGGRAPH, CVPR, ICML, I3D, AAAI and journals, to stay ahead of the curve, and I'm always eager to collaborate on forward-thinking projects that merge engineering and research in the world of visual computing.
          </p>
          <div className="mt-3 d-flex gap-2 flex-wrap">
            <a href="/aboutme/ArghaApr.pdf" download className="btn btn-outline-dark flex-grow-1 flex-md-grow-0">
              <FaDownload className="me-2" /> Download Resume
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({ url: 'https://calendly.com/rghchaks73' });
                }
              }}
              className="btn btn-primary flex-grow-1 flex-md-grow-0"
            >
              Schedule Meeting
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 