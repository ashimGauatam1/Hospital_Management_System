const staffs = [
  {
    name: 'डॉ. सुजन राउत',
    department: 'Cardiology',
    qualification: 'MBBS, MD',
    experience: '10 years',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'डॉ. सृष्टि शर्मा',
    department: 'Neurology',
    qualification: 'MBBS, DM',
    experience: '8 years',
    image: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    name: 'डॉ. अर्जुन थापा',
    department: 'Orthopedics',
    qualification: 'MBBS, MS',
    experience: '12 years',
    image: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    name: 'डॉ. कविता मैनाली',
    department: 'Pediatrics',
    qualification: 'MBBS, DCH',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'डॉ. राजेश महतो',
    department: 'General Medicine',
    qualification: 'MBBS, MD',
    experience: '15 years',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'डॉ. अनिता परियार',
    department: 'Gynecology',
    qualification: 'MBBS, MS',
    experience: '9 years',
    image: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name: 'डॉ. चन्द्रकान्त पाण्डे',
    department: 'Surgery',
    qualification: 'MBBS, FRCS',
    experience: '14 years',
    image: 'https://randomuser.me/api/portraits/men/4.jpg'
  },
  {
    name: 'डॉ. माया यादव',
    department: 'Anesthesia',
    qualification: 'MBBS, DA',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'डॉ. मिलन श्रेष्ठ',
    department: 'Radiology',
    qualification: 'MBBS, DMRD',
    experience: '11 years',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    name: 'डॉ. रेनु काफ्ले',
    department: 'Internal Medicine',
    qualification: 'MBBS, MD',
    experience: '10 years',
    image: 'https://randomuser.me/api/portraits/women/5.jpg'
  },
  {
    name: 'नर्स मीरा राई',
    department: 'General Ward',
    qualification: 'BSc Nursing',
    experience: '5 years',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    name: 'नर्स संगीता जोशी',
    department: 'Emergency',
    qualification: 'BSc Nursing',
    experience: '4 years',
    image: 'https://randomuser.me/api/portraits/women/7.jpg'
  },
  {
    name: 'नर्स आरती केसी',
    department: 'ICU',
    qualification: 'BSc Nursing',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
  {
    name: 'नर्स लक्ष्मी दाहाल',
    department: 'Pediatrics',
    qualification: 'BSc Nursing',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/women/9.jpg'
  },
  {
    name: 'नर्स प्रीति बस्नेत',
    department: 'Gynecology',
    qualification: 'BSc Nursing',
    experience: '3 years',
    image: 'https://randomuser.me/api/portraits/women/10.jpg'
  },
  {
    name: 'नर्स रचना बम',
    department: 'Orthopedics',
    qualification: 'BSc Nursing',
    experience: '5 years',
    image: 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    name: 'नर्स स्वाती चौधरी',
    department: 'Surgery',
    qualification: 'BSc Nursing',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/12.jpg'
  },
  {
    name: 'नर्स सुमिता गिरी',
    department: 'Anesthesia',
    qualification: 'BSc Nursing',
    experience: '4 years',
    image: 'https://randomuser.me/api/portraits/women/13.jpg'
  },
  {
    name: 'नर्स सोनी भट्ट',
    department: 'Internal Medicine',
    qualification: 'BSc Nursing',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/women/14.jpg'
  },
  {
    name: 'नर्स तपस्या सन्दर्भ',
    department: 'Radiology',
    qualification: 'BSc Nursing',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/15.jpg'
  },
  {
    name: 'नर्स उमा ढकाल',
    department: 'General Ward',
    qualification: 'BSc Nursing',
    experience: '5 years',
    image: 'https://randomuser.me/api/portraits/women/16.jpg'
  },
  {
    name: 'नर्स लक्ष्मी प्रधान',
    department: 'Emergency',
    qualification: 'BSc Nursing',
    experience: '4 years',
    image: 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    name: 'नर्स रिमा शर्मा',
    department: 'ICU',
    qualification: 'BSc Nursing',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/18.jpg'
  },
  {
    name: 'नर्स दिव्या आचार्य',
    department: 'Pediatrics',
    qualification: 'BSc Nursing',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/women/19.jpg'
  },
  {
    name: 'नर्स शारदा रानाभाट',
    department: 'Gynecology',
    qualification: 'BSc Nursing',
    experience: '3 years',
    image: 'https://randomuser.me/api/portraits/women/20.jpg'
  },
  {
    name: 'नर्स जया ठक्कर',
    department: 'Orthopedics',
    qualification: 'BSc Nursing',
    experience: '5 years',
    image: 'https://randomuser.me/api/portraits/women/21.jpg'
  },
  {
    name: 'नर्स सविता गुप्ता',
    department: 'Surgery',
    qualification: 'BSc Nursing',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: 'नर्स ममता राज',
    department: 'Anesthesia',
    qualification: 'BSc Nursing',
    experience: '4 years',
    image: 'https://randomuser.me/api/portraits/women/23.jpg'
  },
  {
    name: 'नर्स नीतू शर्मा',
    department: 'Internal Medicine',
    qualification: 'BSc Nursing',
    experience: '7 years',
    image: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'नर्स मन्जु मल्ल',
    department: 'Radiology',
    qualification: 'BSc Nursing',
    experience: '6 years',
    image: 'https://randomuser.me/api/portraits/women/25.jpg'
  }
];

export default staffs;
