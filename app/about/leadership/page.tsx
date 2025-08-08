'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';

import { trpc } from '@/lib/trpc/client';

export default function LeadershipPage() {
  const { data: leadershipData, isLoading, error } = trpc.data.getLeadership.useQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-foreground mb-6" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em"}}>Leadership Team</h1>
              <p className="text-title text-muted-foreground">Loading leadership information...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-foreground mb-6" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em"}}>Error Loading Leadership</h1>
              <p className="text-title text-red-600 mb-4">{error.message}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const leaders = leadershipData?.data || [];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-foreground mb-6" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em"}}>Leadership Team</h1>
            <p className="text-title text-muted-foreground">
              Meet the leaders driving Arthur Companies forward
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {leaders.map((leader) => (
              <Card key={leader.name} className="border-0 shadow-lg max-w-5xl mx-auto">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <h3 className="text-title text-foreground mb-1">{leader.name}</h3>
                      <p className="text-primary font-semibold">{leader.title}</p>
                    </div>
                    <div className="md:col-span-3">
                      <p className="text-muted-foreground leading-relaxed mb-6">{leader.bio}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Expertise</h4>
                          <ul className="space-y-1">
                            {leader.expertise.map((skill) => (
                              <li key={skill} className="text-muted-foreground text-sm">• {skill}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Education</h4>
                          <p className="text-muted-foreground text-sm">{leader.education}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
