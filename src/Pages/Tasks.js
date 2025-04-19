import React, { useState } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter, FaSort } from "react-icons/fa";
import "./Tasks.css";
import AdminNav from '../components/AdminNav';

// Ensure Bootstrap CSS is imported (add this if not already in your main App.js or index.js)
import 'bootstrap/dist/css/bootstrap.min.css';

function Tasks() {
  // State management
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Research eco-friendly products",
      description: "Find and analyze new sustainable products for the platform",
      priority: "High",
      status: "In Progress",
      dueDate: "2024-04-15",
      createdAt: "2024-03-20",
    },
    {
      id: 2,
      title: "Update product descriptions",
      description: "Add sustainability metrics to product descriptions",
      priority: "Medium",
      status: "To Do",
      dueDate: "2024-04-20",
      createdAt: "2024-03-21",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [filters, setFilters] = useState({
    status: "all",
    search: "",
    sortBy: "dueDate",
  });

  // New task form state
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "To Do",
    dueDate: "",
  });

  // Calculate completion percentage
  const completionPercentage = Math.round(
    (tasks.filter((task) => task.status === "Completed").length / tasks.length) * 100 || 0
  );

  // Filter and sort tasks
  const filteredTasks = tasks
    .filter((task) => {
      const matchesStatus = filters.status === "all" || task.status === filters.status;
      const matchesSearch = task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        task.description.toLowerCase().includes(filters.search.toLowerCase());
      return matchesStatus && matchesSearch;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "priority":
          const priorityOrder = { High: 1, Medium: 2, Low: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case "dueDate":
          return new Date(a.dueDate) - new Date(b.dueDate);
        case "createdAt":
          return new Date(b.createdAt) - new Date(a.createdAt);
        default:
          return 0;
      }
    });

  // Handle task actions
  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      id: tasks.length + 1,
      ...newTask,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTasks([...tasks, task]);
    setShowModal(false);
    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      status: "To Do",
      dueDate: "",
    });
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setNewTask(task);
    setShowModal(true);
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id ? { ...newTask, id: task.id } : task
    );
    setTasks(updatedTasks);
    setShowModal(false);
    setEditingTask(null);
    setNewTask({
      title: "",
      description: "",
      priority: "Medium",
      status: "To Do",
      dueDate: "",
    });
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="tasks-page">
      <AdminNav />
      <div className="container-fluid p-4 tasks-container">
        {/* Header Section */}
        <div className="header-section mb-4 fade-in">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 className="display-4 mb-0">Eco Tasks 🌱</h1>
              <p className="text-muted">Track and manage your eco-friendly initiatives</p>
            </div>
            <button
              className="btn btn-primary d-flex align-items-center"
              onClick={() => setShowModal(true)}
            >
              <FaPlus className="me-2" /> Add Green Task
            </button>
          </div>

          {/* Progress Bar */}
          <div className="progress-section mt-4">
            <h6 className="mb-2">Environmental Impact Progress</h6>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${completionPercentage}%` }}
              >
                {completionPercentage}% Complete
              </div>
            </div>
            <p className="text-muted mt-2 small">
              <span className="text-success">🌿 Making a difference:</span> {tasks.filter(t => t.status === 'Completed').length} eco-tasks completed
            </p>
          </div>
        </div>

        {/* Filters Section */}
        <div className="filters-section mb-4 fade-in">
          <div className="row g-3">
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search tasks..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <FaFilter />
                </span>
                <select
                  className="form-select"
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                >
                  <option value="all">All Status</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="input-group">
                <span className="input-group-text">
                  <FaSort />
                </span>
                <select
                  className="form-select"
                  value={filters.sortBy}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                >
                  <option value="dueDate">Sort by Due Date</option>
                  <option value="priority">Sort by Priority</option>
                  <option value="createdAt">Sort by Created Date</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="tasks-list">
          {filteredTasks.map((task) => (
            <div 
              key={task.id} 
              className="task-card card slide-in"
              data-priority={task.priority}
            >
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h5 className="card-title mb-1">
                      {task.title}
                      {task.status === 'Completed' && <span className="ms-2">🌟</span>}
                    </h5>
                    <p className="card-text text-muted small mb-2">{task.description}</p>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex gap-2 mb-2">
                      <span className={`badge bg-${getPriorityColor(task.priority)}`}>
                        {task.priority === 'High' ? '🔥 ' : task.priority === 'Medium' ? '⚡ ' : '🌱 '}
                        {task.priority}
                      </span>
                      <span className={`badge bg-${getStatusColor(task.status)}`}>
                        {task.status === 'Completed' ? '✅ ' : task.status === 'In Progress' ? '🔄 ' : '📋 '}
                        {task.status}
                      </span>
                    </div>
                    <small className="text-muted">
                      🗓️ Due: {new Date(task.dueDate).toLocaleDateString()}
                    </small>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex gap-2 justify-content-end">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => handleEditTask(task)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {filteredTasks.length === 0 && (
            <div className="text-center py-5 text-muted">
              <h3>🌱</h3>
              <p>No eco-tasks found. Start by adding a new green initiative!</p>
            </div>
          )}
        </div>

        {/* Add/Edit Task Modal */}
        {showModal && (
          <>
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content slide-down">
                  <div className="modal-header">
                    <h5 className="modal-title">
                      {editingTask ? '🔄 Edit Task' : '🌱 New Green Initiative'}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => {
                        setShowModal(false);
                        setEditingTask(null);
                      }}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={editingTask ? handleUpdateTask : handleAddTask}>
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={newTask.title}
                          onChange={(e) =>
                            setNewTask({ ...newTask, title: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          value={newTask.description}
                          onChange={(e) =>
                            setNewTask({ ...newTask, description: e.target.value })
                          }
                          required
                        ></textarea>
                      </div>
                      <div className="row mb-3">
                        <div className="col">
                          <label className="form-label">Priority</label>
                          <select
                            className="form-select"
                            value={newTask.priority}
                            onChange={(e) =>
                              setNewTask({ ...newTask, priority: e.target.value })
                            }
                          >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </select>
                        </div>
                        <div className="col">
                          <label className="form-label">Status</label>
                          <select
                            className="form-select"
                            value={newTask.status}
                            onChange={(e) =>
                              setNewTask({ ...newTask, status: e.target.value })
                            }
                          >
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Due Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={newTask.dueDate}
                          onChange={(e) =>
                            setNewTask({ ...newTask, dueDate: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="modal-footer px-0 pb-0">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            setShowModal(false);
                            setEditingTask(null);
                          }}
                        >
                          Cancel
                        </button>
                        <button type="submit" className="btn btn-primary">
                          {editingTask ? '🔄 Update Task' : '🌱 Add Task'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-backdrop show"></div>
          </>
        )}
      </div>
    </div>
  );
}

// Utility functions for color coding
function getPriorityColor(priority) {
  switch (priority) {
    case "High":
      return "danger";
    case "Medium":
      return "warning";
    case "Low":
      return "success";
    default:
      return "secondary";
  }
}

function getStatusColor(status) {
  switch (status) {
    case "Completed":
      return "success";
    case "In Progress":
      return "primary";
    case "To Do":
      return "secondary";
    default:
      return "secondary";
  }
}

export default Tasks;
