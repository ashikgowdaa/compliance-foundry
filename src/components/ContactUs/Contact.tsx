"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "../custom-components/Input";
import { Textarea } from "../custom-components/Textarea";
import { Office } from "../custom-components/office";
import Wrapper from "@/utitly-css/Wrapper";
import Flex from "@/utitly-css/Flex";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
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
    <Wrapper className="bg-primary">
      <Flex>
        <div className="w-[80%]">
          <Flex direction="col">
            <p>aboutData?.sectionLabel</p>
            <h4>
              aboutData?.title <br /> aboutData?.subtitle
            </h4>
          </Flex>
          <Flex gap="12">
            <form onSubmit={handleSubmit} className="space-y-4 border-2 p-8">
              <h1 className="text-3xl">
                Your Vission , Our Mission:Lets <br /> Shape Success Together
              </h1>
              <Input
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Input
                placeholder="Company Name"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
              <Input
                placeholder="Email Address"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <Textarea
                placeholder="Describe Your Requirement"
                name="message"
                value={form.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-sm hover:opacity-90 transition"
              >
                Submit <ArrowRight size={16} />
              </button>
            </form>
            <Flex direction="col" align="start">
              <div>
                <div className="uppercase text-xs tracking-widest text-gray-400">
                  Get in Touch
                </div>
                <div className="text-2xl md:text-2xl font-medium mt-2 leading-snug ">
                  Connect for excellence: your gateway to exceptional solutions.
                </div>
              </div>
              <Flex wrap={true} justify="start">
                <Office
                  flag="CA"
                  title="Development Office"
                  address={`2 County Court Blvd,\nSuite 400, Brampton,\nOntario L6W 3W8`}
                />

                <Office
                  flag="IN"
                  title="Development Office"
                  address={`2 County Court Blvd,\nSuite 400, Brampton,\nOntario L6W 3W8`}
                />

                <Office
                  flag="AE"
                  title="Development Office"
                  address={`2 County Court Blvd,\nSuite 400, Brampton,\nOntario L6W 3W8`}
                />
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
    </Wrapper>
  );
}
