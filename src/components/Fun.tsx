import { useState, useEffect } from 'react'

type FunGame = 'memory' | 'color' | 'word' | null

// Memory Game Cards
const memoryEmojis = ['🐶', '🐱', '🐼', '🦊', '🐸', '🦋']

export default function Fun() {
  const [activeGame, setActiveGame] = useState<FunGame>(null)

  const games = [
    { id: 'memory' as FunGame, title: 'بازی حافظه', emoji: '🧠', color: 'from-pink-400 to-rose-400', desc: 'کارت‌های یکسان را پیدا کن!' },
    { id: 'color' as FunGame, title: 'حدس رنگ', emoji: '🎨', color: 'from-yellow-400 to-orange-400', desc: 'رنگ درست را انتخاب کن!' },
    { id: 'word' as FunGame, title: 'حدس کلمه', emoji: '🔤', color: 'from-green-400 to-teal-400', desc: 'کلمه مخفی را حدس بزن!' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              🎮 بخش سرگرمی
            </span>
          </h2>
          <p className="text-lg text-gray-600">وقت بازی و خنده!</p>
        </div>

        {!activeGame ? (
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
                <p className="text-gray-500">{game.desc}</p>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setActiveGame(null)}
              className="mb-6 px-4 py-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-all"
            >
              ← بازگشت
            </button>
            
            {activeGame === 'memory' && <MemoryGame />}
            {activeGame === 'color' && <ColorGame />}
            {activeGame === 'word' && <WordGame />}
          </div>
        )}
      </div>
    </div>
  )
}

function MemoryGame() {
  const [cards, setCards] = useState<string[]>([])
  const [flipped, setFlipped] = useState<number[]>([])
  const [matched, setMatched] = useState<number[]>([])
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    initGame()
  }, [])

  const initGame = () => {
    const doubled = [...memoryEmojis, ...memoryEmojis]
    const shuffled = doubled.sort(() => Math.random() - 0.5)
    setCards(shuffled)
    setFlipped([])
    setMatched([])
    setMoves(0)
  }

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return

    const newFlipped = [...flipped, index]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, newFlipped[0], newFlipped[1]])
        setFlipped([])
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  const isWon = matched.length === cards.length

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">🧠 بازی حافظه</h3>
        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          حرکات: {moves}
        </span>
      </div>

      {isWon && (
        <div className="text-center mb-4 animate-slide-in">
          <span className="text-4xl">🎉</span>
          <p className="text-xl font-bold text-green-600">آفرین! بردی!</p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-3">
        {cards.map((emoji, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`aspect-square rounded-2xl text-3xl flex items-center justify-center transition-all duration-300 ${
              flipped.includes(index) || matched.includes(index)
                ? 'bg-purple-100 scale-105'
                : 'bg-gradient-to-r from-purple-400 to-pink-400 hover:scale-105'
            }`}
          >
            {flipped.includes(index) || matched.includes(index) ? emoji : '❓'}
          </button>
        ))}
      </div>

      <button
        onClick={initGame}
        className="mt-6 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:scale-105 transition-all"
      >
        🔄 بازی جدید
      </button>
    </div>
  )
}

