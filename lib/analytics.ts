// Fonction helper pour tracker les événements GA4
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...parameters,
      page_location: window.location.href,
      page_title: document.title,
    })
  }
}

// Hook pour tracker le défilement
export function useScrollTracking(variant: "original" | "ai_version") {
  if (typeof window === "undefined") return

  const scrollTracked = {
    "25": false,
    "50": false,
    "75": false,
    "90": false,
  }

  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
    )

    // Track 25% scroll
    if (scrollPercent >= 25 && !scrollTracked["25"]) {
      scrollTracked["25"] = true
      trackEvent("scroll", {
        scroll_depth: 25,
        variant: variant,
      })
    }

    // Track 50% scroll
    if (scrollPercent >= 50 && !scrollTracked["50"]) {
      scrollTracked["50"] = true
      trackEvent("scroll", {
        scroll_depth: 50,
        variant: variant,
      })
    }

    // Track 75% scroll
    if (scrollPercent >= 75 && !scrollTracked["75"]) {
      scrollTracked["75"] = true
      trackEvent("scroll", {
        scroll_depth: 75,
        variant: variant,
      })
    }

    // Track 90% scroll
    if (scrollPercent >= 90 && !scrollTracked["90"]) {
      scrollTracked["90"] = true
      trackEvent("scroll", {
        scroll_depth: 90,
        variant: variant,
      })
    }
  }

  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}
