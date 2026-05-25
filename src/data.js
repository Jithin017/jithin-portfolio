import profilePhoto from './profile.jpg'
import resumePdf from './JITHIN_SHAJI_ROBOTICS_ENGINNER.pdf'
export const DATA = {
  name: 'JITHIN SHAJI',
  title: 'Autonomous Robotics & AI Engineer',
  tagline:
    'Robotics & Automation Engineering student specializing in ROS 2, autonomous navigation, sensor fusion, embedded AI, and robotic manufacturing. System Integration Lead of Team Equinox, achieving All India Rank 7 in aBAJA SAEINDIA 2025.',
  location: 'Kerala, India',
  email: 'jithin.shaji.ec@gmail.com',
  github: 'https://github.com/jithin017',
  linkedin: 'https://www.linkedin.com/in/jithin-shaji-525255245',
  resumeUrl: resumePdf,
  photoUrl: profilePhoto,

  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ],

  about:
    'B.Tech Robotics & Automation Engineering student at Saintgits College of Engineering with hands-on experience in autonomous systems, ROS 2, sensor fusion, embedded systems, computer vision, and robotic manufacturing. Experienced in building real-world robotics projects including autonomous vehicles, hospital assistive robots, swarm robots, and FreeCAD-based robotic toolpath workflows.',

  education: [
    { degree: 'B.Tech in Robotics & Automation Engineering', org: 'Saintgits College of Engineering, Kottayam', meta: 'CGPA: 7.44 · Expected Graduation: 2026' },
    { degree: 'Higher Secondary Education (XII)', org: 'Good Shepherd Public School', meta: 'Percent: 85% · 2022' },
    { degree: 'Secondary Education (X)', org: 'Good Shepherd Public School', meta: 'Percent: 85% · 2020' }
  ],

  experience: [
    {
      role: 'Robot / Motion Control Programming Intern',
      org: 'Interface Design Associates Pvt. Ltd., Navi Mumbai',
      period: 'Jan 2026 – Apr 2026',
      points: [
        'Compiled and customized FreeCAD by developing UI and backend modules for a robotics/CNC workbench.',
        'Implemented coordinate transformation and toolpath computation algorithms converting STL/G-code into robot motion commands.',
        'Operated DED 5-axis additive manufacturing machine and validated robotic 3D-printing trajectories using ROS-based simulation pipelines.'
      ],
      tags: ['FreeCAD', 'Python', 'ROS', '5-Axis DED', 'Toolpath Generation', 'Robotic Manufacturing']
    },
    {
      role: 'System Integration Lead',
      org: 'Team Equinox — aBAJA SAEINDIA 2025',
      period: 'Mar 2024 – Dec 2025',
      points: [
        'Led a 30-member team to All India Rank 7 in aBAJA SAEINDIA 2025.',
        'Architected a Level-2 autonomous buggy integrating perception, path planning, CAN communication, and real-time control on NVIDIA Jetson Orin Nano.',
        'Implemented EKF-based LIDAR/IMU/radar fusion, emergency braking, safety overrides, PID control, Stanley controller, and PyTorch traffic-light detection.'
      ],
      tags: ['ROS 2', 'Jetson Orin Nano', 'CAN', 'EKF', 'PyTorch', 'PID', 'Stanley Controller']
    },
    {
      role: 'Volunteer Mentor — Autonomous Systems',
      org: 'Saintgits College of Engineering',
      period: 'Dec 2025 – Present',
      points: [
        'Providing technical guidance on ROS 2 integration, autonomous navigation, and perception pipeline development for the current competition team.'
      ],
      tags: ['Mentoring', 'ROS 2', 'Autonomous Navigation']
    },
    {
      role: 'Industrial Robot Programming Intern',
      org: 'PSG – FANUC Centre for Advanced CNC & Robotics',
      period: 'May 2024 – Jun 2024',
      points: [
        'Programmed FANUC industrial robots using Teach Pendant for manufacturing automation.',
        'Optimized pick-and-place routines, reducing cycle time by 12% with ±0.2 mm repeatability.'
      ],
      tags: ['FANUC', 'Teach Pendant', 'Industrial Robotics']
    },
    {
      role: 'Embedded Systems & Robotics Intern',
      org: 'Techmaghi',
      period: 'Jun 2024 – Jul 2024',
      points: [
        'Designed ROS 2 sensor fusion node combining LIDAR and IMU to generate 3-D occupancy maps for path planning.',
        'Built OpenCV-based face recognition and real-time image processing pipelines.'
      ],
      tags: ['ROS 2', 'LIDAR', 'IMU', 'OpenCV', 'Python']
    },
    {
      role: 'AI/ML Intern',
      org: 'Innovate Intern',
      period: 'Jan 2024 – Feb 2024',
      points: [
        'Implemented OpenCV computer vision and automated logging pipelines for real-time attendance tracking.'
      ],
      tags: ['OpenCV', 'Flask', 'Python', 'Computer Vision']
    }
  ],

  projects: [
    {
      title: 'Autonomous Competition Vehicle — aBAJA SAEINDIA 2025',
      year: '2025',
      summary: 'Level-2 autonomous buggy with perception, path planning, CAN communication, and real-time control on NVIDIA Jetson Orin Nano.',
      bullets: [
        'Implemented EKF-based LIDAR/IMU/radar fusion for obstacle detection and emergency braking.',
        'Built custom PyTorch traffic-light detection models using self-labelled datasets.',
        'Used PID and Stanley controllers for path tracking with safety override modes.'
      ],
      tech: ['Jetson Orin Nano', 'ROS 2', 'CAN', 'EKF', 'PyTorch', 'PID', 'Stanley Controller'],
      links: { repo: '' }
    },
    {
      title: 'B.R.A.V.O — Biomedical Hospital Assistive Robot',
      year: '2025',
      summary: 'Semi-autonomous biomedical robot for patient vital monitoring, smart triage, and indoor hospital navigation.',
      bullets: [
        'Integrated ROS 2, Raspberry Pi, LIDAR, IMU, and mecanum-wheel drive.',
        'Implemented indoor navigation and room-specific smart actions.',
        'Designed to reduce healthcare worker exposure and improve triage efficiency.'
      ],
      tech: ['ROS 2', 'Raspberry Pi', 'LIDAR', 'IMU', 'Mecanum Drive', 'SLAM']
    },
    {
      title: '5-Axis Robotic Manufacturing Workbench',
      year: '2026',
      summary: 'FreeCAD-based robotics/CNC workbench for toolpath generation and robotic motion command conversion.',
      bullets: [
        'Developed UI and backend modules in FreeCAD for robotic manufacturing workflow.',
        'Converted STL/G-code data into robot motion commands using coordinate transformation logic.',
        'Validated robotic 3D-printing trajectories using ROS-based simulation pipelines.'
      ],
      tech: ['FreeCAD', 'Python', 'ROS', 'G-code', 'STL', '5-Axis DED', 'Motion Planning']
    },
    {
      title: 'Swarm Robotics — Multi-Robot Warehouse Automation',
      year: '2025',
      summary: 'Decentralized ROS 2 swarm robotics system for warehouse coordination and distributed obstacle avoidance.',
      bullets: [
        'Implemented ROS 2 communication for multi-robot coordination.',
        'Worked on formation control and decentralized decision-making.',
        'Validated scalability and fault tolerance using Gazebo simulations.'
      ],
      tech: ['ROS 2', 'Gazebo', 'C++', 'Python', 'Swarm Robotics']
    },
    {
      title: 'VANIS Robot — Autonomous Detection & Evasion',
      year: '2024',
      summary: 'Raspberry Pi robot using OpenCV face detection and sensor-based hiding behavior for hackathon demonstration.',
      bullets: [
        'Achieved 92% face detection accuracy with average latency of 120 ms/frame.',
        'Integrated IP camera, ultrasonic sensor, and IR sensors.',
        'Implemented closed-loop perception-action logic for autonomous hiding behavior.'
      ],
      tech: ['Raspberry Pi', 'OpenCV', 'HOG', 'Ultrasonic', 'IR Sensor']
    },
    {
      title: 'Face Recognition Attendance System',
      year: '2024',
      summary: 'Flask-based attendance system using real-time computer vision and automated attendance logging.',
      bullets: [
        'Built real-time face recognition pipeline using OpenCV and Python.',
        'Reduced recognition latency while maintaining reliable detection accuracy.',
        'Created GUI and automated attendance logging workflow.'
      ],
      tech: ['Python', 'Flask', 'OpenCV', 'Face Recognition']
    }
  ],

  skills: [
    { label: 'Programming & Core CS', items: ['Python', 'C++', 'Bash/Linux', 'Data Structures', 'OOP', 'Git/GitHub'] },
    { label: 'Robotics & Navigation', items: ['ROS 2', 'ROS Noetic', 'Nav2', 'SLAM', 'Gazebo', 'Path Planning', 'PID Control', 'Stanley Controller', 'EKF Sensor Fusion', 'URDF/XACRO'] },
    { label: 'Computer Vision & AI', items: ['OpenCV', 'PyTorch', 'Object Detection', 'Classification', 'HOG Descriptor', 'Dataset Creation', 'Data Labelling', 'Weights & Biases'] },
    { label: 'Embedded & Hardware', items: ['NVIDIA Jetson Orin Nano', 'Raspberry Pi', 'ESP32', 'Arduino', 'LIDAR', 'IMU', 'Radar', 'CAN Bus', 'UART', 'I2C'] },
    { label: 'Industrial Robotics & Manufacturing', items: ['FANUC Teach Pendant', 'Pick-and-Place Automation', 'DED 5-Axis Machine', 'Robot Motion Control', 'Robotic 3D Printing'] },
    { label: 'CAD/CAM & Tools', items: ['FreeCAD Custom Workbench', 'SolidWorks', 'Fusion 360', 'AutoCAD', 'KiCad', 'Toolpath Generation', 'STL/G-code Processing'] }
  ],

  achievements: [
    'All India Rank 7 — aBAJA SAEINDIA National Autonomous Vehicle Competition 2025',
    'System Integration Lead — Team Equinox, 30-member autonomous vehicle team',
    'Venue Coordination Head — 11th National Level Technical Project Exhibition “Srishti 2025” with 300+ teams',
    'NPTEL: Solid Mechanics (Elite) — 2024',
    'Google Project Management — Coursera, 2024',
    'Fundamentals of Robotics & Industrial Automation — L&T EduTech / Coursera, 2024',
    'ROS 2 Training — PSG–FANUC Centre for Advanced CNC and Robotics',
    'Member — SAEINDIA, IEEE Student Branch, and IETE'
  ]
}



