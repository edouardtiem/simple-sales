"use client"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import Footer from "@/components/footer"

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
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">{summary}</p>
            </div>
          )}
        </div>
      </section>

      {/* Section 2: Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">{introduction.title}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {introduction.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-semibold text-[#1a1a1a]">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  )
                }
                return <p key={index}>{paragraph}</p>
              })}
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
                    {symptom.content.split("\n\n").map((paragraph, pIndex) => {
                      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                        return (
                          <p key={pIndex} className="font-semibold text-[#1a1a1a]">
                            {paragraph.replace(/\*\*/g, "")}
                          </p>
                        )
                      }
                      return <p key={pIndex}>{paragraph}</p>
                    })}
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
                        {step.content.split("\n\n").map((paragraph, pIndex) => {
                          if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                            return (
                              <p key={pIndex} className="font-semibold text-[#1a1a1a]">
                                {paragraph.replace(/\*\*/g, "")}
                              </p>
                            )
                          }
                          return <p key={pIndex}>{paragraph}</p>
                        })}
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
              <div className="space-y-4">
                {practicalAction.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={index} className="font-semibold">
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  if (paragraph.includes("•")) {
                    return (
                      <div key={index} className="space-y-2">
                        {paragraph.split("\n").map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    )
                  }
                  return <p key={index}>{paragraph}</p>
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 6: Conclusion */}
      {conclusion && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-center">{conclusion.title}</h2>
            <div className="max-w-3xl mx-auto">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {conclusion.content.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <p key={index} className="font-semibold text-[#1a1a1a]">
                        {paragraph.replace(/\*\*/g, "")}
                      </p>
                    )
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <div key={index} className="space-y-2">
                        {paragraph.split("\n").map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    )
                  }
                  return <p key={index}>{paragraph}</p>
                })}
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
