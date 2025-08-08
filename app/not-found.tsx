import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-primary mb-4" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "hsl(var(--primary))"}}>404</h1>
          <h2 className="text-headline mb-4">Page Not Found</h2>
          <p className="text-body text-muted-foreground mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="inline-flex items-center">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" aria-hidden="true" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" asChild className="inline-flex items-center">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              Go Back
            </Link>
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-small text-muted-foreground">
            Need help? <Link href="/contact" className="text-primary hover:underline focus-ring">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
