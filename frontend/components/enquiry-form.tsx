"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Loader2, User, Mail, Phone, Building2, MessageSquare, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { supabase } from "@/lib/supabase"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required").regex(/^[+\d][\d\s\-().]{6,14}$/, "Enter a valid phone number"),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export function EnquiryForm({ onSuccess }: { onSuccess?: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const { error } = await supabase.from('leads').insert({
                name: values.name,
                email: values.email,
                phone: values.phone || null,
                company: values.company || null,
                message: values.message,
                source: 'contact_page',
                metadata: { timestamp: new Date().toISOString() }
            })

            if (error) {
                console.error("Supabase error:", {
                    message: error.message,
                    details: error.details,
                    hint: error.hint,
                    code: error.code,
                })
                toast.error(error.message || "Failed to send enquiry.")
                return
            }

            toast.success("Enquiry sent! We'll get back to you soon.")
            form.reset()
            onSuccess?.()
        } catch (err) {
            console.error("Unexpected error:", JSON.stringify(err, null, 2))
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#0A1A3A] font-semibold flex items-center gap-2">
                                    <User size={16} className="text-[#3B82F6]" />
                                    Full Name
                                </FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input 
                                            placeholder="John Doe" 
                                            {...field} 
                                            className="bg-gray-50/50 border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]/10 transition-all duration-300 rounded-xl py-6"
                                        />
                                    </div>
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#0A1A3A] font-semibold flex items-center gap-2">
                                    <Mail size={16} className="text-[#3B82F6]" />
                                    Email Address
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="info@upliftsmedia.com" 
                                        {...field} 
                                        className="bg-gray-50/50 border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]/10 transition-all duration-300 rounded-xl py-6"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[#0A1A3A] font-semibold flex items-center gap-2">
                                    <Phone size={16} className="text-[#3B82F6]" />
                                    Phone Number
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        placeholder="+91 98765 43210" 
                                        type="tel"
                                        {...field} 
                                        className="bg-gray-50/50 border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]/10 transition-all duration-300 rounded-xl py-6"
                                    />
                                </FormControl>
                                <FormMessage className="text-xs" />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#0A1A3A] font-semibold flex items-center gap-2">
                                <Building2 size={16} className="text-[#3B82F6]" />
                                Company (Optional)
                            </FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder="Acme Inc." 
                                    {...field} 
                                    className="bg-gray-50/50 border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]/10 transition-all duration-300 rounded-xl py-6"
                                />
                            </FormControl>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-[#0A1A3A] font-semibold flex items-center gap-2">
                                <MessageSquare size={16} className="text-[#3B82F6]" />
                                How can we help?
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us about your project goals and challenges..."
                                    className="bg-gray-50/50 border-gray-200 focus:border-[#3B82F6] focus:ring-[#3B82F6]/10 transition-all duration-300 rounded-xl min-h-[120px] resize-none py-4"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="text-xs" />
                        </FormItem>
                    )}
                />

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                >
                    <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-[#0A1A3A] to-[#1A2A4A] hover:from-[#3B82F6] hover:to-[#10B981] text-white font-bold h-14 rounded-xl transition-all duration-500 shadow-lg shadow-blue-900/10" 
                        disabled={isSubmitting}
                    >
                        <AnimatePresence mode="wait">
                            {isSubmitting ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Processing...
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="normal"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-2"
                                >
                                    <Send size={18} />
                                    Send Action Plan
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </motion.div>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                    By submitting, you agree to our <a href="#" className="underline hover:text-[#3B82F6]">Privacy Policy</a>.
                </p>
            </form>
        </Form>
    )
}
