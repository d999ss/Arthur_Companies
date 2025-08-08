'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';

import { trpc } from '@/lib/trpc/client';

export default function HistoryPage() {
  const { data: historyData, isLoading, error } = trpc.data.getHistory.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-foreground mb-6" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em"}}>Our History</h1>
              <p className="text-title text-muted-foreground">Loading company history...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-foreground mb-6" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em"}}>Error Loading History</h1>
              <p className="text-title text-red-600 mb-4">{error.message}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const milestones = historyData?.data || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-foreground mb-6" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em"}}>Our History</h1>
            <p className="text-title text-muted-foreground mb-6">
              Over a Century of Growth and Innovation
            </p>
            <p className="text-body-large text-muted-foreground">
              From a single wooden elevator in 1906 to a diversified agricultural enterprise, Arthur Companies has grown alongside the communities we serve for over a century.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <Card key={milestone.year} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-24 flex-shrink-0">
                        <div className="inline-block bg-amber-600 text-white px-4 py-2 rounded-lg font-bold text-lg">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-title text-foreground mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
