export const DATA = {
  name: 'JITHIN SHAJI',
  title: 'Robotics & Automation Engineer',
  tagline:
    'Results-driven R&A student with hands-on experience in autonomous navigation, real-time control, and CAN-based systems. System Integration Lead @ Team Equinox (aBAJA SAEINDIA 2025 – AIR 7).',
  location: 'Kerala, India',
  email: 'jithinshaji1st@gmail.com',
  github: 'https://github.com/jithin017',
  linkedin: 'https://www.linkedin.com/in/jithin-shaji-525255245',
  // Put your PDF at src/Jithin_Shaji_Resume.pdf (or adjust path)
  resumeUrl: './Jithin_Shaji_Resume.pdf',
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ],
  about:
    'Final-year Robotics & Automation Engineering student (CGPA 7.3) at Saintgits College of Engineering. Passionate about autonomous systems, motion control, and practical, human-centric robotics. Experienced with ROS/ROS 2, perception, PID/Stanley control, and multi-ECU CAN architectures.',
  education: [
    { degree: 'B.Tech in Robotics & Automation', org: 'Saintgits College of Engineering, Kottayam', meta: 'CGPA: 7.3 · Expected Graduation: 2026' },
    { degree: 'Higher Secondary Education (XII)', org: 'Good Shepherd Public School', meta: 'Percent: 85% · 2022' },
    { degree: 'Secondary Education (X)', org: 'Good Shepherd Public School', meta: 'Percent: 85% · 2020' }
  ],
  experience: [
    {
      role: 'System Integration Lead',
      org: 'Team Equinox (aBAJA SAEINDIA 2025)',
      period: 'Mar 2024 – Present',
      points: [
        'Led development of Level-2 autonomous buggy; integrated sensors, path planning, and CAN-based comms.',
        'Implemented PID & Stanley control for navigation; ensured fail-safe and manual override modes.',
        'Owned electrical wiring, power distribution, sensor interfacing, and comms reliability.'
      ],
      tags: ['ROS/ROS2', 'CAN (MCP2515)', 'PID', 'Stanley', 'Python', 'C++']
    },
    {
      role: 'Industrial Robot Programming Intern',
      org: 'PSG – FANUC Centre for Advanced CNC & Robotics',
      period: 'May 2024 – Jun 2024',
      points: ['Programmed FANUC industrial robots; motion control & automation ops.'],
      tags: ['FANUC', 'Industrial Robotics']
    },
    {
      role: 'Embedded Systems & Robotics Intern',
      org: 'Techmaghi',
      period: 'Jun 2024 – Jul 2024',
      points: ['Built a mobile robot with real-time motion control and obstacle detection.'],
      tags: ['Embedded', 'ESP32', 'Arduino']
    },
    {
      role: 'AI/ML Intern',
      org: 'Innovate Intern',
      period: 'Jan 2024 – Feb 2024',
      points: ['Flask-based Face Recognition Attendance System with GUI.'],
      tags: ['OpenCV', 'Flask', 'Python']
    },
    {
      role: 'ROS 2 Training Participant',
      org: 'PSG – FANUC Centre',
      period: 'May 2025 – Jun 2025',
      points: ['ROS 2 fundamentals; nodes, topics; basic robot control apps.'],
      tags: ['ROS 2']
    }
  ],
  projects: [
    {
      title: 'Autonomous BAJA Buggy',
      year: '2025',
      summary:
        'Multi-ECU CAN architecture to toggle manual/autonomous and lateral/longitudinal modes; logs via Kvaser USBcan Light 2xHS.',
      bullets: [
        '3-ECU network with debounced switches & state machine.',
        'Fail-safe manual override & watchdogs.',
        'Python logging & CAN analysis.'
      ],
      tech: ['Arduino','MCP2515','CAN','C++','Python'],
      links: { repo: '' }
    },
    {
      title: 'B.R.A.V.O — Hospital Assistive Robot',
      year: '2025 (ongoing)',
      summary:
        'ROS 2–driven assistant for smart triage & indoor navigation (LIDAR+IMU+mecanum).',
      bullets: [
        'Raspberry Pi integration; sensor fusion & decision-making.',
        'Room-specific actions & path execution.'
      ],
      tech: ['ROS 2','Raspberry Pi','LIDAR','IMU']
    },
    {
      title: 'VANIS Robot (Hack for Nothing)',
      year: '2025',
      summary:
        'Pi-based face detection and “hide” behavior with IP camera, ultrasonic & IR.',
      bullets: ['OpenCV detection triggers hiding; shadow detection trials.'],
      tech: ['Raspberry Pi','OpenCV','Ultrasonic','IR']
    },
    {
      title: 'Swarm Robot (ROS 2)',
      year: '2025 (in progress)',
      summary:
        'Decentralized multi-robot coordination for warehouse automation.',
      bullets: ['ROS 2 inter-robot comms; Gazebo sims; initial HW trials.'],
      tech: ['ROS 2','Gazebo','C++','Python']
    },
    {
      title: 'Smart Traffic & Parking (Revathon)',
      year: '2024',
      summary:
        'Arduino traffic light + automated parking using ultrasonic and servos.',
      bullets: ['Led design & build; precise control logic; public demo.'],
      tech: ['Arduino','Ultrasonic','Servo']
    }
  ],
  skills: [
    { label: 'Languages & Core', items: ['Python','C++','Linux','Git'] },
    { label: 'Robotics Software', items: ['ROS/ROS 2','Gazebo','Navigation','SLAM','PID','URDF/XACRO'] },
    { label: 'Hardware & Comms', items: ['Raspberry Pi','ESP32','Arduino','LIDAR','IMU','CAN','UART','I2C'] },
    { label: 'CV & AI', items: ['OpenCV','ML Concepts','Flask','Face Recognition'] },
    { label: 'CAD & EDA', items: ['SolidWorks','AutoCAD','Fusion 360','KiCad'] }
  ],
  achievements: [
    'BAJA SAEINDIA 2025: All India Rank 7 – System Integration Lead, Team Equinox',
    'Venue Coordination Head – Srishti 2025 (National Project Expo)',
    'Sub-Head – County Cricket @ Nakshatra 2025',
    'NPTEL: Solid Mechanics (Elite) — 2024',
    'Google Project Management (Coursera) — 2024',
    'L&T Edu Tech: Fundamentals on Robotics & Industrial Automation — 2024'
  ]
}

