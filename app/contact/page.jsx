"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from "@emailjs/browser";
import info from "./data/info";
import emailData from "./data/email";

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (value, type) => {
    if (type === "firstname") {
      setFirstname(value);
    } else if (type === "lastname") {
      setLastname(value);
    } else if (type === "phone") {
      setPhone(value);
    } else if (type === "email") {
      setEmail(value);
    } else if (type === "service") {
      setService(value);
    } else if (type === "message") {
      setMessage(value);
    }
  };

  const handleServiceChange = (value) => {
    setService(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const contactData = {
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      email: email,
      service: service,
      message: message,
    };

    emailjs
      .send(
        emailData.service_id,
        emailData.template_id,
        contactData,
        emailData.public_key
      )
      .then(
        (response) => {
          // console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully!");
          setFirstname("");
          setLastname("");
          setPhone("");
          setEmail("");
          setService("");
          setMessage("");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send email.");
        }
      );
  };


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together!</h3>
              <p className="text-white/60 text-sm">
                Feel free to reach out if you’d like to collaborate, require my
                expertise, or have any questions. I’m happy to assist and
                discuss how I can contribute to your project.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  className="rounded-[5px]"
                  type="text"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => {
                    handleInput(e.target.value, "firstname");
                  }}
                />
                <Input
                  className="rounded-[5px]"
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => {
                    handleInput(e.target.value, "lastname");
                  }}
                />
                <Input
                  className="rounded-[5px]"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    handleInput(e.target.value, "email");
                  }}
                />
                <Input
                  className="rounded-[5px]"
                  type="tel"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => {
                    handleInput(e.target.value, "phone");
                  }}
                />
              </div>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full rounded-[5px]">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Developement</SelectItem>
                    <SelectItem value="front-end">
                      Frontend Developement
                    </SelectItem>
                    <SelectItem value="back-end">
                      Backend Developement
                    </SelectItem>
                    <SelectItem value="seo">SEO Optimization</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="question">General Question</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                value={message}
                onChange={(e) => {
                  handleInput(e.target.value, "message");
                }}
                className="h-[200px]"
                placeholder="Type your message"
              />
              <Button onClick={handleClick} size="md" className="max-w-[200px]">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white">{item.title}</p>
                      <h3 className="text-sm xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
