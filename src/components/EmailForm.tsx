
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/lib/animations';
import { useToast } from '@/components/ui/use-toast';
import { Mail } from 'lucide-react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      toast({
        title: "Success!",
        description: "You've signed up successfully. We'll be in touch soon.",
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div 
        className="container px-4 md:px-6 mx-auto"
        ref={ref}
      >
        <div 
          className={cn(
            "glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Sign Up for Updates</h2>
            <p className="text-muted-foreground max-w-md">
              Stay informed about our services and get exclusive deals by signing up with your email.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow h-12 px-4 bg-white border border-input shadow-sm"
              />
              <Button 
                type="submit" 
                className="h-12 px-6 whitespace-nowrap"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up"}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              We respect your privacy and won't share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailForm;
