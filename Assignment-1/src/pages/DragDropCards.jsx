import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import SingleDragCard from "../components/SingleDragCard";
import { courseList } from "../utils/data";
import { useState } from "react";

const DragDropCards = () => {
  const [course, setCourse] = useState(courseList);
  const [openMenuId, setOpenMenuId] = useState(null);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const newCourseList = Array.from(course);
    const [draggedItem] = newCourseList.splice(result.source.index, 1);
    newCourseList.splice(result.destination.index, 0, draggedItem);

    setCourse(newCourseList);
  };

  const handleMenuAction = (event, id) => {
    if (!id) return;

    setCourse((prevCourse) => {
      const index = prevCourse.findIndex((ele) => ele.id === id);

      if (event === "remove") {
        return prevCourse.filter((ele) => ele.id !== id);
      }

      const updatedCourse = [...prevCourse];

      if (event === "top" && index > 0) {
        [updatedCourse[index], updatedCourse[index - 1]] = [updatedCourse[index - 1], updatedCourse[index]];
      }

      if (event === "down" && index < prevCourse.length - 1) {
        [updatedCourse[index], updatedCourse[index + 1]] = [updatedCourse[index + 1], updatedCourse[index]];
      }

      return updatedCourse;
    });
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="bg-[#d2e3c8] w-full min-h-screen p-5">
        <h1 className="text-center text-[#4f6f52] text-5xl font-bold p-5 text-shadow">
          Chai aur Code
        </h1>
        <div className="w-[75%] m-auto bg-white p-7 shadow rounded-md">
          <h1 className="text-3xl font-bold text-center md:text-left">Manage Bundle</h1>
          <p className="text-md text-gray-400 mt-3 text-center md:text-left">Change order of the products based on priority</p>
          <Droppable droppableId="course-list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {course.map((course, index) => (
                  <Draggable key={course.id} draggableId={course.id} index={index}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.draggableProps}>
                        <SingleDragCard
                          course={course}
                          dragHandleProps={provided.dragHandleProps}
                          handleMenuAction={handleMenuAction}
                          openMenuId={openMenuId}
                          setOpenMenuId={setOpenMenuId}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default DragDropCards;
