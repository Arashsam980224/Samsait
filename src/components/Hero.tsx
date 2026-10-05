import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentEmoji, setCurrentEmoji] = useState(0)
  const emojis = ['🚀', '🌈', '⭐', '🎨', '📖', '🏆', '🦁', '🎯']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % emojis.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 text-6xl animate-float opacity-30">⭐</div>
        <div className="absolute top-40 left-20 text-5xl animate-float opacity-30" style={{ animationDelay: '1s' }}>🌟</div>
        <div className="absolute bottom-40 right-20 text-4xl animate-float opacity-30" style={{ animationDelay: '0.5s' }}>✨</div>
        <div className="absolute bottom-20 left-10 text-5xl animate-float opacity-30" style={{ animationDelay: '1.5s' }}>💫</div>
        <div className="absolute top-60 right-1/3 text-3xl animate-float opacity-20" style={{ animationDelay: '2s' }}>🎈</div>
        <div className="absolute bottom-60 left-1/3 text-3xl animate-float opacity-20" style={{ animationDelay: '0.8s' }}>🎪</div>
      </div>

      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Profile Avatar */}
        <div className="mb-8 relative inline-block">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 mx-auto shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-7xl md:text-8xl">
              👦
            </div>
          </div>
          <div className="absolute -top-2 -right-2 text-4xl animate-sparkle">
            {emojis[currentEmoji]}
          </div>
          <div className="absolute -bottom-2 -left-2 text-3xl animate-bounce-slow">🎓</div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            سلام! من آراد هستم
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
          دانش‌آموز کلاس دوم دبستان 📚
        </p>

        {/* Description */}
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto leading-relaxed">
          به دنیای رنگارنگ من خوش آمدید! 🌈 اینجا پر از بازی، یادگیری، 
          خلاقیت و ماجراجویی است. بیایید با هم یاد بگیریم و لذت ببریم! 🎉
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg card-hover transition-all duration-300">
            <div className="text-3xl mb-2">📖</div>
            <div className="text-2xl font-bold text-purple-600">۱۲</div>
            <div className="text-sm text-gray-500">کتاب خوانده</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg card-hover transition-all duration-300">
            <div className="text-3xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-orange-500">۸</div>
            <div className="text-sm text-gray-500">جایزه کسب کرده</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg card-hover transition-all duration-300">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-2xl font-bold text-pink-500">۲۵</div>
            <div className="text-sm text-gray-500">نقاشی کشیده</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg card-hover transition-all duration-300">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-2xl font-bold text-yellow-500">۱۵۰</div>
            <div className="text-sm text-gray-500">ستاره جمع کرده</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#education"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🚀 شروع یادگیری
          </a>
          <a
            href="#fun"
            className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            🎮 بازی و سرگرمی
          </a>
        </div>
      </div>
    </div>
  )
}
