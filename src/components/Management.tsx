import { useState } from 'react'

type TabType = 'schedule' | 'money' | 'tasks'

interface Task {
  id: number
  text: string
  done: boolean
  reward: number
}

interface Transaction {
  id: number
  text: string
  amount: number
  type: 'income' | 'expense'
}

export default function Management() {
  const [activeTab, setActiveTab] = useState<TabType>('schedule')

  const tabs = [
    { id: 'schedule' as TabType, label: '📅 برنامه روزانه', icon: '📅' },
    { id: 'tasks' as TabType, label: '✅ کارها', icon: '✅' },
    { id: 'money' as TabType, label: '💰 پول توجیبی', icon: '💰' },
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              📋 بخش مدیریت
            </span>
          </h2>
          <p className="text-lg text-gray-600">یاد بگیر چطور وقت و پولت رو مدیریت کنی!</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-purple-100 shadow'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'schedule' && <ScheduleSection />}
        {activeTab === 'tasks' && <TasksSection />}
        {activeTab === 'money' && <MoneySection />}
      </div>
    </div>
  )
}

function ScheduleSection() {
  const schedule = [
    { time: '۷:۰۰', activity: 'بیدار شدن و صبحانه', emoji: '🌅', done: true },
    { time: '۸:۰۰', activity: 'رفتن به مدرسه', emoji: '🏫', done: true },
    { time: '۱۲:۰۰', activity: 'ناهار و استراحت', emoji: '🍽️', done: true },
    { time: '۱۴:۰۰', activity: 'تکالیف مدرسه', emoji: '📝', done: false },
    { time: '۱۵:۳۰', activity: 'بازی و ورزش', emoji: '⚽', done: false },
    { time: '۱۷:۰۰', activity: 'مطالعه و نقاشی', emoji: '🎨', done: false },
    { time: '۱۸:۳۰', activity: 'شام و خانواده', emoji: '👨‍👩‍👦', done: false },
    { time: '۲۰:۰۰', activity: 'کتاب خواندن', emoji: '📖', done: false },
    { time: '۲۱:۰۰', activity: 'خواب', emoji: '🌙', done: false },
  ]

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">📅 برنامه امروز</h3>
      
      <div className="space-y-3">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
              item.done ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50 hover:bg-purple-50'
            }`}
          >
            <span className="text-sm font-mono text-gray-500 w-12">{item.time}</span>
            <span className="text-2xl">{item.emoji}</span>
            <span className={`flex-1 font-medium ${item.done ? 'text-green-700 line-through' : 'text-gray-700'}`}>
              {item.activity}
            </span>
            {item.done && <span className="text-green-500 text-xl">✓</span>}
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-2xl text-center">
        <p className="text-blue-700 font-medium">
          💡 نکته: هر روز برنامه‌ات رو دنبال کن تا ستاره بگیری! ⭐
        </p>
      </div>
    </div>
  )
}

function TasksSection() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'تکالیف ریاضی', done: false, reward: 2 },
    { id: 2, text: 'خواندن کتاب داستان', done: false, reward: 1 },
    { id: 3, text: 'مرتب کردن اتاق', done: false, reward: 3 },
    { id: 4, text: 'تمرین نقاشی', done: false, reward: 2 },
    { id: 5, text: 'کمک به مامان', done: false, reward: 5 },
  ])
  const [newTask, setNewTask] = useState('')

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false, reward: 1 }])
      setNewTask('')
    }
  }

  const totalStars = tasks.filter(t => t.done).reduce((sum, t) => sum + t.reward, 0)

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">✅ لیست کارها</h3>
        <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-bold">
          ⭐ {totalStars} ستاره
        </span>
      </div>

      {/* Add Task */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
          placeholder="کار جدید اضافه کن..."
          className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 outline-none transition-all"
        />
        <button
          onClick={addTask}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:scale-105 transition-all"
        >
          +
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${
              task.done ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50 hover:bg-purple-50 border-2 border-transparent'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
              task.done ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}>
              {task.done ? '✓' : ''}
            </div>
            <span className={`flex-1 font-medium ${task.done ? 'text-green-700 line-through' : 'text-gray-700'}`}>
              {task.text}
            </span>
            <span className="text-yellow-500 font-bold">+{task.reward}⭐</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-purple-50 rounded-2xl text-center">
        <p className="text-purple-700 font-medium">
          🎯 هر کار رو انجام بده و ستاره جمع کن! ۱۰ ستاره = ۱ جایزه!
        </p>
      </div>
    </div>
  )
}

function MoneySection() {
  const [balance, setBalance] = useState(5000)
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, text: 'پول توجیبی هفتگی', amount: 5000, type: 'income' },
    { id: 2, text: 'خرید دفتر', amount: 1500, type: 'expense' },
  ])
  const [newAmount, setNewAmount] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [transType, setTransType] = useState<'income' | 'expense'>('income')

  const addTransaction = () => {
    const amount = parseInt(newAmount)
    if (amount > 0 && newDesc.trim()) {
      const newTrans: Transaction = {
        id: Date.now(),
        text: newDesc,
        amount: amount,
        type: transType,
      }
      setTransactions([newTrans, ...transactions])
      setBalance(transType === 'income' ? balance + amount : balance - amount)
      setNewAmount('')
      setNewDesc('')
    }
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">💰 قلک من</h3>

      {/* Balance */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-6 text-center text-white mb-6 shadow-lg">
        <p className="text-sm opacity-80 mb-1">موجودی قلک</p>
        <p className="text-4xl font-black">{balance.toLocaleString('fa-IR')} تومان</p>
        <p className="text-sm opacity-80 mt-2">💰 پس‌انداز کن، بزرگ بشو!</p>
      </div>

      {/* Add Transaction */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-6">
        <h4 className="font-bold mb-3">ثبت تراکنش جدید:</h4>
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => setTransType('income')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all ${
              transType === 'income' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            💚 درآمد
          </button>
          <button
            onClick={() => setTransType('expense')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all ${
              transType === 'expense' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            ❤️ خرج
          </button>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            placeholder="توضیح..."
            className="flex-1 px-3 py-2 rounded-xl border-2 border-gray-200 focus:border-purple-400 outline-none"
          />
          <input
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            placeholder="مبلغ"
            className="w-24 px-3 py-2 rounded-xl border-2 border-gray-200 focus:border-purple-400 outline-none"
          />
          <button
            onClick={addTransaction}
            className="px-4 py-2 bg-purple-500 text-white rounded-xl font-bold hover:bg-purple-600 transition-all"
          >
            +
          </button>
        </div>
      </div>

      {/* Transactions */}
      <div className="space-y-2">
        <h4 className="font-bold text-gray-700 mb-2">تراکنش‌ها:</h4>
        {transactions.map((trans) => (
          <div
            key={trans.id}
            className={`flex items-center justify-between p-3 rounded-xl ${
              trans.type === 'income' ? 'bg-green-50' : 'bg-red-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{trans.type === 'income' ? '💚' : '❤️'}</span>
              <span className="font-medium text-gray-700">{trans.text}</span>
            </div>
            <span className={`font-bold ${trans.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
              {trans.type === 'income' ? '+' : '-'}{trans.amount.toLocaleString('fa-IR')}
            </span>
          </div>
        ))}
      </div>

      {/* Savings Goal */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-2xl">
        <h4 className="font-bold text-yellow-700 mb-2">🎯 هدف پس‌انداز:</h4>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-yellow-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-yellow-400 to-orange-400 h-4 rounded-full transition-all"
              style={{ width: `${Math.min((balance / 20000) * 100, 100)}%` }}
            />
          </div>
          <span className="text-sm font-bold text-yellow-700">{Math.round((balance / 20000) * 100)}%</span>
        </div>
        <p className="text-xs text-yellow-600 mt-2">هدف: خرید دوچرخه (۲۰,۰۰۰ تومان)</p>
      </div>
    </div>
  )
}
