import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import QuoteList from "./components/QuoteList";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My React App</h1>

        {/* Buttons */}
        <div className="flex gap-2 mb-6">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>

        {/* Card */}
        <Card title="Example Card">
          <p>This is the content inside the card.</p>
        </Card>

        {/* Task Manager */}
        <div className="my-8">
          <TaskManager />
        </div>

        {/* Quotes Section */}
        <div className="my-8">
          <QuoteList />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
