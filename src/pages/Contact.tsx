import { useState, useEffect } from "react";

import { Mail, Phone, MapPin } from "lucide-react";

import { toast } from "sonner";


// 2. MOCK COMPONENTS (Delete these in your project)

// ==========================================

const Button = ({ className, variant, size, ...props }: any) => (

  <button 

    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#E0683D] text-white hover:bg-[#c25730] h-11 px-8 ${className}`} 

    {...props} 

  />

);



const Input = ({ className, ...props }: any) => (

  <input 

    className={`flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0683D] disabled:cursor-not-allowed disabled:opacity-50 ${className}`} 

    {...props} 

  />

);



const Textarea = ({ className, ...props }: any) => (

  <textarea 

    className={`flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0683D] disabled:cursor-not-allowed disabled:opacity-50 ${className}`} 

    {...props} 

  />

);

// ==========================================





const Contact = () => {

  // Added state for hero animation

  const [isVisible, setIsVisible] = useState(false);



  useEffect(() => {

    const timer = setTimeout(() => setIsVisible(true), 100); 

    return () => clearTimeout(timer);

  }, []);



  const [formData, setFormData] = useState({

    name: "",

    email: "",

    phone: "",

    message: "",

  });



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    toast.success("Thank you! We'll get back to you soon.");

    setFormData({ name: "", email: "", phone: "", message: "" });

  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });

  };



  return (

    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Navigation Removed */}



      {/* --- NEW HERO BANNER WITH REPLACED IMAGE --- */}

      <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">

        {/* Background Image */}

        <div 

          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[20s] ease-linear hover:scale-110"

          // Updated Image URL below

          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2728&auto=format&fit=crop")' }}

        ></div>

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-black/40"></div>

        

        {/* Hero Content */}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">

          <p className={`text-[#E0683D] font-bold tracking-wider uppercase mb-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            Get In Touch

          </p>

          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            Let's Start Your <br/> Design Journey

          </h1>

          <p className={`text-lg md:text-xl text-gray-200 max-w-2xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            Ready to transform your space? Let's create something extraordinary together.

          </p>

        </div>

      </div>

      

      <main className="py-24">

        <div className="container mx-auto px-6 lg:px-12">

          <div className="max-w-6xl mx-auto">



            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Contact Form */}

              <div className="animate-scale-in">

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>

                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">

                      Your Name

                    </label>

                    <Input

                      id="name"

                      name="name"

                      type="text"

                      required

                      value={formData.name}

                      onChange={handleChange}

                      placeholder="John Doe"

                      className="h-12 border-gray-200" 

                    />

                  </div>



                  <div>

                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">

                      Email Address

                    </label>

                    <Input

                      id="email"

                      name="email"

                      type="email"

                      required

                      value={formData.email}

                      onChange={handleChange}

                      placeholder="john@example.com"

                      className="h-12 border-gray-200"

                    />

                  </div>



                  <div>

                    <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700">

                      Phone Number

                    </label>

                    <Input

                      id="phone"

                      name="phone"

                      type="tel"

                      value={formData.phone}

                      onChange={handleChange}

                      placeholder="+234 xxx xxx xxxx"

                      className="h-12 border-gray-200"

                    />

                  </div>



                  <div>

                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">

                      Tell Us About Your Project

                    </label>

                    <Textarea

                      id="message"

                      name="message"

                      required

                      value={formData.message}

                      onChange={handleChange}

                      placeholder="Describe your project, space, or design vision..."

                      className="min-h-[150px] border-gray-200"

                    />

                  </div>



                  <Button 

                    type="submit" 

                    size="lg" 

                    className="w-full"

                  >

                    Send Message

                  </Button>

                </form>

              </div>



              {/* Contact Information */}

              <div className="space-y-8" style={{ animationDelay: "200ms" }}>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

                  <h2 className="font-bold text-2xl mb-6 text-gray-900">Get In Touch</h2>

                  

                  <div className="space-y-6">

                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-lg bg-[#E0683D]/10 flex items-center justify-center flex-shrink-0">

                        <Mail className="w-5 h-5 text-[#E0683D]" />

                      </div>

                      <div>

                        <p className="font-medium text-gray-900 mb-1">Email</p>

                        <a href="mailto:info@designsbymay.com" className="text-gray-500 hover:text-[#E0683D] transition-colors">

                          info@designsbymay.com

                        </a>

                      </div>

                    </div>



                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-lg bg-[#E0683D]/10 flex items-center justify-center flex-shrink-0">

                        <Phone className="w-5 h-5 text-[#E0683D]" />

                      </div>

                      <div>

                        <p className="font-medium text-gray-900 mb-1">Phone</p>

                        <a href="tel:+2341234567890" className="text-gray-500 hover:text-[#E0683D] transition-colors">

                          +234 123 456 7890

                        </a>

                      </div>

                    </div>



                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-lg bg-[#E0683D]/10 flex items-center justify-center flex-shrink-0">

                        <MapPin className="w-5 h-5 text-[#E0683D]" />

                      </div>

                      <div>

                        <p className="font-medium text-gray-900 mb-1">Location</p>

                        <p className="text-gray-500">

                          Lagos, Nigeria

                        </p>

                      </div>

                    </div>

                  </div>

                </div>



                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">

                  <h3 className="font-bold text-xl mb-4 text-gray-900">Business Hours</h3>

                  <div className="space-y-2 text-gray-500">

                    <p className="flex justify-between">

                      <span>Monday - Friday:</span>

                      <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>

                    </p>

                    <p className="flex justify-between">

                      <span>Saturday:</span>

                      <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>

                    </p>

                    <p className="flex justify-between">

                      <span>Sunday:</span>

                      <span className="font-medium text-gray-900">Closed</span>

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

};



export default Contact;
