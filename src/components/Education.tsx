import { useState } from 'react'

type GameType = 'math' | 'letters' | 'science' | null

interface Question {
  question: string
  options: string[]
  correct: number
}

const mathQuestions: Question[] = [
  { question: '۵ + ۳ = ؟', options: ['۶', '۷', '۸', '۹'], correct: 2 },
  { question: '۱۰ - ۴ = ؟', options: ['۵', '۶', '۷', '۸'], correct: 1 },
  { question: '۲ × ۳ = ؟', options: ['۵', '۶', '۷', '۸'], correct: 1 },
  { question: '۹ - ۲ = ؟', options: ['۵', '۶', '۷', '۸'], correct: 2 },
  { question: '۴ + ۴ = ؟', options: ['۶', '۷', '۸', '۹'], correct: 2 },
]

const letterQuestions: Question[] = [
  { question: 'کدام حرف صدادار است؟', options: ['ب', 'ا', 'ت', 'س'], correct: 1 },
  { question: 'اولین حرف الفبا کدام است؟', options: ['ب', 'پ', 'ا', 'ت'], correct: 2 },
  { question: 'کلمه "مادر" چند حرف دارد؟', options: ['۳', '۴', '۵', '۶'], correct: 1 },
  { question: 'کدام کلمه با "آ" شروع می‌شود؟', options: ['بابا', 'آسمان', 'توپ', 'سیب'], correct: 1 },
  { question: '"کتاب" جمع آن کدام است؟', options: ['کتابها', 'کتابات', 'کتب', 'کتابان'], correct: 0 },
]

const scienceQuestions: Question[] = [
  { question: 'خورشید یک ... است', options: ['سیاره', 'ستاره', 'ماه', 'ابَر'], correct: 1 },
  { question: 'چند فصل در سال داریم؟', options: ['۲', '۳', '۴', '۵'], correct: 2 },
  { question: 'آب در چه دمایی یخ می‌زند؟', options: ['۱۰ درجه', '۰ درجه', '۵ درجه', '۲۰ درجه'], correct: 1 },
  { question: 'کدام حیوان پرنده است؟', options: ['ماهی', 'گربه', 'عقاب', 'مار'], correct: 2 },
  { question: 'رنگین‌کمان چند رنگ دارد؟', options: ['۵', '۶', '۷', '۸'], correct: 2 },
]

export default function Education() {
  const [activeGame, setActiveGame] = useState<GameType>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const getQuestions = (): Question[] => {
    switch (activeGame) {
      case 'math': return mathQuestions
      case 'letters': return letterQuestions
      case 'science': return scienceQuestions
      default: return []
    }
  }

  const handleAnswer = (index: number) => {
    const questions = getQuestions()
    const correct = index === questions[currentQuestion].correct
    setSelectedAnswer(index)
    setIsCorrect(correct)
    if (correct) setScore(score + 1)
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setIsCorrect(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsCorrect(null)
    setActiveGame(null)
  }

  const games = [
    {
      id: 'math' as GameType,
      title: 'ریاضی',
      emoji: '🔢',
      color: 'from-blue-400 to-cyan-400',
      description: 'جمع، تفریق و ضرب را تمرین کن!'
    },
    {
      id: 'letters' as GameType,
      title: 'فارسی',
      emoji: '📝',
      color: 'from-green-400 to-emerald-400',
      description: 'حروف و کلمات فارسی را یاد بگیر!'
    },
    {
      id: 'science' as GameType,
      title: 'علوم',
      emoji: '🔬',
      color: 'from-purple-400 to-pink-400',
      description: 'دنیای اطرافت را کشف کن!'
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              📚 بخش آموزشی
            </span>
          </h2>
          <p className="text-lg text-gray-600">با بازی و سرگرمی یاد بگیر!</p>
        </div>

        {!activeGame ? (
          /* Game Selection */
          <div className="grid md:grid-cols-3 gap-6">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className="bg-white rounded-3xl p-8 shadow-xl card-hover transition-all duration-300 text-center group"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${game.color} flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {game.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{game.title}</h3>
                <p className="text-gray-500">{game.description}</p>
              </button>
            ))}
          </div>
        ) : showResult ? (
          /* Result */
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto text-center">
            <div className="text-6xl mb-4">
              {score >= 4 ? '🏆' : score >= 3 ? '⭐' : '💪'}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {score >= 4 ? 'عالی بود!' : score >= 3 ? 'آفرین!' : 'تلاش کن!'}
            </h3>
            <p className="text-xl text-gray-600 mb-4">
              امتیاز تو: {score} از {getQuestions().length}
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition-all"
              >
                🔄 بازی جدید
              </button>
              <button
                onClick={() => { setCurrentQuestion(0); setScore(0); setShowResult(false); setSelectedAnswer(null); setIsCorrect(null); }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-bold hover:scale-105 transition-all"
              >
                🔁 تکرار
              </button>
            </div>
          </div>
        ) : (
          /* Quiz */
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500">
                سوال {currentQuestion + 1} از {getQuestions().length}
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold">
                ⭐ {score} امتیاز
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / getQuestions().length) * 100}%` }}
              />
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">
              {getQuestions()[currentQuestion].question}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {getQuestions()[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectedAnswer === null && handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-2xl text-lg font-bold transition-all duration-300 ${
                    selectedAnswer === null
                      ? 'bg-gray-100 hover:bg-purple-100 hover:scale-105 text-gray-700'
                      : index === getQuestions()[currentQuestion].correct
                      ? 'bg-green-100 text-green-700 scale-105'
                      : selectedAnswer === index
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {isCorrect !== null && (
              <div className={`mt-6 text-center text-xl font-bold animate-slide-in ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                {isCorrect ? '✅ آفرین! درست بود!' : '❌ اشتباه بود! دوباره تلاش کن!'}
              </div>
            )}

            <button
              onClick={resetGame}
              className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline"
            >
              بازگشت به انتخاب بازی
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
