const request = require("supertest");
const app = require("../server.js");

describe("Photos endpoint", () => {
  test("should return hello world object", async () => {
    const res = await request(app).get("/api/syllabus");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      events: [
        {
          week: 34,
          classType: "Lecture",
          id: 233,
          date: "2024-08-26",
          event: "Syllabus & Welcome",
          description:
            "We'll talk about the course and expectations. Should be fun!",
        },
        {
          week: 35,
          classType: "Lecture",
          id: 234,
          date: "2024-08-28",
          event: "Introduction to Software Design",
          description:
            "Describe how programming in larger projects as a team differs from individual efforts (with respect to understanding a large code base, code reading, understanding builds, and understanding context of changes.)",
        },
        {
          week: 36,
          classType: "Lecture",
          id: 235,
          date: "2024-09-04",
          event: "Version Control",
          description:
            "Describe the difference between centralized and distributed software configuration management. Demonstrate the capability to use software tools in support of the development of a software product of medium size.",
        },
        {
          week: 36,
          classType: "Lecture",
          id: 236,
          date: "2024-09-09",
          event: "Testing Part 1: Unit Testing",
          description:
            "Ever wonder what that testing button in your IDE is for? In part one of the Testing portion of this class we will discuss the most basic and fundamental test you can perform in software. This will lead us straight into Test Driven Development, a different thought process in programming that focuses on safety and reliability by writing extremely basic tests that build as you write your code.",
        },
        {
          week: 37,
          classType: "Lecture",
          id: 237,
          date: "2024-09-11",
          event: "Testing Part 2: Integration Testing & Acceptance Testing",
          description:
            "We will discuss Integration testing and Acceptance testing, which are much larger tests of systems.",
        },
        {
          week: 37,
          classType: "Lecture",
          id: 238,
          date: "2024-09-16",
          event: "Testing Part 3: Automated Testing",
          description:
            "Testing is more useful when it's integrated into your team's process. We will discuss what automated testing looks like on your PC and in the cloud using Continuous Integration methods.",
        },
        {
          week: 38,
          classType: "Lecture",
          id: 239,
          date: "2024-09-18",
          event: "UML Part 1: Introduction to the Unified Modeling Language",
          description:
            "For Part 1 of the UML section of the course, we will discuss what UML is and why we use it to represent systems and code. You will also be introduced to the modern tool known as MermaidJS we will be using to create these diagrams.",
        },
        {
          week: 38,
          classType: "Lecture",
          id: 240,
          date: "2024-09-23",
          event: "UML Part 2: Class Diagrams",
          description:
            "Class Diagrams are used to describe Object Oriented code. We will learn how to read their notation and write them using MermaidJS.",
        },
        {
          week: 39,
          classType: "Lecture",
          id: 241,
          date: "2024-09-25",
          event: "More on UML Class Diagrams",
          description:
            "We will continue to discuss and practice UML Class Diagrams. There is a lot of notation, but don't panic!",
        },
        {
          week: 39,
          classType: "Lecture",
          id: 242,
          date: "2024-09-30",
          event: "UML Part 3: Sequence Diagrams",
          description:
            "Now that you have learned the most common structural diagram, it's time to learn about behavioral diagrams. UML Sequence Diagrams are by far the most common and useful in software design.",
        },
        {
          week: 40,
          classType: "Lecture",
          id: 243,
          date: "2024-10-02",
          event: "More on Sequence Diagrams",
          description:
            "After learning about class diagrams, sequence diagrams can feel more daunting. They're not as complicated as they look. We will look at more simpler examples, and then we'll talk about how you will use it to describe a race condition in your upcoming lab assignment.",
        },
        {
          week: 41,
          classType: "Lecture",
          id: 245,
          date: "2024-10-09",
          event: "UML Part 4: State Diagrams",
          description:
            "We will learn about UML State Diagrams. State diagrams are used to represent the changes and transitions of states in a system.",
        },
        {
          week: 41,
          classType: "Lecture",
          id: 246,
          date: "2024-10-14",
          event: "Software Processes Part 1: Agile vs Waterfall",
          description:
            "We will learn the different practices that are key components of various process models. The relative advantages and disadvantages among several major process models (e.g., waterfall, iterative, and agile)",
        },
        {
          week: 42,
          classType: "Lecture",
          id: 247,
          date: "2024-10-16",
          event: "Software Process Part 2: Scrum",
          description:
            "We will talk about Agile Scrum methodology in more detail.",
        },
        {
          week: 42,
          classType: "Lecture",
          id: 248,
          date: "2024-10-21",
          event:
            "Software Process Part 3: Requirements Gathering and Elicitation",
          description:
            "In order to produce great software, you need to be able to gather, organize, and communicate requirements. We will learn and workshop requirements gathering for your final projects.",
        },
        {
          week: 43,
          classType: "Lecture",
          id: 259,
          date: "2024-10-23",
          event: "Event Storming Activity",
          description:
            "A requirements gathering workshop to help quickly identify what happens in the domain of your project.",
        },
        {
          week: 43,
          classType: "Lab",
          id: 296,
          date: "2024-10-25",
          event: "Lab 4 Part 1 Demo",
          description:
            "Students will present their ReactJS Applications making calls to the Syllabus API.",
        },
        {
          week: 43,
          classType: "Lecture",
          id: 260,
          date: "2024-10-28",
          event: "Software Processes Part 4: Requirements Management Tools",
          description:
            "Keeping track of project requirements is essential in software design. We will demonstrate using Atlassian Jira Software for building a product backlog.",
        },
        {
          week: 44,
          classType: "Lecture",
          id: 261,
          date: "2024-10-30",
          event: "Software Processes Part 5: Organizing Backlogs",
          description:
            "We will talk about how to organize product backlog to make project management and development more efficient.",
        },
        {
          week: 44,
          classType: "Lecture",
          id: 254,
          date: "2024-11-04",
          event:
            "Design Patterns Part 1: Introduction Singleton, Strategy, Decorator Patterns",
          description:
            "Articulate design principles including separation of concerns, information hiding, coupling and cohesion, and encapsulation.",
        },
        {
          week: 45,
          classType: "Lecture",
          id: 255,
          date: "2024-11-06",
          event: "Design Patterns Part 2: Façade, Decorator, Observer",
          description:
            "Articulate design principles including separation of concerns, information hiding, coupling and cohesion, and encapsulation.",
        },
        {
          week: 45,
          classType: "Lecture",
          id: 256,
          date: "2024-11-11",
          event: "Design Patterns Part 3: Adapter, Factory, Builder",
          description:
            "Articulate design principles including separation of concerns, information hiding, coupling and cohesion, and encapsulation.",
        },
        {
          week: 47,
          classType: "Break!",
          id: 253,
          date: "2024-11-25",
          event: "Fall Break (no classes held)",
          description:
            "Monday, November 25 - Wednesday, November 27. Thursday, November 28 - Sunday, December 1 Thanksgiving holiday (no classes held)",
        },
        {
          week: 49,
          classType: "Lab",
          id: 257,
          date: "2024-12-06",
          event: "Final Presentation & Demo",
          description:
            "Develop and deliver a good quality formal presentation. Demonstrate your software's features. NO VIDEOS.",
        },
        {
          week: 49,
          classType: "Assignment",
          id: 258,
          date: "2024-12-09",
          event: "Final Report",
          description:
            "Write clear, concise, and accurate technical documents following well-defined standards for format",
        },
      ],
    });
  });
});
