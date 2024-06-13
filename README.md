# To-Do List Application

This is a simple To-Do List application built using React, Radix UI, and Tailwind CSS. The application allows users to add, edit, and delete tasks. Radix UI is used for unstyled components, providing accessibility and logic, while Tailwind CSS is used for styling the components.

## Repository Description

This repository contains a React-based To-Do List application that demonstrates how to use Radix UI for unstyled, accessible components and Tailwind CSS for utility-first styling. The app is designed to be simple and intuitive, providing basic functionality to manage a list of tasks.

## Features

- Add a new task to the list.
- Edit an existing task.
- Delete a task from the list.

## Components

The application consists of the following main components:

1. **App.jsx**
   - The main component that holds the state and renders the `Form` and `TodoList` components.
   - Manages the `todos` state and provides functions to delete and edit tasks.

2. **Form.jsx**
   - A form component to add new tasks.
   - Uses a local state to manage the input value.

3. **TodoList.jsx**
   - A component that displays the list of tasks.
   - Receives the `todos` array and functions to delete and edit tasks as props.
