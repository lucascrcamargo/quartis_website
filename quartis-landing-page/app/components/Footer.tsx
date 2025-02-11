import { Button } from "@/components/ui/button"
import { Logo } from "./ui/logo"

export default function Footer() {
  return (
    <footer className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Logo size="lg" className="mb-4" />
            <p className="text-gray-400">Seamless cross-border real-time payments</p>
          </div>
          <div className="mt-8 md:mt-0">
            <a href="mailto:lucas.camargo@berkeley.edu">
              <Button className="bg-gradient-to-r from-[#D2AC47] via-[#F7EF8A] to-[#AE8625] text-[#1B1C1D] font-semibold">
                Email Us
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Quartis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

