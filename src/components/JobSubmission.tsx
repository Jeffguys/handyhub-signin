
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Camera, Upload, Check, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const JobSubmission = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, isVisible] = useScrollAnimation(0.1);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setImages(prev => [...prev, ...newFiles]);
      
      // Create previews for all new files
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreviews(prev => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearAllImages = () => {
    setImages([]);
    setImagePreviews([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setDescription('');
      setImages([]);
      setImagePreviews([]);
      
      toast({
        title: "Job submitted successfully!",
        description: "We'll contact you shortly to discuss your project.",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div 
          ref={ref}
          className={cn(
            "flex flex-col lg:flex-row gap-12 items-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          )}
        >
          <div className="flex-1 w-full lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6">Submit Your Project</h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your repair needs and upload photos of the job. Our team will review your request and get back to you with a quote.
              </p>
              
              <div className="space-y-6 md:space-y-10">
                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Camera className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Upload Job Photos</h3>
                    <p className="text-sm text-muted-foreground">
                      Share multiple photos of what needs to be fixed to help us prepare an accurate quote.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Detailed Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Provide a description of what needs to be fixed and any relevant details.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">20 Minutes Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your job and contact you within 20 minutes to discuss next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full lg:w-1/2">
            <div className="glass-card rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium mb-2">Project Description</label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please describe what needs to be fixed..."
                      required
                      className="w-full min-h-[120px]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Photos</label>
                    <div className="mt-1 flex flex-col px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-lg">
                      <div className="space-y-1 text-center">
                        {imagePreviews.length > 0 ? (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-500">{imagePreviews.length} image(s) selected</span>
                              <button 
                                type="button"
                                onClick={handleClearAllImages}
                                className="text-xs text-red-500 hover:text-red-700"
                              >
                                Clear all
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {imagePreviews.map((preview, index) => (
                                <div key={index} className="relative">
                                  <img 
                                    src={preview} 
                                    alt={`Preview ${index + 1}`} 
                                    className="h-24 w-full object-cover rounded-lg"
                                  />
                                  <button 
                                    type="button"
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              ))}
                              
                              <label
                                htmlFor="file-upload"
                                className="relative h-24 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50"
                              >
                                <div className="flex flex-col items-center">
                                  <Upload className="h-8 w-8 text-gray-400" />
                                  <span className="text-xs text-gray-500 mt-1">Add more</span>
                                </div>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  accept="image/*"
                                  className="sr-only"
                                  multiple
                                  onChange={handleImageChange}
                                  ref={fileInputRef}
                                />
                              </label>
                            </div>
                          </div>
                        ) : (
                          <>
                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600 justify-center">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/90 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary"
                              >
                                <span>Upload files</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  accept="image/*"
                                  className="sr-only"
                                  multiple
                                  onChange={handleImageChange}
                                  ref={fileInputRef}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB each</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Job Request"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSubmission;
