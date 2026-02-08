const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Project = require('./models/Project');
const User = require('./models/User');
const About = require('./models/About');
const Education = require('./models/Education');
const Skill = require('./models/Skill');
const Service = require('./models/Service');
const Youtube = require('./models/Youtube');

dotenv.config();

const aboutData = {
    name: "Sivakumar S",
    degree: "Master of Computer Applications",
    phone: "+91 9345759146",
    email: "sivakumars2118@gmail.com",
    address: "Tamil Nadu, India",
    freelance: "Available",
    bio: "I am a passionate MCA student and Full Stack Developer specialized in building modern, scalable, and user-centric web applications. With expertise in the MERN stack and a keen eye for UI/UX design, I strive to create digital experiences that are both functional and visually stunning.",
    roles: ["Full Stack Developer", "MCA Student", "UI/UX Designer"],
    homeDescription: "I am a passionate MCA student and Full Stack Developer specialized in building modern, scalable, and user-centric web applications.",
    resumeLink: "/resume.pdf"
};

const educationData = [
    {
        year: "2022 - 2024",
        title: "Master of Computer Applications",
        institution: "MCA College",
        desc: "Advanced studies in software engineering, database management, and full-stack development.",
        type: "education",
        order: 1
    },
    {
        year: "2019 - 2022",
        title: "Bachelor of Science in Computer Science",
        institution: "BSc College",
        desc: "Developed a strong foundation in core computer science subjects, algorithms, and data structures.",
        type: "education",
        order: 2
    },
    {
        year: "2024 - Present",
        title: "Freelance Web Developer",
        institution: "Self-Employed",
        desc: "Designing and developing responsive, user-friendly websites for local businesses using React and MERN stack.",
        type: "experience",
        order: 3
    },
    {
        year: "2023 - 2024",
        title: "Full Stack Intern",
        institution: "Tech Startups",
        desc: "Contributed to building high-performance web applications and optimizing database queries.",
        type: "experience",
        order: 4
    }
];

const skillsData = [
    { name: "React.js", level: 90, icon: "/icons/react.png", order: 1 },
    { name: "Node.js", level: 80, icon: "/icons/node.png", order: 2 },
    { name: "MongoDB", level: 75, icon: "/icons/mongo.png", order: 3 },
    { name: "Python", level: 85, icon: "/icons/python.png", order: 4 },
    { name: "Java", level: 80, icon: "/icons/java.png", order: 5 },
    { name: "SQL", level: 85, icon: "/icons/sql.png", order: 6 },
    { name: "PHP", level: 70, icon: "/icons/php.png", order: 7 },
    { name: "C++", level: 75, icon: "/icons/c-.png", order: 8 },
];

const servicesData = [
    {
        title: "UI / UX Design",
        icon: "🎨",
        desc: "Crafting visually stunning and highly intuitive user interfaces with a focus on user experience.",
        order: 1
    },
    {
        title: "MERN Stack",
        icon: "💻",
        desc: "Building scalable and performant full-stack web applications using MongoDB, Express, React, and Node.js.",
        order: 2
    },
    {
        title: "Creative Graphics",
        icon: "🧊",
        desc: "Expertise in creating engaging 2D/3D graphics and digital assets for modern applications.",
        order: 3
    },
];

const youtubeData = [
    {
        title: "Latest Tech Explorations",
        desc: "Diving into web development, UI animations, and modern coding practices.",
        link: "https://www.youtube.com/@SivaKumarCode",
        thumbnail: "/images/profile.png",
        order: 1
    }
];

const projects = [
    {
        title: "CrackersWorld",
        category: "Development",
        description: "E-commerce platform for festival products.",
        image: "/images/profile.png",
        link: "https://github.com/SIVA2118",
        order: 1
    },
    {
        title: "Pac-Man Rebirth",
        category: "Design",
        description: "Classic arcade logic in modern JS.",
        image: "/images/profile.png",
        link: "https://github.com/SIVA2118",
        order: 2
    },
    {
        title: "Canteen System",
        category: "Development",
        description: "Order management for colleges.",
        image: "/images/profile.png",
        link: "https://github.com/SIVA2118",
        order: 3
    },
    {
        title: "Library App",
        category: "Development",
        description: "Resource management system.",
        image: "/images/profile.png",
        link: "https://github.com/SIVA2118",
        order: 4
    },
    {
        title: "Vehicle Rental",
        category: "Design",
        description: "Booking platform for vehicles.",
        image: "/images/profile.png",
        link: "https://github.com/SIVA2118",
        order: 5
    },
    {
        title: "Complaint App",
        category: "Development",
        description: "Student grievance platform.",
        image: "/images/profile.png",
        link: "https://github.com/SIVA2118",
        order: 6
    }
];

const importData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        await Project.deleteMany();
        await User.deleteMany();
        await About.deleteMany();
        await Education.deleteMany();
        await Skill.deleteMany();
        await Service.deleteMany();
        await Youtube.deleteMany();

        await Project.insertMany(projects);
        await About.create(aboutData);
        await Education.insertMany(educationData);
        await Skill.insertMany(skillsData);
        await Service.insertMany(servicesData);
        await Youtube.insertMany(youtubeData);

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('admin123', salt);

        await User.create({
            username: 'admin',
            password: hashedPassword
        });

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
