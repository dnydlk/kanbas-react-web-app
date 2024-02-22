import { courses } from "../Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
function Courses() {
  const params = useParams();
  const { courseId } = useParams();
  console.log("🚀 ~ Courses ~ courseId:", courseId);
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <pre>
        <code>{JSON.stringify(params, null, 2)}</code>
      </pre>
      <h1>
        <HiMiniBars3 /> Course {course?.name}
      </h1>
      <h2>Courses {course?.name}</h2>
      <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre>
    </div>
  );
}
export default Courses;
