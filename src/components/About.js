import { API_URL } from "../utils/constants";

const About = () => {
  return (
    <div className="w-6/12 mx-auto my-5 text-gray-800">
      <h1 className="text-center text-5xl font-semibold mt-4">About Me</h1>
      <p className="mt-4">
        Hello, my name is Vihar Shah and I have created this web project for
        showcasing a list of courses and their details using React. I
        implemented the course listing page, a course details page, and a
        student dashboard to display enrolled courses.
      </p>
      <p className="my-2">
        <span className="font-bold text-lg">Home page</span> consists of all the
        courses which are fetched from a dummy API which I created and is hosted
        on a fake web server. api url :
        <a href={API_URL} className="font-bold">
          ({API_URL})
        </a>
      </p>
      <p>
        <span className="font-bold text-lg">Course Listing:</span> Created a
        page to showcase list of courses
        <li> Fetched a list of sample courses (used a dummy API) </li>
        <li>
          Displayed the courses in a scrollable list with basic information (in
          My courses page) and enable searching based on course name and
          instructor (e.g., course name, instructor, etc.) on Home page{" "}
        </li>
        <li>Users can click on a course to view its details.</li>
      </p>
      <p className="my-2">
        <span className="font-bold text-lg">Course Details Screen:</span>{" "}
        Created a new screen that displays detailed information about a selected
        course. This screen is accessible from the course listing screen.
        Displayed the following course information on the details screen
        <li>Course name</li>
        <li>Instructor's name</li>
        <li>Description</li>
        <li>Enrollment status (e.g., 'Open', 'Closed', 'In Progress')</li>
        <li>Course duration</li>
        <li>Schedule</li>
        <li>Location</li>
        <li>Pre-requisites</li>
        <li>Syllabus as an expandable item</li>
      </p>
      <p>
        <span className="font-bold text-lg">Student Dashboard:</span>
        <li>
          Created a user dashboard for students to display the courses they are
          enrolled in.
        </li>
        <li>
          Included a user-friendly interface with a list of enrolled courses.
        </li>
        <li>
          Displayed course name, instructor name, thumbnail, and a progress bar.
        </li>
      </p>
    </div>
  );
};

export default About;
