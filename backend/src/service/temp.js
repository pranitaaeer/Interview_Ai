// temp.js - Sample data for Interview AI testing

 const resume = `
Name: Pranita Aeer
Email: pranita.aeer@example.com
Phone: +91-9876543210

Summary:
Frontend Developer with 2.5 years of experience building scalable web applications using React.js, JavaScript, and TypeScript.

Skills:
- React.js
- JavaScript (ES6+)
- TypeScript
- HTML, CSS, SCSS
- Redux
- REST APIs
- Git & GitHub

Experience:
Frontend Developer at TechNova Pvt Ltd (2022 - Present)
- Built responsive UI components in React
- Improved performance by 35%
- Integrated REST APIs and optimized state management

Projects:
1. Interview Prep AI Tool
2. E-commerce Web App
3. Task Management System
`;

const jobDescription = `
Job Title: Senior Frontend Engineer

We are looking for a Senior Frontend Engineer with strong expertise in React.js and modern JavaScript frameworks.

Requirements:
- 3+ years experience in frontend development
- Strong knowledge of React.js and state management
- Experience with TypeScript
- Understanding of system design and scalable UI architecture
- Experience working with REST APIs

Responsibilities:
- Build high-quality web applications
- Collaborate with backend teams
- Optimize frontend performance
- Write clean and maintainable code
`;

const selfDescription = `
I am a frontend developer with around 2.5 years of experience.
I have strong knowledge of React.js, JavaScript, and building responsive UI.
I have worked on multiple projects including dashboards, e-commerce apps, and AI-based tools.
I enjoy solving UI problems and improving performance of web applications.
I am currently looking to grow as a senior frontend engineer.
`;

module.exports={
    resume,
    selfDescription,
    jobDescription
}

// data: I am a frontend developer with around 2.5 years of experience.I have strong knowledge of React.js, JavaScript, and building responsive UI.I have worked on multiple projects including dashboards, e-commerce apps, and AI-based tools.I enjoy solving UI problems and improving performance of web applications.I am currently looking to grow as a senior frontend engineer. Job Title: Senior Frontend EngineerWe are looking for a Senior Frontend Engineer with strong expertise in React.js and modern JavaScript frameworks.Requirements:- 3+ years experience in frontend development- Strong knowledge of React.js and state management- Experience with TypeScript- Understanding of system design and scalable UI architecture- Experience working with REST APIsResponsibilities:- Build high-quality web applications- Collaborate with backend teams- Optimize frontend performance- Write clean and maintainable code
// report {
//   "matchScore": 82,
//   "technicalQuestions": [
//     "question", "How would you approach optimizing the performance of a large-scale React application beyond basic memoization?",
//     "intention", "To evaluate the candidate's understanding of performance bottlenecks, profiling tools, and advanced optimization techniques mentioned in their resume.",
//     "answer", "I would use React Profiler to identify bottlenecks, implement windowing for long lists using react-window, utilize code-splitting via React.lazy and Suspense, and optimize asset delivery. I would also look into state management efficiency to prevent unnecessary re-renders in the Redux store.",
//     "question", "Explain your experience with TypeScript and how it helps in building scalable UI architecture.",
//     "intention", "To verify the candidate's depth in TypeScript as required by the Senior role.",
//     "answer", "TypeScript ensures type safety, which is crucial for large codebases. It allows for better refactoring, provides autocompletion, and helps define strict interfaces for component props and API responses, reducing runtime errors and improving developer collaboration.",
//     "question", "How do you handle complex state logic when Redux might be overkill?",
//     "intention", "To assess the candidate's judgment on state management patterns and knowledge of the React ecosystem.",
//     "answer", "For local or less complex state, I use the Context API combined with useReducer for better logic encapsulation. For server state, I might recommend React Query or SWR to handle caching and synchronization efficiently."
//   ],
//   "behavioralQuestions": [
//     "question", "Since you have 2.5 years of experience and this is a Senior role, how do you demonstrate leadership and technical ownership?",
//     "intention", "To see if the candidate can bridge the slight experience gap with a senior mindset.",
//     "answer", "I demonstrate leadership by taking ownership of features from design to deployment, mentoring junior developers, and advocating for best practices like clean code and comprehensive testing to ensure long-term maintainability.",
//     "question", "Describe a time you had to collaborate with a backend team to solve a performance issue.",
//     "intention", "To evaluate communication and cross-functional problem-solving skills.",
//     "answer", "In my previous role, we had a slow dashboard. I worked with the backend team to implement pagination and field filtering in the REST API, reducing the payload size and improving the frontend rendering speed significantly."
//   ],
//   "skillGaps": [
//     "skill", "Total Years of Experience (2.5 vs 3+ required)",
//     "severity", "low",
//     "skill", "System Design & Scalable UI Architecture",
//     "severity", "medium",
//     "skill", "Mentorship & Senior Leadership Experience",
//     "severity", "medium"
//   ],
//   "preparationPlan": [
//     "day", 1,
//     "focus", "Advanced React & Performance Optimization",
//     "tasks", "Review React Profiler, virtualization techniques, and advanced patterns like HOCs vs Hooks.",
//     "day", 2,
//     "focus", "System Design & Architecture",
//     "tasks", "Study micro-frontends, atomic design principles, and design patterns for scalable frontend applications.",
//     "day", 3,
//     "focus", "TypeScript & State Management",
//     "tasks", "Deep dive into TypeScript Generics, Utility Types, and Redux Toolkit best practices.",
//     "day", 4,
//     "focus", "Mock Technical Interviews",
//     "tasks", "Practice coding challenges related to data structures and building complex UI components from scratch.",
//     "day", 5,
//     "focus", "Behavioral & Senior Leadership Preparation",
//     "tasks", "Prepare STAR method examples focusing on technical leadership, conflict resolution, and performance impact."
//   ],
//   "title": "Senior Frontend Engineer Interview Prep - Pranita Aeer"
// }