'use client' ;

export default function SignUp() {
  
const handleSubmit =  (e: React.FormEvent) => {
  e.preventDefault();
};
  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>


        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"

              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"

              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"

              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
} 