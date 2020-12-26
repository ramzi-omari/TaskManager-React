import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import TasksPage from "./components/TasksPage";

function App(props) {
  return (
    <>
      format code
      <TasksPage tasks={props.tasks}></TasksPage>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
