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
  { id: "py1", title: "Python for Data Science and Machine Learning", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "25h", level: "Intermediate", rating: 4.7, tags: ["pandas", "numpy", "sklearn"], language: "Python", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" },
  { id: "py2", title: "Complete Python Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "22h", level: "Beginner", rating: 4.6, tags: ["OOP", "modules", "decorators"], language: "Python", url: "https://www.udemy.com/course/complete-python-bootcamp/" },
  { id: "py3", title: "Python 3 Programming Specialization", platform: "Coursera", platformShort: "CO", instructor: "University of Michigan", duration: "20h", level: "Beginner", rating: 4.7, tags: ["fundamentals", "data structures", "APIs"], language: "Python", url: "https://www.coursera.org/specializations/python-3-programming" },
  { id: "py4", title: "Advanced Python: Build Professional Software", platform: "Pluralsight", platformShort: "PS", instructor: "Austin Bingham", duration: "14h", level: "Advanced", rating: 4.5, tags: ["generators", "metaclasses", "testing"], language: "Python", url: "https://www.pluralsight.com/courses/advanced-python" },
  { id: "py5", title: "Python for Everybody", platform: "Coursera", platformShort: "CO", instructor: "Dr. Charles Severance", duration: "8h", level: "Beginner", rating: 4.8, tags: ["web scraping", "databases", "JSON"], language: "Python", url: "https://www.coursera.org/specializations/python" },

  // JavaScript
  { id: "js1", title: "The Complete JavaScript Course 2024", platform: "Udemy", platformShort: "UD", instructor: "Jonas Schmedtmann", duration: "69h", level: "Beginner", rating: 4.8, tags: ["ES6+", "async/await", "OOP"], language: "JavaScript", url: "https://www.udemy.com/course/the-complete-javascript-course/" },
  { id: "js2", title: "JavaScript: Understanding the Weird Parts", platform: "Udemy", platformShort: "UD", instructor: "Anthony Alicea", duration: "12h", level: "Intermediate", rating: 4.7, tags: ["closures", "prototypes", "scope"], language: "JavaScript", url: "https://www.udemy.com/course/understand-javascript/" },
  { id: "js3", title: "Modern JavaScript From The Beginning", platform: "Udemy", platformShort: "UD", instructor: "Brad Traversy", duration: "36h", level: "Beginner", rating: 4.7, tags: ["DOM", "fetch API", "modules"], language: "JavaScript", url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/" },
  { id: "js4", title: "JavaScript Algorithms and Data Structures", platform: "freeCodeCamp", platformShort: "FC", instructor: "freeCodeCamp", duration: "300h", level: "Intermediate", rating: 4.9, tags: ["algorithms", "regex", "debugging"], language: "JavaScript", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },

  // Java
  { id: "jv1", title: "Java Programming Masterclass", platform: "Udemy", platformShort: "UD", instructor: "Tim Buchalka", duration: "80h", level: "Beginner", rating: 4.6, tags: ["OOP", "collections", "streams"], language: "Java", url: "https://www.udemy.com/course/java-the-complete-java-developer-course/" },
  { id: "jv2", title: "Java In-Depth: Become a Complete Java Engineer", platform: "Udemy", platformShort: "UD", instructor: "Dheeru Mundluru", duration: "65h", level: "Intermediate", rating: 4.6, tags: ["JVM", "concurrency", "design patterns"], language: "Java", url: "https://www.udemy.com/course/java-in-depth-become-a-complete-java-engineer/" },
  { id: "jv3", title: "Spring Framework 6: Beginner to Guru", platform: "Udemy", platformShort: "UD", instructor: "John Thompson", duration: "56h", level: "Intermediate", rating: 4.5, tags: ["Spring Boot", "REST", "JPA"], language: "Java", url: "https://www.udemy.com/course/spring-framework-5-beginner-to-guru/" },
  { id: "jv4", title: "Object Oriented Programming in Java", platform: "Coursera", platformShort: "CO", instructor: "Duke University", duration: "16h", level: "Beginner", rating: 4.7, tags: ["inheritance", "polymorphism", "interfaces"], language: "Java", url: "https://www.coursera.org/specializations/object-oriented-programming" },

  // SQL / DBMS
  { id: "db1", title: "The Complete SQL Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "9h", level: "Beginner", rating: 4.7, tags: ["PostgreSQL", "joins", "aggregations"], language: "SQL", url: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
  { id: "db2", title: "SQL for Data Science", platform: "Coursera", platformShort: "CO", instructor: "UC Davis", duration: "15h", level: "Beginner", rating: 4.6, tags: ["subqueries", "views", "profiling"], language: "SQL", url: "https://www.coursera.org/learn/sql-for-data-science" },
  { id: "db3", title: "Database Management Essentials", platform: "Coursera", platformShort: "CO", instructor: "University of Colorado", duration: "25h", level: "Intermediate", rating: 4.4, tags: ["ER diagrams", "normalization", "SQL DDL"], language: "DBMS", url: "https://www.coursera.org/learn/database-management" },
  { id: "db4", title: "MongoDB - The Complete Developer's Guide", platform: "Udemy", platformShort: "UD", instructor: "Maximilian Schwarzmüller", duration: "17h", level: "Intermediate", rating: 4.7, tags: ["NoSQL", "aggregation", "indexes"], language: "MongoDB", url: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/" },
  { id: "db5", title: "Advanced Database Systems", platform: "CMU", platformShort: "CM", instructor: "Andy Pavlo", duration: "40h", level: "Advanced", rating: 4.9, tags: ["MVCC", "query optimization", "storage"], language: "DBMS", url: "https://15721.courses.cs.cmu.edu/spring2024/" },

  // TypeScript
  { id: "ts1", title: "Understanding TypeScript", platform: "Udemy", platformShort: "UD", instructor: "Maximilian Schwarzmüller", duration: "15h", level: "Intermediate", rating: 4.7, tags: ["generics", "decorators", "interfaces"], language: "TypeScript", url: "https://www.udemy.com/course/understanding-typescript/" },
  { id: "ts2", title: "TypeScript: The Complete Developer's Guide", platform: "Udemy", platformShort: "UD", instructor: "Stephen Grider", duration: "27h", level: "Beginner", rating: 4.7, tags: ["types", "design patterns", "React TS"], language: "TypeScript", url: "https://www.udemy.com/course/typescript-the-complete-developers-guide/" },

  // React
  { id: "re1", title: "React - The Complete Guide", platform: "Udemy", platformShort: "UD", instructor: "Maximilian Schwarzmüller", duration: "68h", level: "Beginner", rating: 4.6, tags: ["hooks", "Redux", "Next.js"], language: "React", url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
  { id: "re2", title: "Epic React", platform: "EpicReact", platformShort: "ER", instructor: "Kent C. Dodds", duration: "19h", level: "Advanced", rating: 4.9, tags: ["patterns", "performance", "testing"], language: "React", url: "https://epicreact.dev/" },

  // Go
  { id: "go1", title: "Go: The Complete Developer's Guide", platform: "Udemy", platformShort: "UD", instructor: "Stephen Grider", duration: "9h", level: "Beginner", rating: 4.6, tags: ["goroutines", "channels", "interfaces"], language: "Go", url: "https://www.udemy.com/course/go-the-complete-developers-guide/" },
  { id: "go2", title: "Programming with Google Go Specialization", platform: "Coursera", platformShort: "CO", instructor: "UC Irvine", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["concurrency", "methods", "JSON"], language: "Go", url: "https://www.coursera.org/specializations/google-golang" },

  // Rust
  { id: "rs1", title: "The Rust Programming Language", platform: "Udemy", platformShort: "UD", instructor: "Dmitri Nesteruk", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["ownership", "lifetimes", "traits"], language: "Rust", url: "https://www.udemy.com/course/rust-lang/" },
  { id: "rs2", title: "Rust Fundamentals", platform: "Pluralsight", platformShort: "PS", instructor: "Edward Curren", duration: "5h", level: "Beginner", rating: 4.4, tags: ["cargo", "enums", "error handling"], language: "Rust", url: "https://www.pluralsight.com/courses/rust-fundamentals" },

  // C++
  { id: "cp1", title: "Beginning C++ Programming", platform: "Udemy", platformShort: "UD", instructor: "Tim Buchalka", duration: "46h", level: "Beginner", rating: 4.6, tags: ["STL", "pointers", "OOP"], language: "C++", url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/" },
  { id: "cp2", title: "C++ Nanodegree", platform: "Udacity", platformShort: "UA", instructor: "Udacity", duration: "120h", level: "Advanced", rating: 4.5, tags: ["memory mgmt", "concurrency", "cmake"], language: "C++", url: "https://www.udacity.com/course/c-plus-plus-nanodegree--nd213" },

  // C
  { id: "c1", title: "C Programming For Beginners", platform: "Udemy", platformShort: "UD", instructor: "Tim Buchalka", duration: "23h", level: "Beginner", rating: 4.5, tags: ["pointers", "structs", "memory"], language: "C", url: "https://www.udemy.com/course/c-programming-for-beginners-/" },

  // Kotlin
  { id: "kt1", title: "Kotlin for Java Developers", platform: "Coursera", platformShort: "CO", instructor: "JetBrains", duration: "25h", level: "Intermediate", rating: 4.7, tags: ["coroutines", "null safety", "extensions"], language: "Kotlin", url: "https://www.coursera.org/learn/kotlin-for-java-developers" },
  { id: "kt2", title: "The Complete Android + Kotlin Developer Course", platform: "Udemy", platformShort: "UD", instructor: "Devslopes", duration: "30h", level: "Beginner", rating: 4.5, tags: ["Android", "Jetpack", "MVVM"], language: "Kotlin", url: "https://www.udemy.com/course/the-complete-kotlin-developer-course/" },

  // Swift
  { id: "sw1", title: "iOS & Swift - The Complete iOS App Development Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Dr. Angela Yu", duration: "55h", level: "Beginner", rating: 4.8, tags: ["SwiftUI", "CoreData", "Firebase"], language: "Swift", url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/" },

  // Ruby
  { id: "rb1", title: "The Complete Ruby on Rails Developer Course", platform: "Udemy", platformShort: "UD", instructor: "Rob Percival", duration: "46h", level: "Beginner", rating: 4.5, tags: ["MVC", "ActiveRecord", "testing"], language: "Ruby", url: "https://www.udemy.com/course/the-complete-ruby-on-rails-developer-course/" },

  // PHP
  { id: "ph1", title: "PHP for Beginners", platform: "Udemy", platformShort: "UD", instructor: "Brad Traversy", duration: "24h", level: "Beginner", rating: 4.7, tags: ["Laravel", "MySQL", "REST APIs"], language: "PHP", url: "https://www.udemy.com/course/php-for-beginners-/" },

  // R
  { id: "r1", title: "R Programming A-Z", platform: "Udemy", platformShort: "UD", instructor: "Kirill Eremenko", duration: "11h", level: "Beginner", rating: 4.6, tags: ["ggplot2", "data frames", "statistics"], language: "R", url: "https://www.udemy.com/course/r-programming/" },

  // Scala
  { id: "sc1", title: "Functional Programming in Scala", platform: "Coursera", platformShort: "CO", instructor: "Martin Odersky", duration: "30h", level: "Intermediate", rating: 4.8, tags: ["monads", "pattern matching", "Akka"], language: "Scala", url: "https://www.coursera.org/specializations/scala" },

  // Dart / Flutter
  { id: "da1", title: "The Complete Flutter Development Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Dr. Angela Yu", duration: "28h", level: "Beginner", rating: 4.7, tags: ["widgets", "state mgmt", "Firebase"], language: "Dart", url: "https://www.udemy.com/course/flutter-bootcamp-with-dart/" },

  // Elixir
  { id: "ex1", title: "The Complete Elixir and Phoenix Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Stephen Grider", duration: "18h", level: "Intermediate", rating: 4.6, tags: ["OTP", "Phoenix", "Ecto"], language: "Elixir", url: "https://www.udemy.com/course/the-complete-elixir-and-phoenix-bootcamp-and-tutorial/" },

  // PyTorch
  { id: "pt1", title: "PyTorch for Deep Learning", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "17h", level: "Intermediate", rating: 4.6, tags: ["tensors", "CNNs", "RNNs"], language: "PyTorch", url: "https://www.udemy.com/course/pytorch-for-deep-learning-with-python-bootcamp/" },

  // PySpark
  { id: "ps1", title: "Spark and Python for Big Data with PySpark", platform: "Udemy", platformShort: "UD", instructor: "Jose Portilla", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["RDDs", "DataFrames", "MLlib"], language: "PySpark", url: "https://www.udemy.com/course/spark-and-python-for-big-data-with-pyspark/" },

  // Haskell
  { id: "hs1", title: "Functional Programming in Haskell", platform: "Coursera", platformShort: "CO", instructor: "University of Glasgow", duration: "24h", level: "Intermediate", rating: 4.6, tags: ["monads", "type classes", "lazy eval"], language: "Haskell", url: "https://www.coursera.org/learn/functional-programming-haskell" },
  { id: "hs2", title: "Haskell: From First Principles", platform: "Udemy", platformShort: "UD", instructor: "William Yao", duration: "18h", level: "Beginner", rating: 4.5, tags: ["ADTs", "functors", "IO"], language: "Haskell", url: "https://www.udemy.com/course/learning-path-haskell-functional-programming-and-haskell/" },
  { id: "hs3", title: "CIS 194: Introduction to Haskell", platform: "UPenn", platformShort: "UP", instructor: "Brent Yorgey", duration: "30h", level: "Beginner", rating: 4.8, tags: ["recursion", "higher-order", "typeclasses"], language: "Haskell", url: "https://www.cis.upenn.edu/~cis1940/spring13/" },

  // Perl
  { id: "pl1", title: "Perl 5 Essential Training", platform: "LinkedIn Learning", platformShort: "LI", instructor: "Bill Weinman", duration: "6h", level: "Beginner", rating: 4.5, tags: ["regex", "file I/O", "modules"], language: "Perl", url: "https://www.linkedin.com/learning/perl-5-essential-training" },
  { id: "pl2", title: "Learning Perl (Llama Book Course)", platform: "Udemy", platformShort: "UD", instructor: "Daren Riedle", duration: "10h", level: "Beginner", rating: 4.3, tags: ["hashes", "subroutines", "CGI"], language: "Perl", url: "https://www.udemy.com/course/perltutorial/" },
  { id: "pl3", title: "Advanced Perl Programming", platform: "Pluralsight", platformShort: "PS", instructor: "Paul Barry", duration: "8h", level: "Advanced", rating: 4.4, tags: ["OOP", "CPAN", "testing"], language: "Perl", url: "https://www.pluralsight.com/courses/advanced-perl" },

  // Lua
  { id: "lu1", title: "Lua Programming and Game Development", platform: "Udemy", platformShort: "UD", instructor: "Awesome Tuts", duration: "12h", level: "Beginner", rating: 4.5, tags: ["tables", "metatables", "LÖVE 2D"], language: "Lua", url: "https://www.udemy.com/course/lua-love/" },
  { id: "lu2", title: "Complete Lua Programming for Beginners", platform: "Udemy", platformShort: "UD", instructor: "Zenva", duration: "8h", level: "Beginner", rating: 4.4, tags: ["coroutines", "modules", "scripting"], language: "Lua", url: "https://www.udemy.com/course/lua-programming/" },
  { id: "lu3", title: "Roblox Game Development with Lua", platform: "Udemy", platformShort: "UD", instructor: "GameDev.tv", duration: "20h", level: "Intermediate", rating: 4.6, tags: ["Roblox Studio", "events", "GUI"], language: "Lua", url: "https://www.udemy.com/course/roblox-lua-scripting/" },

  // Assembly
  { id: "as1", title: "x86 Assembly Language Programming", platform: "Udemy", platformShort: "UD", instructor: "Jason Dsouza", duration: "15h", level: "Intermediate", rating: 4.5, tags: ["registers", "stack", "interrupts"], language: "Assembly", url: "https://www.udemy.com/course/x86-assembly-programming-from-ground-up/" },
  { id: "as2", title: "ARM Assembly Language From Ground Up", platform: "Udemy", platformShort: "UD", instructor: "Israel Gbati", duration: "12h", level: "Intermediate", rating: 4.6, tags: ["ARM", "embedded", "instructions"], language: "Assembly", url: "https://www.udemy.com/course/arm-assembly-language-from-ground-up/" },
  { id: "as3", title: "Computer Architecture (NAND2Tetris)", platform: "Coursera", platformShort: "CO", instructor: "Hebrew University", duration: "20h", level: "Beginner", rating: 4.9, tags: ["Hack ASM", "CPU design", "gates"], language: "Assembly", url: "https://www.coursera.org/learn/build-a-computer" },

  // Clojure
  { id: "cl1", title: "Clojure for the Brave and True", platform: "Udemy", platformShort: "UD", instructor: "Daniel Higginbotham", duration: "10h", level: "Intermediate", rating: 4.5, tags: ["REPL", "macros", "concurrency"], language: "Clojure", url: "https://www.udemy.com/course/learning-clojure/" },

  // Erlang
  { id: "er1", title: "Functional Programming in Erlang", platform: "FutureLearn", platformShort: "FL", instructor: "University of Kent", duration: "12h", level: "Intermediate", rating: 4.5, tags: ["pattern matching", "OTP", "processes"], language: "Erlang", url: "https://www.futurelearn.com/courses/functional-programming-erlang" },

  // C#
  { id: "cs1", title: "Complete C# Masterclass", platform: "Udemy", platformShort: "UD", instructor: "Denis Panjuta", duration: "46h", level: "Beginner", rating: 4.6, tags: ["LINQ", ".NET", "OOP"], language: "C#", url: "https://www.udemy.com/course/complete-csharp-masterclass/" },
  { id: "cs2", title: "C# and .NET 8 Bootcamp", platform: "Udemy", platformShort: "UD", instructor: "Mosh Hamedani", duration: "30h", level: "Intermediate", rating: 4.7, tags: ["ASP.NET", "Entity Framework", "APIs"], language: "C#", url: "https://www.udemy.com/course/csharp-tutorial-for-beginners/" },

  // HTML/CSS
  { id: "hc1", title: "Build Responsive Websites with HTML & CSS", platform: "Udemy", platformShort: "UD", instructor: "Jonas Schmedtmann", duration: "38h", level: "Beginner", rating: 4.8, tags: ["Flexbox", "Grid", "Sass"], language: "HTML/CSS", url: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" },

  // Zig
  { id: "zg1", title: "Zig Programming Language", platform: "YouTube", platformShort: "YT", instructor: "Ziglings", duration: "10h", level: "Intermediate", rating: 4.5, tags: ["comptime", "allocators", "safety"], language: "Zig", url: "https://codeberg.org/ziglings/exercises/" },

  // V
  { id: "v1", title: "V Programming Language Tutorial", platform: "YouTube", platformShort: "YT", instructor: "V Community", duration: "6h", level: "Beginner", rating: 4.3, tags: ["simplicity", "C interop", "fast compile"], language: "V", url: "https://github.com/vlang/v/blob/master/doc/docs.md" },

  // Bash/Shell
  { id: "ba1", title: "Linux Shell Scripting", platform: "Udemy", platformShort: "UD", instructor: "Jason Cannon", duration: "8h", level: "Beginner", rating: 4.6, tags: ["bash", "cron", "sed/awk"], language: "Bash", url: "https://www.udemy.com/course/linux-shell-scripting-projects/" },
  { id: "ba2", title: "Bash Scripting and Shell Programming", platform: "Udemy", platformShort: "UD", instructor: "Jason Cannon", duration: "5h", level: "Beginner", rating: 4.6, tags: ["variables", "loops", "functions"], language: "Bash", url: "https://www.udemy.com/course/bash-scripting/" },
];

export const languages = [...new Set(courses.map(c => c.language))].sort();
