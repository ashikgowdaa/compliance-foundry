"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Flex from "@/utitly-css/Flex";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Office } from "./office";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface ContactUsModalProps {
  open: boolean;
}

const ContactUsModal = ({ open }: ContactUsModalProps) => {
  const [isOpen, setIsOpen] = React.useState(open);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumer: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to API / service
    console.log(form);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl secondary-font text-start"> Get in Touch </DialogTitle>
          <p className="text-start">You can reach us anytime</p>

          <DialogDescription>
            <Flex gap="12">
              <form onSubmit={handleSubmit}>
                <Flex direction="col" className="mb-4">
                  <Flex gap="4" direction="col-sm-row">
                    <Input
                      placeholder="First Name"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </Flex>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    name="phoneNumer"
                    value={form.phoneNumer}
                    onChange={handleChange}
                  />
                  <Textarea
                    placeholder="How can we help you?"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />

                  <Button
                    width="full"
                    variant="primary"
                    title="Submit"
                    className="!text-md !font-normal "
                  />
                  <Flex direction="col" gap="1">
                    <span>By contacting us, you agree to our </span>
                    <span>
                      <span className="text-primary underline">
                        Terms of service
                      </span>
                      <span className="mx-1 no-underline">
                        and
                      </span>
                      <span className="text-primary underline">
                        Privacy Policy
                      </span>
                    </span>
                  </Flex>
                </Flex>
              </form>
            </Flex>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUsModal;
