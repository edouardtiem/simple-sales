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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="browser-window">
        <div className="browser-header">
          <div className="browser-controls">
            <div className="control-btn close"></div>
            <div className="control-btn minimize"></div>
            <div className="control-btn maximize"></div>
          </div>
          <div className="browser-address-bar">
            <div className="address-bar">
              <span className="protocol">https://</span>
              <span className="domain">app.simple-sales.fr/pipeline</span>
            </div>
          </div>
        </div>

        <div className="ss-pipe-compare">
          <style jsx>{`
            .browser-window {
              background: #f5f5f5;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
              max-width: 800px;
              margin: 0 auto;
            }

            .browser-header {
              background: linear-gradient(180deg, #e5e5e5 0%, #d4d4d4 100%);
              padding: 12px 16px;
              display: flex;
              align-items: center;
              gap: 12px;
              border-bottom: 1px solid #c4c4c4;
            }

            .browser-controls {
              display: flex;
              gap: 8px;
            }

            .control-btn {
              width: 12px;
              height: 12px;
              border-radius: 50%;
              cursor: pointer;
            }

            .control-btn.close {
              background: #ff5f57;
            }

            .control-btn.minimize {
              background: #ffbd2e;
            }

            .control-btn.maximize {
              background: #28ca42;
            }

            .browser-address-bar {
              flex: 1;
              max-width: 400px;
            }

            .address-bar {
              background: white;
              border: 1px solid #c4c4c4;
              border-radius: 6px;
              padding: 6px 12px;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
              font-size: 13px;
              color: #666;
            }

            .protocol {
              color: #999;
            }

            .domain {
              color: #333;
              font-weight: 500;
            }

            .ss-pipe-compare {
              background: white;
              padding: 2rem;
              position: relative;
              overflow: hidden;
              min-height: 500px;
            }

            .ss-pipe-compare .pipeline-container {
              position: relative;
              height: 450px;
              border-radius: 12px;
              overflow: hidden;
              background: white;
              box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
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
              padding: 1.5rem;
              background: white;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
            }

            .ss-pipe-compare .pipeline-after {
              clip-path: polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%);
            }

            .ss-pipe-compare .pipeline-before {
              clip-path: polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%);
            }

            .ss-pipe-compare .column {
              background: linear-gradient(145deg, #f8fafc 0%, #f1f5f9 100%);
              border-radius: 8px;
              padding: 1rem;
              border-top: 4px solid #e2e8f0;
              box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            }

            .ss-pipe-compare .column-title {
              font-weight: 700;
              color: #1F2937;
              margin-bottom: 1rem;
              font-size: 1rem;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
              border-bottom: 2px solid #e2e8f0;
              padding-bottom: 0.5rem;
              text-align: center;
              background: linear-gradient(145deg, #f1f5f9 0%, #e2e8f0 100%);
              margin: -1rem -1rem 1rem -1rem;
              padding: 0.75rem 1rem;
              border-radius: 8px 8px 0 0;
            }

            .ss-pipe-compare .deal-card {
              background: white;
              border-radius: 6px;
              padding: 0.875rem;
              margin-bottom: 0.75rem;
              border-left: 4px solid;
              box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              transition: all 0.2s ease;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
            }

            .ss-pipe-compare .deal-card:hover {
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            }

            .ss-pipe-compare .deal-stuck {
              border-left-color: #EF4444;
              background: linear-gradient(145deg, #ffffff 0%, #fef2f2 100%);
            }

            .ss-pipe-compare .deal-fresh {
              border-left-color: #22c55e;
              background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%);
            }

            .ss-pipe-compare .deal-won {
              border-left-color: #2563eb;
              background: linear-gradient(145deg, #ffffff 0%, #eff6ff 100%);
            }

            .ss-pipe-compare .deal-title {
              font-weight: 600;
              color: #1F2937;
              font-size: 0.9rem;
              margin-bottom: 0.375rem;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
            }

            .ss-pipe-compare .deal-amount {
              font-weight: 700;
              color: #1F2937;
              font-size: 0.85rem;
              margin-bottom: 0.25rem;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
            }

            .ss-pipe-compare .deal-days {
              font-size: 0.8rem;
              color: #6b7280;
              font-weight: 500;
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
            }

            .ss-pipe-compare .deal-days.stuck {
              color: #EF4444;
              font-weight: 600;
            }

            .ss-pipe-compare .deal-days.fresh {
              color: #22c55e;
              font-weight: 600;
            }

            .ss-pipe-compare .deal-days.won {
              color: #2563eb;
              font-weight: 600;
            }

            .ss-pipe-compare .slider {
              position: absolute;
              top: 0;
              bottom: 0;
              width: 6px;
              background: linear-gradient(180deg, #F6C343 0%, #f59e0b 100%);
              cursor: ew-resize;
              z-index: 10;
              left: ${sliderPosition}%;
              transform: translateX(-50%);
              border-radius: 3px;
              box-shadow: 0 4px 12px rgba(246, 195, 67, 0.4);
            }

            .ss-pipe-compare .slider-handle {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 24px;
              height: 48px;
              background: linear-gradient(145deg, #F6C343 0%, #f59e0b 100%);
              border-radius: 12px;
              border: 3px solid white;
              box-shadow: 0 4px 16px rgba(0,0,0,0.2);
              cursor: ew-resize;
            }

            .ss-pipe-compare .slider:focus {
              outline: 3px solid #F6C343;
              outline-offset: 3px;
            }

            .ss-pipe-compare .label {
              position: absolute;
              top: 4rem;
              padding: 0.5rem 1rem;
              border-radius: 6px;
              font-weight: 600;
              font-size: 0.8rem;
              z-index: 5;
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
              font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
              text-transform: uppercase;
              letter-spacing: 0.3px;
            }

            .ss-pipe-compare .label-before {
              left: 1.5rem;
              background: linear-gradient(145deg, #EF4444 0%, #dc2626 100%);
              color: white;
            }

            .ss-pipe-compare .label-after {
              right: 1.5rem;
              background: linear-gradient(145deg, #22c55e 0%, #16a34a 100%);
              color: white;
            }

            @media (max-width: 768px) {
              .browser-window {
                max-width: 100%;
              }
              
              .browser-header {
                padding: 10px 12px;
              }
              
              .address-bar {
                font-size: 11px;
                padding: 4px 8px;
              }
              
              .ss-pipe-compare {
                padding: 1.5rem;
              }
              
              .ss-pipe-compare .pipeline-state {
                grid-template-columns: repeat(2, 1fr);
                gap: 0.75rem;
                padding: 1rem;
              }
              
              .ss-pipe-compare .column-title {
                font-size: 0.85rem;
              }
              
              .ss-pipe-compare .deal-card {
                padding: 0.75rem;
              }

              .ss-pipe-compare .pipeline-container {
                height: 400px;
              }
            }
          `}</style>

          <div className="pipeline-container" ref={containerRef}>
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

            <div className="label label-before">Avant</div>
            <div className="label label-after">Après Simple Sales</div>

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
        </div>
      </div>
    </div>
  )
}
