"use client"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-7 md:gap-x-12">
          {/* Colonne 1 : Logo + Slogan - Plus large */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">simple.sales</h3>
            <p className="text-gray-300 leading-relaxed">
              Transformer la complexité du terrain en un plan d'action d'une clarté redoutable.
            </p>
            <Button
              onClick={() => window.open("https://www.linkedin.com/in/edouard-tiem", "_blank")}
              className="bg-[#0077B5] hover:bg-[#005885] text-white px-5 py-2 rounded-lg flex items-center gap-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connectons-nous
            </Button>
          </div>

          {/* Colonne 2 : Nos Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Nos Solutions</h3>
            <div className="space-y-2">
              <a href="/notre-approche" className="block text-gray-300 hover:text-white transition-colors">
                Notre approche
              </a>
            </div>
          </div>

          {/* Colonne 3 : Les Ressources */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Les Ressources</h3>
            <div className="space-y-2">
              <a href="/nos-guides" className="block text-gray-300 hover:text-white transition-colors">
                Nos guides
              </a>
            </div>
          </div>

          {/* Colonne 4 : Légal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Légal</h3>
            <div className="space-y-2">
              <a href="/mentions-legales" className="block text-gray-300 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="/politique-confidentialite" className="block text-gray-300 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="/conditions-generales" className="block text-gray-300 hover:text-white transition-colors">
                CGU/CGV
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t border-gray-700 mt-7 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            © {(() => {
              const now = new Date()
              const currentYear = now.getFullYear()
              const currentMonth = now.getMonth()
              const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1
              const previousMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear
              const monthNames = [
                "Janvier",
                "Février",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juillet",
                "Août",
                "Septembre",
                "Octobre",
                "Novembre",
                "Décembre",
              ]
              return `${monthNames[previousMonth]} ${previousMonthYear}`
            })()} Simple Sales. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
