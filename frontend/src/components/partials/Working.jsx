import React from 'react'

const Working = () => {
  return (
    <div>
      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">How SkillSwap Works</h2>
          <p className="text-gray-600 mb-12">Simple steps to start your skill exchange journey</p>
          <div className="grid md:grid-cols-3 gap-12">

            <div className="flex flex-col items-center">
            <i className="fas fa-user-plus text-5xl text-purple-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Profile</h3>
            <p className="text-gray-600">
              List skills you can teach and what you want to learn. Build your learning portfolio.
            </p>
            </div>

            <div className="flex flex-col items-center">
            <i className="fas fa-handshake text-5xl text-purple-600 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matched</h3>
            <p className="text-gray-600">
              Our smart algorithm connects you with perfect skill exchange partners.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <i className="fas fa-calendar-alt text-5xl text-sky-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule & Learn</h3>
            <p className="text-gray-600">
              Book sessions, chat with partners, and start your skill exchange journey.
            </p>
          </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default Working
