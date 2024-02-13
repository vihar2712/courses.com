const CourseCard = ({ courseDetails }) => {
  const { name, instructor, duration } = courseDetails;
  return (
    <div >
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/010/869/731/small/online-education-concept-illustration-digital-classroom-online-teaching-metaphors-free-png.png"
        alt="course-logo"
      />
      <h1 className="text-xl font-bold mt-3">💻: {name}</h1>
      <h1 className="text-lg"> 👨‍🏫: {instructor}</h1>
      <h1 className="text-lg">🕜: {duration}</h1>
    </div>
  );
};

export default CourseCard;
