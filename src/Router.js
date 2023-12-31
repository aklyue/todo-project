import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import CounterPage from "./pages/CounterPage";
import { useDispatch } from "react-redux";
import { removeTask } from "./store/tasksSlice";

function Router() {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [countIsDone, setCountIsDone] = useState(2);
  const [countInProcess, setCountInProcess] = useState(0);

  const refreshTaskData = () => {
    setCountIsDone(0);
    setCountInProcess(0);

    tasks.forEach((item) => {
      if (item.isDone) {
        setCountIsDone((prev) => (prev += 1));
      } else {
        setCountInProcess((prev) => (prev += 1));
      }
    });
  };

  const handleDelete = (taskId) => {
    dispatch(removeTask(taskId))
  }

  useEffect(() => {
    refreshTaskData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              countIsDone={countIsDone}
              setCountIsDone={setCountIsDone}
              countInProcess={countInProcess}
              setCountInProcess={setCountInProcess}
              refreshTaskData={refreshTaskData}
              tasks={tasks}
              setTasks={setTasks}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              countIsDone={countIsDone}
              countInProcess={countInProcess}
              refreshTaskData={refreshTaskData}
              tasks={tasks}
              setTasks={setTasks}
            />
          }
        />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
