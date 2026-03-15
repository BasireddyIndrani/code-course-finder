export interface Course {
  id: string;
  title: string;
  platform: string;
  platformShort: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  tags: string[];
  language: string;
  url: string;
}

export const courses: Course[] = [
  // Python
  { id: "py1", title: "Python for Data Science and Machine Learning", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "25h", level: "Intermediate", rating: 4.7, tags: ["pandas", "numpy", "sklearn"], language: "Python", url: "#" },
  { id: "py2", title: "Complete Python Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "22h", level: "Beginner", rating: 4.6, tags: ["OOP", "modules", "decorators"], language: "Python", url: "#" },
  { id: "py3", title: "Python 3 Programming Specialization", platform: "Coursera", platformShort: "CO", instructor: "University of Michigan", duration: "20h", level: "Beginner", rating: 4.7, tags: ["fundamentals", "data structures", "APIs"], language: "Python", url: "#" },
  { id: "py4", title: "Advanced Python: Build Professional Software", platform: "Pluralsight", platformShort: "PS", instructor: "Austin Bingham", duration: "14h", level: "Advanced", rating: 4.5, tags: ["generators", "metaclasses", "testing"], language: "Python", url: "#" },
  { id: "py5", title: "Python for Everybody", platform: "Coursera", platformShort: "CO", instructor: "Dr. Charles Severance", duration: "8h", level: "Beginner", rating: 4.8, tags: ["web scraping", "databases", "JSON"], language: "Python", url: "#" },

  // JavaScript
  { id: "js1", title: "The Complete JavaScript Course 2024", platform: "Udemy", platformShort: "UD", instructor: "Jonas Schmedtmann", duration: "69h", level: "Beginner", rating: 4.8, tags: ["ES6+", "async/await", "OOP"], language: "JavaScript", url: "#" },
  { id: "js2", title: "JavaScript: Understanding the Weird Parts", platform: "Udemy", platformShort: "UD", instructor: "Anthony Alicea", duration: "12h", level: "Intermediate", rating: 4.7, tags: ["closures", "prototypes", "scope"], language: "JavaScript", url: "#" },
  { id: "js3", title: "Modern JavaScript From The Beginning", platform: "Udemy", platformShort: "UD", instructor: "Brad Traversy", duration: "36h", level: "Beginner", rating: 4.7, tags: ["DOM", "fetch API", "modules"], language: "JavaScript", url: "#" },
  { id: "js4", title: "JavaScript Algorithms and Data Structures", platform: "freeCodeCamp", platformShort: "FC", instructor: "freeCodeCamp", duration: "300h", level: "Intermediate", rating: 4.9, tags: ["algorithms", "regex", "debugging"], language: "JavaScript", url: "#" },

  // Java
  { id: "jv1", title: "Java Programming Masterclass", platform: "Udemy", platformShort: "UD", instructor: "Tim Buchalka", duration: "80h", level: "Beginner", rating: 4.6, tags: ["OOP", "collections", "streams"], language: "Java", url: "#" },
  { id: "jv2", title: "Java In-Depth: Become a Complete Java Engineer", platform: "Udemy", platformShort: "UD", instructor: "Dheeru Mundluru", duration: "65h", level: "Intermediate", rating: 4.6, tags: ["JVM", "concurrency", "design patterns"], language: "Java", url: "#" },
  { id: "jv3", title: "Spring Framework 6: Beginner to Guru", platform: "Udemy", platformShort: "UD", instructor: "John Thompson", duration: "56h", level: "Intermediate", rating: 4.5, tags: ["Spring Boot", "REST", "JPA"], language: "Java", url: "#" },
  { id: "jv4", title: "Object Oriented Programming in Java", platform: "Coursera", platformShort: "CO", instructor: "Duke University", duration: "16h", level: "Beginner", rating: 4.7, tags: ["inheritance", "polymorphism", "interfaces"], language: "Java", url: "#" },

  // SQL / DBMS
  { id: "db1", title: "The Complete SQL Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "9h", level: "Beginner", rating: 4.7, tags: ["PostgreSQL", "joins", "aggregations"], language: "SQL", url: "#" },
  { id: "db2", title: "SQL for Data Science", platform: "Coursera", platformShort: "CO", instructor: "UC Davis", duration: "15h", level: "Beginner", rating: 4.6, tags: ["subqueries", "views", "profiling"], language: "SQL", url: "#" },
  { id: "db3", title: "Database Management Essentials", platform: "Coursera", platformShort: "CO", instructor: "University of Colorado", duration: "25h", level: "Intermediate", rating: 4.4, tags: ["ER diagrams", "normalization", "SQL DDL"], language: "DBMS", url: "#" },
  { id: "db4", title: "MongoDB - The Complete Developer's Guide", platform: "Udemy", platformShort: "UD", instructor: "Maximilian Schwarzmüller", duration: "17h", level: "Intermediate", rating: 4.7, tags: ["NoSQL", "aggregation", "indexes"], language: "MongoDB", url: "#" },
  { id: "db5", title: "Advanced Database Systems", platform: "CMU", platformShort: "CM", instructor: "Andy Pavlo", duration: "40h", level: "Advanced", rating: 4.9, tags: ["MVCC", "query optimization", "storage"], language: "DBMS", url: "#" },

  // TypeScript
  { id: "ts1", title: "Understanding TypeScript", platform: "Udemy", platformShort: "UD", instructor: "Maximilian Schwarzmüller", duration: "15h", level: "Intermediate", rating: 4.7, tags: ["generics", "decorators", "interfaces"], language: "TypeScript", url: "#" },
  { id: "ts2", title: "TypeScript: The Complete Developer's Guide", platform: "Udemy", platformShort: "UD", instructor: "Stephen Grider", duration: "27h", level: "Beginner", rating: 4.7, tags: ["types", "design patterns", "React TS"], language: "TypeScript", url: "#" },

  // React
  { id: "re1", title: "React - The Complete Guide", platform: "Udemy", platformShort: "UD", instructor: "Maximilian Schwarzmüller", duration: "68h", level: "Beginner", rating: 4.6, tags: ["hooks", "Redux", "Next.js"], language: "React", url: "#" },
  { id: "re2", title: "Epic React", platform: "EpicReact", platformShort: "ER", instructor: "Kent C. Dodds", duration: "19h", level: "Advanced", rating: 4.9, tags: ["patterns", "performance", "testing"], language: "React", url: "#" },

  // Go
  { id: "go1", title: "Go: The Complete Developer's Guide", platform: "Udemy", platformShort: "UD", instructor: "Stephen Grider", duration: "9h", level: "Beginner", rating: 4.6, tags: ["goroutines", "channels", "interfaces"], language: "Go", url: "#" },
  { id: "go2", title: "Programming with Google Go Specialization", platform: "Coursera", platformShort: "CO", instructor: "UC Irvine", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["concurrency", "methods", "JSON"], language: "Go", url: "#" },

  // Rust
  { id: "rs1", title: "The Rust Programming Language", platform: "Udemy", platformShort: "UD", instructor: "Dmitri Nesteruk", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["ownership", "lifetimes", "traits"], language: "Rust", url: "#" },
  { id: "rs2", title: "Rust Fundamentals", platform: "Pluralsight", platformShort: "PS", instructor: "Edward Curren", duration: "5h", level: "Beginner", rating: 4.4, tags: ["cargo", "enums", "error handling"], language: "Rust", url: "#" },

  // C++
  { id: "cp1", title: "Beginning C++ Programming", platform: "Udemy", platformShort: "UD", instructor: "Tim Buchalka", duration: "46h", level: "Beginner", rating: 4.6, tags: ["STL", "pointers", "OOP"], language: "C++", url: "#" },
  { id: "cp2", title: "C++ Nanodegree", platform: "Udacity", platformShort: "UA", instructor: "Udacity", duration: "120h", level: "Advanced", rating: 4.5, tags: ["memory mgmt", "concurrency", "cmake"], language: "C++", url: "#" },

  // C
  { id: "c1", title: "C Programming For Beginners", platform: "Udemy", platformShort: "UD", instructor: "Tim Buchalka", duration: "23h", level: "Beginner", rating: 4.5, tags: ["pointers", "structs", "memory"], language: "C", url: "#" },

  // Kotlin
  { id: "kt1", title: "Kotlin for Java Developers", platform: "Coursera", platformShort: "CO", instructor: "JetBrains", duration: "25h", level: "Intermediate", rating: 4.7, tags: ["coroutines", "null safety", "extensions"], language: "Kotlin", url: "#" },
  { id: "kt2", title: "The Complete Android + Kotlin Developer Course", platform: "Udemy", platformShort: "UD", instructor: "Devslopes", duration: "30h", level: "Beginner", rating: 4.5, tags: ["Android", "Jetpack", "MVVM"], language: "Kotlin", url: "#" },

  // Swift
  { id: "sw1", title: "iOS & Swift - The Complete iOS App Development Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Dr. Angela Yu", duration: "55h", level: "Beginner", rating: 4.8, tags: ["SwiftUI", "CoreData", "Firebase"], language: "Swift", url: "#" },

  // Ruby
  { id: "rb1", title: "The Complete Ruby on Rails Developer Course", platform: "Udemy", platformShort: "UD", instructor: "Rob Percival", duration: "46h", level: "Beginner", rating: 4.5, tags: ["MVC", "ActiveRecord", "testing"], language: "Ruby", url: "#" },

  // PHP
  { id: "ph1", title: "PHP for Beginners", platform: "Udemy", platformShort: "UD", instructor: "Brad Traversy", duration: "24h", level: "Beginner", rating: 4.7, tags: ["Laravel", "MySQL", "REST APIs"], language: "PHP", url: "#" },

  // R
  { id: "r1", title: "R Programming A-Z", platform: "Udemy", platformShort: "UD", instructor: "Kirill Eremenko", duration: "11h", level: "Beginner", rating: 4.6, tags: ["ggplot2", "data frames", "statistics"], language: "R", url: "#" },

  // Scala
  { id: "sc1", title: "Functional Programming in Scala", platform: "Coursera", platformShort: "CO", instructor: "Martin Odersky", duration: "30h", level: "Intermediate", rating: 4.8, tags: ["monads", "pattern matching", "Akka"], language: "Scala", url: "#" },

  // Dart / Flutter
  { id: "da1", title: "The Complete Flutter Development Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Dr. Angela Yu", duration: "28h", level: "Beginner", rating: 4.7, tags: ["widgets", "state mgmt", "Firebase"], language: "Dart", url: "#" },

  // Elixir
  { id: "ex1", title: "The Complete Elixir and Phoenix Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Stephen Grider", duration: "18h", level: "Intermediate", rating: 4.6, tags: ["OTP", "Phoenix", "Ecto"], language: "Elixir", url: "#" },

  // PyTorch
  { id: "pt1", title: "PyTorch for Deep Learning", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "17h", level: "Intermediate", rating: 4.6, tags: ["tensors", "CNNs", "RNNs"], language: "PyTorch", url: "#" },

  // PySpark
  { id: "ps1", title: "Spark and Python for Big Data with PySpark", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["RDDs", "DataFrames", "MLlib"], language: "PySpark", url: "#" },
];

// All unique language names for suggestions
export const languages = [...new Set(courses.map(c => c.language))].sort();
