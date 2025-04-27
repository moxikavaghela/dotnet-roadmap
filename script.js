const days = [
  {
    title: "Environment Setup & Hello World",
    icon: "fa-solid fa-laptop-code",
    details: "Install Visual Studio 2022 Community. Setup .NET SDK. Create your first Console App. [Learn from Microsoft Docs](https://learn.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio)"
  },
  {
    title: "C# Basics - Variables & Data Types",
    icon: "fa-solid fa-code",
    details: "Understand Variables, Constants, Data Types, Type Conversion. Practice small console programs. [YouTube: Programming with Mosh - C# Basics](https://youtu.be/gfkTfcpWqAY)"
  },
  {
    title: "Control Structures: Conditionals",
    icon: "fa-solid fa-code-branch",
    details: "Learn if, else-if, switch-case, ternary operator. Implement decision-making programs."
  },
  {
    title: "Loops & Iteration",
    icon: "fa-solid fa-sync",
    details: "for, while, do-while loops. Nesting loops. Use break and continue. Solve basic pattern problems."
  },
  {
    title: "Methods & Functions",
    icon: "fa-solid fa-hand-pointer",
    details: "Learn about methods, parameters, return types, overloading. Modularize your code."
  },
  {
    title: "Introduction to Object-Oriented Programming",
    icon: "fa-solid fa-object-group",
    details: "Understand Classes, Objects, Fields, Methods, Constructors. Write your first Class in C#."
  },
  {
    title: "Advanced OOP Concepts",
    icon: "fa-solid fa-layer-group",
    details: "Inheritance, Polymorphism, Abstraction, Encapsulation. Small examples."
  },
  {
    title: "Exception Handling & Debugging",
    icon: "fa-solid fa-bug",
    details: "try-catch-finally, throw keyword. Debugging basics in Visual Studio."
  },
  {
    title: "Working with Collections",
    icon: "fa-solid fa-list",
    details: "Arrays, Lists, Dictionaries, HashSets. When to use which collection."
  },
  {
    title: "File I/O and Data Serialization",
    icon: "fa-solid fa-file-alt",
    details: "Read and write to text files. JSON Serialization and Deserialization."
  },
  {
    title: "Your First Console Mini Project",
    icon: "fa-solid fa-lightbulb",
    details: "Build a mini console project like Library Management or Quiz App."
  },
  {
    title: "Understanding .NET Core and CLR",
    icon: "fa-solid fa-cogs",
    details: "How .NET Core runtime works. Compilation vs Execution. Managed Code."
  },
  {
    title: "Version Control: Git & GitHub",
    icon: "fa-brands fa-github",
    details: "Learn git basics: commit, push, pull, clone. Create your first GitHub repo."
  },
  {
    title: "Intro to ASP.NET Core and MVC",
    icon: "fa-solid fa-network-wired",
    details: "Learn web development basics. What is MVC Pattern? Create a Hello World Web App."
  },
  {
    title: "Creating ASP.NET Core Project",
    icon: "fa-solid fa-diagram-project",
    details: "Understand project structure. Controllers, Views, Models."
  },
  {
    title: "Controllers and Routing",
    icon: "fa-solid fa-route",
    details: "Learn Attribute Routing, Convention Routing. Controller Actions."
  },
  {
    title: "Views & Razor Syntax",
    icon: "fa-solid fa-eye",
    details: "Razor basics, Syntax, Using C# in Views, Passing data to Views."
  },
  {
    title: "Data Binding & Forms",
    icon: "fa-solid fa-file-signature",
    details: "Model Binding, Form Validation, AntiForgery tokens."
  },
  {
    title: "Entity Framework Core Basics",
    icon: "fa-solid fa-database",
    details: "Setup EF Core, Code-First vs Database-First, Migrations."
  },
  {
    title: "Working with Databases",
    icon: "fa-solid fa-database",
    details: "CRUD Operations (Create, Read, Update, Delete) using EF Core."
  },
  {
    title: "Building Web APIs with ASP.NET Core",
    icon: "fa-solid fa-plug",
    details: "RESTful services, HTTP methods (GET, POST, PUT, DELETE)."
  },
  {
    title: "Authentication & Authorization",
    icon: "fa-solid fa-user-shield",
    details: "Secure your Web APIs with JWT tokens."
  },
  {
    title: "Dependency Injection & Middleware",
    icon: "fa-solid fa-sitemap",
    details: "Built-in Dependency Injection. Creating Custom Middleware."
  },
  {
    title: "Connecting Frontend & Backend",
    icon: "fa-solid fa-link",
    details: "APIs + Frontend (using Postman / AJAX requests)"
  },
  {
    title: "Unit Testing Basics",
    icon: "fa-solid fa-vial",
    details: "Learn MSTest / xUnit frameworks. Write simple unit tests."
  },
  {
    title: "Debugging & Refactoring",
    icon: "fa-solid fa-tools",
    details: "Debug projects efficiently. Follow SOLID principles for refactoring."
  },
  {
    title: "Mini Web App Project - Start",
    icon: "fa-solid fa-rocket",
    details: "Plan and start coding your mini ASP.NET Core MVC Web App."
  },
  {
    title: "Continue Building Project",
    icon: "fa-solid fa-tools",
    details: "Implement Features, APIs, Authentication."
  },
  {
    title: "Testing and Deployment (Local)",
    icon: "fa-solid fa-flag-checkered",
    details: "Test thoroughly. Deploy locally using IIS Express / Kestrel."
  },
  {
    title: "Review, Revise & Next Steps",
    icon: "fa-solid fa-book-open",
    details: "Revise everything. Explore Blazor, Azure, Microservices in future."
  }
];

const roadmap = document.getElementById('roadmap');

days.forEach((day, index) => {
  const card = document.createElement('div');
  card.className = 'col-md-4 col-sm-6 mb-4';
  card.innerHTML = `
    <div class="card p-3 h-100">
      <div class="text-center">
        <i class="${day.icon} icon"></i>
      </div>
      <div class="card-body text-center">
        <h5 class="day-title mb-2">Day ${index + 1}: ${day.title}</h5>
        <p class="day-content">${day.details}</p>
      </div>
    </div>
  `;
  roadmap.appendChild(card);
});
