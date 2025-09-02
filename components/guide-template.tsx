"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react"
import Footer from "@/components/footer"
import type React from "react"

interface ContentUpgradeProps {
  title: string
  description: string
  benefits: string[]
  ctaText: string
}

function ContentUpgrade({ title, description, benefits, ctaText }: ContentUpgradeProps) {
  return (
    <section className="bg-white py-16 px-4 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-[#1a1a1a]">{title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

          <div className="mb-6">
            <ul className="text-left inline-block space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-[#f6c344] font-bold mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f6c344]"
            />
            <button className="bg-[#f6c344] hover:bg-[#f4b82e] text-[#1a1a1a] px-6 py-3 font-medium rounded-lg transition-colors whitespace-nowrap">
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-6">
      <button className="flex w-full items-center justify-between text-left" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="text-lg font-medium pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

interface RelatedGuide {
  title: string
  url: string
  description: string
  category: string
}

interface EnhancedContextualLinkProps {
  guide: RelatedGuide
  explanation: string
}

function EnhancedContextualLink({ guide, explanation }: EnhancedContextualLinkProps) {
  return (
    <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
      <div className="flex flex-col gap-3">
        <div className="text-sm text-gray-700 italic">💡 {explanation}</div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <div className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">{guide.category}</div>
            <p className="text-sm text-gray-700">{guide.description}</p>
          </div>
          <Link
            href={guide.url}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group self-start sm:self-center"
          >
            <span className="mr-1">{guide.title}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function processContent(content: string, guideId?: string): React.ReactNode[] {
  if (!content) return []

  return content.split("\n\n").map((paragraph, index) => {
    // Check if this is a numbered list (starts with "1. " or contains multiple "X. " patterns)
    const numberedListRegex = /^\d+\.\s+/
    const multipleNumberedItems = paragraph.split("\n").filter((line) => numberedListRegex.test(line.trim()))

    if (multipleNumberedItems.length > 1) {
      const listItems = paragraph
        .split("\n")
        .filter((line) => numberedListRegex.test(line.trim()))
        .map((line) => line.replace(numberedListRegex, "").trim())
        .map((item) => item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))

      return (
        <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
          {listItems.map((item, itemIndex) => (
            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      )
    }

    // Check if this is a bulleted list (starts with "• ", "- ", or "* ")
    const bulletListRegex = /^[•\-*]\s+/
    const multipleBulletItems = paragraph.split("\n").filter((line) => bulletListRegex.test(line.trim()))

    if (multipleBulletItems.length > 1) {
      const listItems = paragraph
        .split("\n")
        .filter((line) => bulletListRegex.test(line.trim()))
        .map((line) => line.replace(bulletListRegex, "").trim())
        .map((item) => item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))

      return (
        <ul key={index} className="list-disc list-inside space-y-2 ml-4">
          {listItems.map((item, itemIndex) => (
            <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )
    }

    // Process **bold** text within regular paragraphs
    const processedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    // Placeholder for contextual links logic, which will be handled by parent component
    return <p key={index} dangerouslySetInnerHTML={{ __html: processedParagraph }} />
  })
}

interface GuideTemplateProps {
  category: string
  title: string
  summary?: string
  introduction: { title: string; content: string }
  symptoms?: Array<{ title: string; content: string }>
  steps?: Array<{ title: string; content: string }>
  practicalAction?: {
    title: string
    content: string
  }
  conclusion?: {
    title: string
    content: string
  }
  contentUpgrade?: ContentUpgradeProps
  faq?: FAQItem[]
  backLink?: string
  guideId?: string
  nextGuide?: RelatedGuide
  relatedGuides?: RelatedGuide[]
}

function GuideBreadcrumbs({ currentGuide, nextGuide }: { currentGuide: string; nextGuide?: RelatedGuide }) {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Parcours Simple Sales</h3>
          <p className="text-sm text-gray-600">Une approche complète pour optimiser vos ventes</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <div className="flex-1 text-center">
            <div className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mx-auto mb-2">
              ✓
            </div>
            <div className="text-sm font-medium text-gray-800">Guide actuel</div>
          </div>

          {nextGuide && (
            <>
              <div className="hidden sm:block w-8 h-px bg-gray-300"></div>
              <div className="sm:hidden w-px h-8 bg-gray-300"></div>

              <div className="flex-1 text-center">
                <Link href={nextGuide.url} className="group">
                  <div className="bg-white border-2 border-gray-300 group-hover:border-[#f6c344] rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium mx-auto mb-2 transition-colors">
                    2
                  </div>
                  <div className="text-sm font-medium text-gray-600 group-hover:text-[#1a1a1a] transition-colors">
                    {nextGuide.category}
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default function GuideTemplate({
  category,
  title,
  summary,
  introduction,
  symptoms = [],
  steps = [],
  practicalAction,
  conclusion,
  contentUpgrade,
  faq = [],
  backLink = "/nos-guides",
  guideId,
  nextGuide,
  relatedGuides = [],
}: GuideTemplateProps) {
  return (
    <div className="min-h-screen bg-[#f5f1eb] text-[#1a1a1a] font-sans">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#f5f1eb] px-4 py-4 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <a href="/" className="text-sm font-mono text-[#1a1a1a] hover:opacity-70 transition-opacity cursor-pointer">
              simple.sales
            </a>
            <Link href={backLink} className="text-sm text-gray-600 hover:text-[#1a1a1a] transition-colors">
              ← Retour aux guides
            </Link>
          </div>
        </div>
      </div>

      {/* Section 1: Title and Introduction */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-[#f6c344] text-[#1a1a1a] text-sm font-medium px-4 py-2 rounded-full mb-6">
            {category}
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight">{title}</h1>
          {summary && (
            <div className="max-w-3xl mx-auto mb-8">
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed">{processContent(summary, guideId)}</div>
            </div>
          )}
        </div>
      </section>

      {nextGuide && <GuideBreadcrumbs currentGuide={guideId || ""} nextGuide={nextGuide} />}

      {/* Section 2: Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">{introduction.title}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {processContent(introduction.content, guideId)}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Symptoms */}
      {symptoms.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Les Symptômes à Identifier</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              {symptoms.map((symptom, index) => (
                <div key={index}>
                  <h3 className="text-xl font-medium mb-4 border-l-4 border-[#f6c344] pl-4">{symptom.title}</h3>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {processContent(symptom.content, guideId)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Upgrade */}
      {contentUpgrade && <ContentUpgrade {...contentUpgrade} />}

      {/* Section 4: Method Steps */}
      {steps.length > 0 && (
        <section className="py-16 px-4 bg-gray-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">
              Notre Méthode en {steps.length} Étapes
            </h2>
            <div className="space-y-12 max-w-3xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <span className="bg-[#f6c344] text-[#1a1a1a] rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium flex-shrink-0 mt-1">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                      <div className="text-gray-700 leading-relaxed space-y-4">
                        {processContent(step.content, guideId)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 5: Practical Action */}
      {practicalAction && (
        <section className="py-16 px-4 bg-[#f6c344]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center text-[#1a1a1a]">
              {practicalAction.title}
            </h2>
            <div className="max-w-3xl mx-auto text-[#1a1a1a]">
              <div className="space-y-4">{processContent(practicalAction.content, guideId)}</div>

              {relatedGuides.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#1a1a1a]/20">
                  <h3 className="text-xl font-medium mb-6 text-center text-[#1a1a1a]">Guides Complémentaires</h3>
                  <div className="space-y-4">
                    {relatedGuides.map((guide, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="flex-1">
                            <div className="text-xs font-medium text-[#1a1a1a]/70 uppercase tracking-wide mb-2">
                              {guide.category}
                            </div>
                            <h4 className="text-lg font-medium text-[#1a1a1a] mb-2">{guide.title}</h4>
                            <p className="text-[#1a1a1a]/80 text-sm leading-relaxed">{guide.description}</p>
                          </div>
                          <Link
                            href={guide.url}
                            className="inline-flex items-center bg-[#1a1a1a] text-[#f6c344] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#1a1a1a]/90 transition-colors group self-start sm:self-center"
                          >
                            <span className="mr-2">Découvrir</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Section 6: Conclusion */}
      {conclusion && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">{conclusion.title}</h2>
            <div className="max-w-3xl mx-auto">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {processContent(conclusion.content, guideId)}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 7: FAQ */}
      {faq.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Questions Fréquentes</h2>
            <div className="space-y-2">
              {faq.map((item, index) => (
                <FAQAccordion key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  )
}
