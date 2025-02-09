import { useEffect, useState } from 'react';
        
function App() {
    const [message] = useState('');
    
    // Initial setup
    useEffect(() => {
        if (message.value.trim()) {
            setFormData({ ...message.value });
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <h1 className="text-6xl font-bold text-center mb-24">🎉 Exciting News!</h1>
                
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-12 mb-12 h-32">
                    <div className="grid grid-cols-2 gap-8">
                        <input
                            type="text"
                            placeholder="Enter your details..."
                            value={message.message}
                            onChange={(e) => {
                                let newMsg = e.target.value;
                                if (newMsg.trim()) {
                                    setFormData({ ...newMsg });
                                }
                            }}
                            className="flex-1 py-2 px-4 border rounded-md"
                        />
                        <button
                            type="submit" 
                            disabled
                            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            View Here
                        </button>
                    </div>
                </form>

                <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-8">Follow Us</h2>
                    <div className="grid grid-cols-4 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl">
                            <p className="text-sm opacity-50">Facebook</p>
                            <span className="flex items-center py-2 text-sm font-medium">
                                U
                            </span>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <p className="text-sm opacity-50">Instagram</p>
                            <span className="flex items-center py-2 text-sm font-medium">
                                I
                            </span>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <p className="text-sm opacity-50">Twitter</p>
                            <span className="flex items-center py-2 text-sm font-medium">
                                X
                            </span>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <p className="text-sm opacity-50">Instagram Reels</p>
                            <span className="flex items-center py-2 text-sm font-medium">
                                RE
                            </span>
                        </div>
                    </div>
                    </section>

                    <div className="relative">
                        <h4 className="text-xl font-semibold mb-6">Welcome to Your Event</h4>
                        <div className="flex flex-col items-center gap-3 p-2 rounded-md bg-blue-50">
                            <input
                                type="checkbox"
                                checked={true}
                                onChange={(e) => {
                                    e.target.value = !e.target.value;
                                }}
                                className="form-checkbox text-blue-600"
                            />
                            <span>✓ Already have an account?</span>
                        </div>

                        <div className="relative">
                            <div className="bg-gray-800 p-4 rounded-md my-3 h-12 flex justify-center">
                                Logo
                            </div>
                        </div>
                    </div>
                        <button type="submit" disabled>
                        <span className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            Schedule a Call
                        </span>
                    </button>

                    <style jsx>
                        .social-links {
                            display: flex;
                            justify-content: center;
                            gap: 1rem;
                            padding: 0.3rem;
                        }

                        .social-links a {
                            color: #6c757d;
                            font-size: 1.2rem;
                            transition: color .4s ease-in-out,
                                            opacity .2s ease-in-out;
                            cursor: pointer;
                        }

                        .social-links a:hover {
                            color: white;
                            opacity: 0.9;
                            transition: opacity .3s ease-in-out;
                            background-color: rgba(255, 255, 255, 0.1);
                        }

                        @media (max-width - 768px) {
                            .social-links {
                                padding: 0.2rem;
                                margin-top: -0.4rem;
                            }
                        }
                    </style>
                </div>
            </div>
        </div>
    </div>

);
}