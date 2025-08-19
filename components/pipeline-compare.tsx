"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

export default function PipelineCompare() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      updatePosition(e.clientX)
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) {
      e.preventDefault()
      updatePosition(e.touches[0].clientX)
    }
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  const updatePosition = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const position = ((clientX - rect.left) / rect.width) * 100
      setSliderPosition(Math.max(0, Math.min(100, position)))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5))
    }
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  const beforeDeals = [
    { id: 1, title: "Acme Corp", amount: "45 000 €", days: "127j", column: 0 },
    { id: 2, title: "TechStart", amount: "32 000 €", days: "98j", column: 1 },
    { id: 3, title: "BigCorp", amount: "180 000 €", days: "156j", column: 1 },
    { id: 4, title: "StartupXYZ", amount: "28 000 €", days: "203j", column: 0 },
    { id: 5, title: "Enterprise Ltd", amount: "95 000 €", days: "91j", column: 2 },
    { id: 6, title: "SME Solutions", amount: "67 000 €", days: "134j", column: 2 },
  ]

  const afterDeals = [
    { id: 1, title: "Acme Corp", amount: "45 000 €", days: "12h", column: 1, status: "fresh" },
    { id: 2, title: "TechStart", amount: "32 000 €", days: "8h", column: 2, status: "fresh" },
    { id: 3, title: "BigCorp", amount: "120 000 €", days: "Fermé", column: 3, status: "won" },
    { id: 4, title: "StartupXYZ", amount: "28 000 €", days: "24h", column: 1, status: "fresh" },
    { id: 5, title: "Enterprise Ltd", amount: "75 000 €", days: "Fermé", column: 3, status: "won" },
    { id: 6, title: "SME Solutions", amount: "67 000 €", days: "36h", column: 2, status: "fresh" },
    { id: 7, title: "NewClient Pro", amount: "89 000 €", days: "6h", column: 0, status: "fresh" },
  ]

  const columns = ["1er RDV", "Proposition", "Négociation", "Gagnés"]

  return (
    <section className="ss-pipe-compare">
      <style jsx>{`
        .ss-pipe-compare {
          background: #F5F1EB;
          padding: 2rem;
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }

        .ss-pipe-compare .pipeline-container {
          position: relative;
          height: 400px;
          border-radius: 8px;
          overflow: hidden;
        }

        .ss-pipe-compare .pipeline-state {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          padding: 1rem;
          background: white;
        }

        .ss-pipe-compare .pipeline-after {
          clip-path: polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%);
        }

        .ss-pipe-compare .pipeline-before {
          clip-path: polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%);
        }

        .ss-pipe-compare .column {
          background: #f8fafc;
          border-radius: 6px;
          padding: 0.75rem;
          border-top: 3px solid #e2e8f0;
        }

        .ss-pipe-compare .column-title {
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
        }

        .ss-pipe-compare .deal-card {
          background: white;
          border-radius: 4px;
          padding: 0.75rem;
          margin-bottom: 0.5rem;
          border-left: 3px solid;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .ss-pipe-compare .deal-stuck {
          border-left-color: #EF4444;
        }

        .ss-pipe-compare .deal-fresh {
          border-left-color: #22c55e;
        }

        .ss-pipe-compare .deal-won {
          border-left-color: #2563eb;
        }

        .ss-pipe-compare .deal-title {
          font-weight: 500;
          color: #1F2937;
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .ss-pipe-compare .deal-amount {
          font-weight: 600;
          color: #1F2937;
          font-size: 0.75rem;
        }

        .ss-pipe-compare .deal-days {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .ss-pipe-compare .deal-days.stuck {
          color: #EF4444;
          font-weight: 500;
        }

        .ss-pipe-compare .deal-days.fresh {
          color: #22c55e;
          font-weight: 500;
        }

        .ss-pipe-compare .deal-days.won {
          color: #2563eb;
          font-weight: 500;
        }

        .ss-pipe-compare .slider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #F6C343;
          cursor: ew-resize;
          z-index: 10;
          left: ${sliderPosition}%;
          transform: translateX(-50%);
        }

        .ss-pipe-compare .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 40px;
          background: #F6C343;
          border-radius: 10px;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .ss-pipe-compare .slider:focus {
          outline: 2px solid #F6C343;
          outline-offset: 2px;
        }

        .ss-pipe-compare .label {
          position: absolute;
          top: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.875rem;
          z-index: 5;
        }

        .ss-pipe-compare .label-before {
          left: 1rem;
          background: #EF4444;
          color: white;
        }

        .ss-pipe-compare .label-after {
          right: 1rem;
          background: #22c55e;
          color: white;
        }

        @media (max-width: 768px) {
          .ss-pipe-compare {
            padding: 1rem;
          }
          
          .ss-pipe-compare .pipeline-state {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            padding: 0.5rem;
          }
          
          .ss-pipe-compare .column-title {
            font-size: 0.75rem;
          }
          
          .ss-pipe-compare .deal-card {
            padding: 0.5rem;
          }
        }
      `}</style>

      <div className="pipeline-container" ref={containerRef}>
        {/* État Avant */}
        <div className="pipeline-state pipeline-before">
          {columns.map((columnTitle, columnIndex) => (
            <div key={`before-${columnIndex}`} className="column">
              <div className="column-title">{columnTitle}</div>
              {beforeDeals
                .filter((deal) => deal.column === columnIndex)
                .map((deal) => (
                  <div key={`before-${deal.id}`} className="deal-card deal-stuck">
                    <div className="deal-title">{deal.title}</div>
                    <div className="deal-amount">{deal.amount}</div>
                    <div className="deal-days stuck">{deal.days}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* État Après */}
        <div className="pipeline-state pipeline-after">
          {columns.map((columnTitle, columnIndex) => (
            <div key={`after-${columnIndex}`} className="column">
              <div className="column-title">{columnTitle}</div>
              {afterDeals
                .filter((deal) => deal.column === columnIndex)
                .map((deal) => (
                  <div key={`after-${deal.id}`} className={`deal-card deal-${deal.status}`}>
                    <div className="deal-title">{deal.title}</div>
                    <div className="deal-amount">{deal.amount}</div>
                    <div className={`deal-days ${deal.status}`}>{deal.days}</div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Labels */}
        <div className="label label-before">Avant</div>
        <div className="label label-after">Après Simple Sales</div>

        {/* Slider */}
        <div
          className="slider"
          role="separator"
          aria-label="Comparer Avant et Après"
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
        >
          <div className="slider-handle"></div>
        </div>
      </div>
    </section>
  )
}
