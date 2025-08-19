"use client"

import { useEffect, useRef, useState } from "react"
import { Chart, type ChartConfiguration, registerables } from "chart.js"
import annotationPlugin from "chartjs-plugin-annotation"

Chart.register(...registerables, annotationPlugin)

export default function ConversionChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!chartRef.current || !isVisible) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: ["Mois -3", "Mois -2", "Mois -1", "Intervention", "Mois 1", "Mois 2", "Mois 3"],
        datasets: [
          {
            label: "Avant",
            data: [13, 12, 11, 11, null, null, null],
            borderColor: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderWidth: 3,
            pointBackgroundColor: "#ef4444",
            pointBorderColor: "#ef4444",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
          },
          {
            label: "Après",
            data: [null, null, null, 11, 15, 18, 22],
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            borderWidth: 3,
            pointBackgroundColor: "#22c55e",
            pointBorderColor: "#22c55e",
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 2000,
          easing: "easeInOutQuart",
        },
        layout: {
          padding: {
            bottom: 20, // Crucial: reserves space within the canvas for labels
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => "",
              label: (context) => `${context.parsed.y}%`,
            },
            displayColors: false,
            backgroundColor: (context) => (context.tooltip.dataPoints[0]?.datasetIndex === 0 ? "#ef4444" : "#22c55e"),
            titleColor: "#ffffff",
            bodyColor: "#ffffff",
            borderWidth: 0,
            cornerRadius: 6,
            padding: 8,
            bodyFont: {
              family: "var(--font-jetbrains-mono)",
              size: 12,
              weight: "bold",
            },
          },
          annotation: {
            annotations: {
              beforeZone: {
                type: "box",
                xMin: -0.5,
                xMax: 3.5,
                yMin: 0,
                yMax: 30,
                backgroundColor: "rgba(156, 163, 175, 0.08)",
                borderWidth: 0,
                z: -1,
              },
              afterZone: {
                type: "box",
                xMin: 2.5,
                xMax: 6.5,
                yMin: 0,
                yMax: 30,
                backgroundColor: "rgba(34, 197, 94, 0.08)",
                borderWidth: 0,
                z: -1,
              },
              line1: {
                type: "line",
                xMin: 3,
                xMax: 3,
                borderColor: "#374151",
                borderWidth: 3,
                borderDash: [8, 4],
                label: {
                  display: true,
                  content: "Intervention Simple Sales",
                  position: "start",
                  backgroundColor: "#1f2937",
                  color: "#ffffff",
                  padding: 8,
                  borderRadius: 4,
                  font: {
                    family: "var(--font-jetbrains-mono)",
                    size: 11,
                    weight: "bold",
                  },
                },
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 30,
            ticks: {
              stepSize: 5,
              callback: (value) => `${value}%`,
              font: {
                family: "var(--font-jetbrains-mono)",
                size: 11,
              },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
          x: {
            ticks: {
              font: {
                family: "var(--font-jetbrains-mono)",
                size: 11,
              },
            },
            grid: {
              display: false,
            },
          },
        },
        elements: {
          line: {
            borderJoinStyle: "round",
          },
        },
      },
    }

    chartInstance.current = new Chart(ctx, config)

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [isVisible])

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div
          className={`browser-window bg-white rounded-lg overflow-hidden mx-auto shadow-2xl transition-all duration-[2400ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="browser-header bg-gray-100 px-4 py-3 flex items-center justify-between border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <div className="flex-1 mx-4">
              <div className="address-bar bg-white rounded-md px-3 py-1 text-sm text-gray-600 font-mono text-center">
                dashboard.simplesales.fr/client
              </div>
            </div>
            <div className="w-16" />
          </div>

          <div className="browser-content p-4 md:p-6">
            <div className="text-center mb-4">
              <h3 className="text-base md:text-xl lg:text-2xl font-medium leading-tight">
                La Stagnation est un Scénario, pas une Fatalité.
              </h3>
              <p className="hidden md:block text-sm text-gray-600 leading-tight mt-2">
                Une illustration basée sur notre analyse de la performance des équipes commerciales B2B
              </p>
            </div>
            <div className="chart-wrapper">
              <canvas ref={chartRef} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .browser-window {
          width: 100%;
        }
        .chart-wrapper {
          position: relative;
          height: 40vh;
          max-height: 350px;
          min-height: 250px;
        }
        
        @media (max-width: 767px) {
          .chart-wrapper {
            min-height: 200px;
            height: 35vh;
          }
          h3 {
            font-size: 1rem;
          }
          .address-bar {
            font-size: 8px;
            padding: 4px 6px;
          }
        }
      `}</style>
    </section>
  )
}
