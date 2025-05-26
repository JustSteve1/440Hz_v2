
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { Send } from "lucide-react";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(1, { message: "Message is required" }).max(500, { message: "Message must be 500 words or less" })
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // For message field, limit to 500 words
    if (name === "message" && value.split(/\s+/).filter(word => word.length > 0).length > 500) {
      return;
    }
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear the error for this field when user starts typing again
    if (errors[name as keyof ContactFormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormValues> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormValues] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Contact Form Submission");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:info@440hz.uk?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast.success("Email client opened!", {
        description: "Your default email application should now be open with the message ready to send.",
      });
      
      // Reset form and close dialog
      setFormData({ name: "", email: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error("Error opening email client:", error);
      toast.error("Failed to open email client", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const wordCount = formData.message.split(/\s+/).filter(word => word.length > 0).length;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Send us a message and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <div className="flex justify-between items-center">
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
              <p className="text-sm text-gray-500 ml-auto">
                {wordCount}/500 words
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              type="button"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#9b87f5] hover:bg-[#D6BCFA]"
            >
              {isSubmitting ? (
                "Opening..."
              ) : (
                <>
                  Send
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