function ColorGame() {
  const colors = [
    { name: 'قرمز', color: 'bg-red-500', hex: '#ef4444' },
    { name: 'آبی', color: 'bg-blue-500', hex: '#3b82f6' },
    { name: 'سبز', color: 'bg-green-500', hex: '#22c55e' },
    { name: 'زرد', color: 'bg-yellow-400', hex: '#facc15' },
    { name: 'بنفش', color: 'bg-purple-500', hex: '#a855f7' },
    { name: 'نارنجی', color: 'bg-orange-500', hex: '#f97316' },
  ]

  const [targetColor, setTargetColor] = useState(0)
  const [options, setOptions] = useState<number[]>([])
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)
  const [round, setRound] = useState(1)

  useEffect(() => {
    generateRound()
  }, [round])

  const generateRound = () => {
    const target = Math.floor(Math.random() * colors.length)
    setTargetColor(target)
    
    const opts = [target]
    while (opts.length < 4) {
      const r = Math.floor(Math.random() * colors.length)
      if (!opts.includes(r)) opts.push(r)
    }
    setOptions(opts.sort(() => Math.random() - 0.5))
    setFeedback(null)
  }

  const handleGuess = (index: number) => {
    if (index === targetColor) {
      setScore(score + 1)
      setFeedback('✅ آفرین!')
    } else {
      setFeedback(`❌ اشتباه! جواب: ${colors[targetColor].name}`)
    }
    setTimeout(() => setRound(round + 1), 1500)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto text-center">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">🎨 حدس رنگ</h3>
        <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
          ⭐ {score}
        </span>
      </div>

      <p className="text-lg text-gray-600 mb-4">این رنگ چه نامی دارد؟</p>
      
      <div className={`w-32 h-32 rounded-full mx-auto mb-8 ${colors[targetColor].color} shadow-lg`} />

      {feedback && (
        <p className={`text-xl font-bold mb-4 animate-slide-in ${feedback.includes('✅') ? 'text-green-500' : 'text-red-500'}`}>
          {feedback}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4">
        {options.map((optIndex) => (
          <button
            key={optIndex}
            onClick={() => !feedback && handleGuess(optIndex)}
            disabled={!!feedback}
            className="p-4 rounded-2xl bg-gray-100 text-lg font-bold hover:bg-purple-100 transition-all hover:scale-105"
          >
            {colors[optIndex].name}
          </button>
        ))}
      </div>
    </div>
  )
}

function WordGame() {
  const words = [
    { word: 'سیب', hint: '🍎 یک میوه قرمز', letters: ['س', 'ی', 'ب', 'ت', 'م'] },
    { word: 'گل', hint: '🌸 در باغچه رشد می‌کند', letters: ['گ', 'ل', 'ر', 'ن', 'د'] },
    { word: 'ماه', hint: '🌙 شب‌ها در آسمان است', letters: ['م', 'ا', 'ه', 'ب', 'ک'] },
    { word: 'آب', hint: '💧 وقتی تشنه‌ای می‌خوری', letters: ['آ', 'ب', 'ر', 'ن', 'س'] },
    { word: 'توپ', hint: '⚽ با آن بازی می‌کنی', letters: ['ت', 'و', 'پ', 'د', 'ز'] },
  ]

  const [currentWord, setCurrentWord] = useState(0)
  const [selectedLetters, setSelectedLetters] = useState<string[]>([])
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleLetterClick = (letter: string) => {
    if (selectedLetters.length >= words[currentWord].word.length) return
    const newSelected = [...selectedLetters, letter]
    setSelectedLetters(newSelected)

    if (newSelected.length === words[currentWord].word.length) {
      const guess = newSelected.join('')
      if (guess === words[currentWord].word) {
        setScore(score + 1)
        setFeedback('✅ آفرین! درست حدس زدی!')
      } else {
        setFeedback(`❌ جواب درست: ${words[currentWord].word}`)
      }
    }
  }

  const nextWord = () => {
    setCurrentWord((currentWord + 1) % words.length)
    setSelectedLetters([])
    setFeedback(null)
  }

  const resetLetters = () => {
    setSelectedLetters([])
    setFeedback(null)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto text-center">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">🔤 حدس کلمه</h3>
        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
          ⭐ {score}
        </span>
      </div>

      <p className="text-lg text-gray-600 mb-2">{words[currentWord].hint}</p>
      <p className="text-sm text-gray-400 mb-6">
        ({words[currentWord].word.length} حرف)
      </p>

      {/* Selected letters */}
      <div className="flex justify-center gap-2 mb-6">
        {Array.from({ length: words[currentWord].word.length }).map((_, i) => (
          <div
            key={i}
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${
              selectedLetters[i]
                ? 'bg-purple-100 text-purple-700'
                : 'bg-gray-200 text-gray-400'
            }`}
          >
            {selectedLetters[i] || '_'}
          </div>
        ))}
      </div>

      {feedback && (
        <p className={`text-lg font-bold mb-4 animate-slide-in ${feedback.includes('✅') ? 'text-green-500' : 'text-red-500'}`}>
          {feedback}
        </p>
      )}

      {/* Available letters */}
      <div className="flex justify-center gap-3 flex-wrap mb-6">
        {words[currentWord].letters.map((letter, i) => (
          <button
            key={i}
            onClick={() => handleLetterClick(letter)}
            disabled={!!feedback || selectedLetters.includes(letter)}
            className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 text-white text-xl font-bold hover:scale-110 transition-all disabled:opacity-50"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={resetLetters}
          className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 transition-all"
        >
          🔄 پاک کردن
        </button>
        {feedback && (
          <button
            onClick={nextWord}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full font-bold hover:scale-105 transition-all"
          >
            کلمه بعدی ←
          </button>
        )}
      </div>
    </div>
  )
}
