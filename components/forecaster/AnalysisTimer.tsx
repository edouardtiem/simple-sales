"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, AlertTriangle } from "lucide-react"

interface AnalysisTimerProps {
  duration: number // in seconds
  onTimeUp: () => void
  isActive: boolean
}

export default function AnalysisTimer({ duration, onTimeUp, isActive }: AnalysisTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isWarning, setIsWarning] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1

        // Warning when 30 seconds left
        if (newTime <= 30 && !isWarning) {
          setIsWarning(true)
        }

        // Time's up
        if (newTime <= 0) {
          clearInterval(interval)
          onTimeUp()
          return 0
        }

        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isActive, onTimeUp, isWarning])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const progressPercentage = ((duration - timeLeft) / duration) * 100
  const timePercentage = (timeLeft / duration) * 100

  if (!isActive) return null

  return (
    <Card
      className={`fixed top-4 right-4 z-50 ${isWarning ? "border-amber-500 bg-amber-50" : "border-emerald-500 bg-emerald-50"}`}
    >
      <CardContent className="pt-4">
        <div className="flex items-center gap-3 min-w-[200px]">
          <div className={`p-2 rounded-full ${isWarning ? "bg-amber-100" : "bg-emerald-100"}`}>
            {isWarning ? (
              <AlertTriangle className="w-4 h-4 text-amber-600" />
            ) : (
              <Clock className="w-4 h-4 text-emerald-600" />
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className={`text-sm font-medium ${isWarning ? "text-amber-800" : "text-emerald-800"}`}>
                Analyse gratuite
              </span>
              <span className={`text-lg font-bold ${isWarning ? "text-amber-900" : "text-emerald-900"}`}>
                {formatTime(timeLeft)}
              </span>
            </div>

            <Progress
              value={timePercentage}
              className={`h-2 ${isWarning ? "[&>div]:bg-amber-500" : "[&>div]:bg-emerald-500"}`}
            />

            {isWarning && <p className="text-xs text-amber-700 mt-1">Temps presque écoulé !</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
