import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertContactRequestSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

// Extended schema with client-side validation
const formSchema = insertContactRequestSchema.extend({
  privacy: z.boolean().refine(val => val === true, {
    message: "개인정보 수집 및 이용에 동의해야 합니다.",
  })
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      privacy: false,
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (data: Omit<FormValues, "privacy">) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "문의가 접수되었습니다",
        description: "빠른 시일 내에 답변 드리겠습니다.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "문의 접수 중 오류가 발생했습니다",
        description: error.message || "다시 시도해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    const { privacy, ...contactData } = data;
    mutation.mutate(contactData);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-16">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 지원의 미래를 경험하세요</h2>
            <p className="text-xl text-gray-600 mb-8">
              WeDo Desk로 고객 만족도를 높이고 팀의 업무 효율성을 향상시켜 보세요. 지금 바로 데모를 신청하거나 상담을 문의하세요.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
              alt="WeDo Desk를 활용한 팀 협업" 
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">문의하기</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름 *</FormLabel>
                        <FormControl>
                          <Input placeholder="이름을 입력하세요" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>회사명 *</FormLabel>
                        <FormControl>
                          <Input placeholder="회사명을 입력하세요" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이메일 *</FormLabel>
                        <FormControl>
                          <Input placeholder="이메일을 입력하세요" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>전화번호</FormLabel>
                        <FormControl>
                          <Input placeholder="전화번호를 입력하세요" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>문의 내용 *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="문의 내용을 입력하세요" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="privacy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          개인정보 수집 및 이용에 동의합니다.
                        </FormLabel>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#3284D6] text-white hover:bg-opacity-90"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      처리 중...
                    </>
                  ) : (
                    "문의하기"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
