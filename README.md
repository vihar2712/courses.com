 A web application for showcasing a list of courses and their details using React. Implemented the
 course listing page, a course details page, and a student dashboard to display enrolled courses.

 Features included:

 Home page - list of all courses
 On clicking the particular course, the corresponding info page will be shown
 Search feature provided in the header section
 On clicking the 'My Courses' Page, the corresponding courses page will be shown    
 
Course Listing: Created a page to showcase list of courses
 1) Fetched a list of sample courses (used a dummy API)
 2) Displayed the courses in a scrollable list with basic information (in My courses page) and enable searching
 based on course name and instructor (e.g., course name, instructor, etc.) on Home page
 3) Users can click on a course to view its details.

Course Details Screen: Created a new screen that displays detailed information about a
 selected course. This screen is accessible from the course listing screen.
 Displayed the following course information on the details screen 
 1) Course name
 2) Instructor's name
 3) Description
 4) Enrollment status (e.g., 'Open', 'Closed', 'In Progress')
 5) Course duration
 6) Schedule
 7) Location
 8) Pre-requisites
 9) Syllabus as an expandable item

Student Dashboard:
 1) Creates a user dashboard for students to display the courses they are enrolled in.
 Included a user-friendly interface with a list of enrolled courses.
 2) Displayed course name, instructor name, thumbnail, and a progress bar. 
 3) Implemented a feature that allows students to mark courses as completed

 Concepts used:

 core react
 react-router-dom for routing
 redux for state management

 
 