// export const DATA = {
//   name: 'JITHIN SHAJI',
//   title: 'Robotics & Automation Engineer',
//   tagline:
//     'Results-driven R&A student with hands-on experience in autonomous navigation, real-time control, and CAN-based systems. System Integration Lead @ Team Equinox (aBAJA SAEINDIA 2025 – AIR 7).',
//   location: 'Kerala, India',
//   email: 'jithinshaji1st@gmail.com',
//   github: 'https://github.com/jithin017',
//   linkedin: 'https://www.linkedin.com/in/jithin-shaji-525255245',
//   // Put your PDF at src/JITHIN_SHAJI_ROBOTICS_ENGINNER.pdf (or adjust path)
//   resumeUrl: './JITHIN_SHAJI_ROBOTICS_ENGINNER.pdf',
//   nav: [
//     { id: 'about', label: 'About' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'skills', label: 'Skills' },
//     { id: 'achievements', label: 'Achievements' },
//     { id: 'contact', label: 'Contact' }
//   ],
//   about:
//     'Robotics & Automation Engineering Graduate (CGPA 7.44) at Saintgits College of Engineering. Passionate about autonomous systems, motion control, and practical, human-centric robotics. Experienced with ROS/ROS 2, perception, PID/Stanley control, and multi-ECU CAN architectures.',
//   education: [
//     { degree: 'B.Tech in Robotics & Automation', org: 'Saintgits College of Engineering, Kottayam', meta: 'CGPA: 7.3 · Expected Graduation: 2026' },
//     { degree: 'Higher Secondary Education (XII)', org: 'Good Shepherd Public School', meta: 'Percent: 85% · 2022' },
//     { degree: 'Secondary Education (X)', org: 'Good Shepherd Public School', meta: 'Percent: 85% · 2020' }
//   ],
//   experience: [
//     {
//       role: 'System Integration Lead',
//       org: 'Team Equinox (aBAJA SAEINDIA 2025)',
//       period: 'Mar 2024 – Present',
//       points: [
//         'Led development of Level-2 autonomous buggy; integrated sensors, path planning, and CAN-based comms.',
//         'Implemented PID & Stanley control for navigation; ensured fail-safe and manual override modes.',
//         'Owned electrical wiring, power distribution, sensor interfacing, and comms reliability.'
//       ],
//       tags: ['ROS/ROS2', 'CAN (MCP2515)', 'PID', 'Stanley', 'Python', 'C++']
//     },
//     {
//       role: 'Robot / Motion Control Programming Intern',
//       org: 'Interface Design Associates Pvt. Ltd.',
//       period: 'Jan 2026 – Apr 2026',
//       points: [
//         'Customized FreeCAD by developing UI and backend modules for robotics/CNC workflow.',
//         'Implemented toolpath and coordinate computation algorithms for robotic motion commands.',
//         'Built ROS-based simulation pipelines to validate robotic 3D-printing trajectories.'
//       ],
//     tags: ['FreeCAD', 'ROS', 'Python', 'Toolpath', 'Robotic Manufacturing', 'Motion Control', 'CNC', '3D Printing']
//     },
//     {
//       role: 'Industrial Robot Programming Intern',
//       org: 'PSG – FANUC Centre for Advanced CNC & Robotics',
//       period: 'May 2024 – Jun 2024',
//       points: ['Programmed FANUC industrial robots; motion control & automation ops.'],
//       tags: ['FANUC', 'Industrial Robotics']
//     },
//     {
//       role: 'Embedded Systems & Robotics Intern',
//       org: 'Techmaghi',
//       period: 'Jun 2024 – Jul 2024',
//       points: ['Built a mobile robot with real-time motion control and obstacle detection.'],
//       tags: ['Embedded', 'ESP32', 'Arduino']
//     },
//     {
//       role: 'AI/ML Intern',
//       org: 'Innovate Intern',
//       period: 'Jan 2024 – Feb 2024',
//       points: ['Flask-based Face Recognition Attendance System with GUI.'],
//       tags: ['OpenCV', 'Flask', 'Python']
//     },
//     {
//       role: 'ROS 2 Training Participant',
//       org: 'PSG – FANUC Centre',
//       period: 'May 2025 – Jun 2025',
//       points: ['ROS 2 fundamentals; nodes, topics; basic robot control apps.'],
//       tags: ['ROS 2']
//     }
//   ],
//   projects: [
//     {
//       title: 'Autonomous BAJA Buggy',
//       year: '2025',
//       summary:
//         'Multi-ECU CAN architecture to toggle manual/autonomous and lateral/longitudinal modes; logs via Kvaser USBcan Light 2xHS.',
//       bullets: [
//         '3-ECU network with debounced switches & state machine.',
//         'Fail-safe manual override & watchdogs.',
//         'Python logging & CAN analysis.'
//       ],
//       tech: ['Arduino','MCP2515','CAN','C++','Python'],
//       links: { repo: '' }
//     },
//     {
//       title: 'B.R.A.V.O — Hospital Assistive Robot',
//       year: '2025 (completed)',
//       summary:
//         'ROS 2–driven assistant for smart triage & indoor navigation (LIDAR+IMU+mecanum).',
//       bullets: [
//         'Raspberry Pi integration; sensor fusion & decision-making.',
//         'Room-specific actions & path execution.'
//       ],
//       tech: ['ROS 2','Raspberry Pi','LIDAR','IMU']
//     },
//     {
//       title: 'VANIS Robot (Hack for Nothing)',
//       year: '2025',
//       summary:
//         'Pi-based face detection and “hide” behavior with IP camera, ultrasonic & IR.',
//       bullets: ['OpenCV detection triggers hiding; shadow detection trials.'],
//       tech: ['Raspberry Pi','OpenCV','Ultrasonic','IR']
//     },
//     {
//       title: 'Swarm Robot (ROS 2)',
//       year: '2025 (completed)',
//       summary:
//         'Decentralized multi-robot coordination for warehouse automation.',
//       bullets: ['ROS 2 inter-robot comms; Gazebo sims; initial HW trials.'],
//       tech: ['ROS 2','Gazebo','C++','Python']
//     },
//     {
//       title: 'Smart Traffic & Parking (Revathon)',
//       year: '2024',
//       summary:
//         'Arduino traffic light + automated parking using ultrasonic and servos.',
//       bullets: ['Led design & build; precise control logic; public demo.'],
//       tech: ['Arduino','Ultrasonic','Servo']
//     }
//   ],
//   skills: [
//     { label: 'Languages & Core', items: ['Python','C++','Linux','Git'] },
//     { label: 'Robotics Software', items: ['ROS/ROS 2','Gazebo','Navigation','SLAM','PID','URDF/XACRO'] },
//     { label: 'Hardware & Comms', items: ['Raspberry Pi','ESP32','Arduino','LIDAR','IMU','CAN','UART','I2C'] },
//     { label: 'CV & AI', items: ['OpenCV','ML Concepts','Flask','Face Recognition'] },
//     { label: 'CAD & EDA', items: ['SolidWorks','AutoCAD','Fusion 360','KiCad'] }
//   ],
//   achievements: [
//     'BAJA SAEINDIA 2025: All India Rank 7 – System Integration Lead, Team Equinox',
//     'Venue Coordination Head – Srishti 2025 (National Project Expo)',
//     'Sub-Head – County Cricket @ Nakshatra 2025',
//     'NPTEL: Solid Mechanics (Elite) — 2024',
//     'Google Project Management (Coursera) — 2024',
//     'L&T Edu Tech: Fundamentals on Robotics & Industrial Automation — 2024'
//   ]
// }

