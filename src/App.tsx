import { useState } from 'react'
import './App.css'

interface Feedback {
	name: string;
	message: string;
}

function App() {

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim() || !message.trim()) return;
      const newFeedback: Feedback = { name, message };
      setFeedbacks([...feedbacks, newFeedback]);
      setName("");
      setMessage("");
    };

  return (
		<>
			<div className="max-w-xl mx-auto p-4 font-sans">
				<h1 className="text-2xl font-bold mb-4 text-blue-700">
					Feedback Collector App
				</h1>
				<form onSubmit={handleSubmit} className="mb-6">
					<label className="block mb-2">
						Name:
						<input
							className="w-full p-2 border rounded mt-1"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</label>
					<label className="block mb-2">
						Message:
						<textarea
							className="w-full p-2 border rounded mt-1"
							rows={4}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
					</label>
					<button
						type="submit"
						className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
					>
						Submit Feedback
					</button>
				</form>

				<div>
					{feedbacks.map((fb, index) => (
						<div key={index} className="border-b py-2">
							<strong>{fb.name}</strong>
							<p>{fb.message}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App
