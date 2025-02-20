
'use client';
import { useState } from "react";

export default function Counter() {
    const[counter, setCounter] = useState(0)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setCounter(counter + 1);
}
    
    return (
        <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{counter}</h1>
            <form onSubmit={handleSubmit}>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition-colors"
                >
                    Incrementar numero
                </button>
            </form>
        </main>
    );
    }
