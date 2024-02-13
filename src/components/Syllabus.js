const Syllabus = ({ data, setShowContent, showContent, collapseItem }) => {
  const { week, topic, content } = data;
  const handleContent = () => {
    setShowContent();
    showContent && collapseItem();
  };
  return (
    <div key={week} className="text-lg">
      <h1
        onClick={handleContent}
        className="bg-gray-300 p-2 hover:cursor-pointer font-bold border-b-2 border-gray-400"
      >
        <span>{showContent ? "▲ " : "▼ "}</span> Week {week} - {topic}
      </h1>
      {showContent && <h1 className="p-2 border-x-2">{content}</h1>}
    </div>
  );
};

export default Syllabus;
